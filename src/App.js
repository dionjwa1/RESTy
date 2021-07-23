import React, { useEffect, useState, useReducer } from 'react';
import './app.scss';
import axios from 'axios';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const initialState = {
  requestParams: {},
  data: {},
  history: [],
  isLoading: false,
};

function appReducer(state = initialState, action) {

  switch (action.type) {
    case 'UPDATE_REQUEST_PARAMS':
      return { ...state, reactParams: { ...action.payload }, };
    case 'ASSIGN_DATA':
      return { ...state, data: { ...action.payload }, }
    case 'UPDATE_HISTORY':
      return { ...state, history: { ...action.payload }, }
    case 'TOGGLE_LOAD':
      return { ...state, isLoading: !state.isLoading }
    default:
      return state;
  };

}
function App() {

  const [state, dispatch] = useReducer(appReducer, initialState);

  const handleUpdateParams = () => {
    const params = {
      method: 'GET',
      url: ''
    };
    
    const action = {
      type: 'UPDATE_REQUEST_PARAMS',
      payload: params
    };
    dispatch(action);
  }
  const handleAssignData = () => {
    const params = {
      method: 'GET',
      url: ''
    };
    
    const action = {
      type: 'ASSIGN_DATA',
      payload: params
    };
    dispatch(action);
  }
  const handleUpdateHistory = () => {
    const params = {
      method: 'GET',
      url: ''
    };
    
    const action = {
      type: 'UPDATE_HISTORY',
      payload: params
    };
    dispatch(action);
  }
  const handleToggleLoad = () => {
    const params = {
      method: 'GET',
      url: ''
    };
    
    const action = {
      type: 'TOGGLE_LOAD',
      payload: params
    };
    dispatch(action);
  }
  
  // const [data, setData] = useState({});
  // const [requestParams, setRequestParams] = useState({});
  
  useEffect(() => {
    callApi(state.requestParams);
  //   if (state.data.results) {
  //     axios.get(state.data.results[0].url)
  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(err => console.log.error(err))
  //   }
  },[state.requestParams])
  const callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        { name: 'Pokemon', url: 'https://pokeapi.co/api/v2/pokemon/ditto' },
        { name: 'Amazon', url: 'http://amazon.com' },
      ],
    };
    // setData(data);
    // setRequestParams(requestParams);
    // this.setState({data, requestParams});
  }


  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={handleUpdateParams, handleAssignData, handleUpdateHistory, handleToggleLoad} />
      <Results data={state.data} />
      <Footer />
    </React.Fragment>
  );
}


export default App;