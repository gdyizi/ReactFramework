/*Hello World!*/
import React from 'react';
import ReactDom from 'react-dom';
import Hello from './hello.js';

let App = React.createClass({
  render(){
    return (
      <Hello />
    );
  }
});


ReactDom.render(
  <App />,
  document.body
  )
