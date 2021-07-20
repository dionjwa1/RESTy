import React from 'react';
import beautify from "json-beautify";
function Results (props){
 
    return (
      <section>
        <pre>{props.data ? beautify(props.data, undefined, 2) : null}</pre>
      </section>
    );
  }

export default Results;