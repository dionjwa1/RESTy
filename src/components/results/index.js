import React from 'react';
import beautify from "json-beautify";

function Results (props){
 
    return (
      <section>
        <input test data-testid='resultData' value={props.data ? beautify(props.data, undefined, 2) : null} />
      </section>
    );
  }

export default Results;