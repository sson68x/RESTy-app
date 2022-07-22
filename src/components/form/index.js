import { useState } from 'react';
import './form.scss';

const Form = (props) => {

  const [method, setMethod] = useState('GET');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method,
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  };

  const handleMethod = (e) => {
    setMethod(e.target.id);
  }

  return (
    <>
      <form onSubmit={handleSubmit} data-testid="submit">
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={handleMethod}>GET</span>
          <span id="post" onClick={handleMethod}>POST</span>
          <span id="put" onClick={handleMethod}>PUT</span>
          <span id="delete" onClick={handleMethod}>DELETE</span>
        </label>
        <textarea id="text" placeholder="Enter valid JSON body here"></textarea>
      </form>
    </>
  );
}

export default Form;
