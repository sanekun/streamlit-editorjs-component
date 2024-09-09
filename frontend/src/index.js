import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './components/EditorComponent';
// import MyComponent from './components/EditorComponent_ori';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{padding: "10px", margin: "10px", width: "90%", border: "1px"}}> 
    <MyComponent />
    </div>
  </React.StrictMode>
);