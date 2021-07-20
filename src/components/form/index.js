import React, {useState} from 'react';

import './form.scss';

function Form(props) {

  let [method, setMethod] = useState();
  let [url, setUrl] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
  }
  const handleMethod = (e) => {
    e.preventDefault();
    setMethod(e.target.id)
  };
  const handleUrl = (e) => {
    e.preventDefault();
    setUrl(e.target.value)
  };
    return (
      <>
        <form>
          <label >
            <span>URL: </span>
            <input onChange = {handleUrl} name='url' type='text' />
            <button onClick = {handleSubmit} type="submit">Do It!</button>
          </label>
          <label onClick = {handleMethod} className="methods">
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
  }


export default Form;