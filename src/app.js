import { useEffect, useReducer } from 'react';
import './app.scss';
import axios from 'axios';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

export const initialState = {
  data: null,
  requestParams: {},
}

export const restyReducer = (state, action) => {

  switch (action.type) {

    case 'DATA':
      return {
        ...state,
        data: action.payload,
      }

    case 'PARAMS':
      return {
        ...state,
        requestParams: action.payload
      }

    default:
      return state
  }
}


const App = () => {

  const [state, dispatch] = useReducer(restyReducer, initialState);

  function callApi(requestParams) {
    dispatch({ type: 'PARAMS', payload: requestParams });
  }

  useEffect(() => {
    const getData = async () => {
      if (state.requestParams.url) {
        const response = await axios({
          method: state.requestParams.method,
          url: state.requestParams.url,
        })
        dispatch({ type: 'DATA', payload: response.data })
      }
    }
    getData();
  }, [state.requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={state.data} />
      <History
        data={state.data}
        requestParams={state.requestParams}
      />
      <Footer />
    </>
  );
}

export default App;
