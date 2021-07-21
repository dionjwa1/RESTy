import React, { useEffect, useState } from 'react';
import './app.scss';
import axios from 'axios';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  const [data, setData] = useState({});
  const [requestParams, setRequestParams] = useState({});

  useEffect(() => {
    if (data.results) {
      axios.get(data.results[0].url)
        .then(response => {
          console.log(response);
        })
        .catch(err => console.log.error(err))
    }
  })
  const callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        { name: 'Pokemon', url: 'https://pokeapi.co/api/v2/pokemon/ditto' },
        { name: 'Amazon', url: 'http://amazon.com' },
      ],
    };
    setData(data);
    setRequestParams(requestParams);
    // this.setState({data, requestParams});
  }


return (
  <React.Fragment>
    <Header />
    <div>Request Method: {requestParams.method}</div>
    <div>URL: {requestParams.url}</div>
    <Form handleApiCall={callApi} />
    <Results data={data} />
    <Footer />
  </React.Fragment>
);
  }


export default App;