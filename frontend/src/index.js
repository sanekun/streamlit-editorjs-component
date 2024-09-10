import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './components/EditorComponent';
//import MyComponent from './components/EditorComponent_ori';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div> 
      <MyComponent style={{border: "solid"}} />
    </div>
  </React.StrictMode>
);