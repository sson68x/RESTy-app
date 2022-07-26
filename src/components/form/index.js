import { useState } from 'react';
import './form.scss';

const Form = (props) => {

  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [JSON, setJSON] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method,
      url,
      JSON,
    };
    props.handleApiCall(formData);
  };

  const handleMethod = (e) => {
    setMethod(e.target.id);
    setJSON('');
  }

  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleBody = (e) => {
    setJSON(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} data-testid="submit">
        <label >
          <span>URL: </span>
          <input onChange={handleUrl} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={handleMethod}>GET</span>
          <span id="post" onClick={handleMethod}>POST</span>
          <span id="put" onClick={handleMethod}>PUT</span>
          <span id="delete" onClick={handleMethod}>DELETE</span>
        </label>
        {method === "PUT" || method === "POST"
          ?
          <>
            <textarea
              type="text"
              onChange={handleBody}
            >
            </textarea>
          </>
          : null}
      </form>
    </>
  );
}

export default Form;
