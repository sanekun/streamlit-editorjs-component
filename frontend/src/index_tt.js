import React from 'react';
import ReactDOM from 'react-dom/client';
import EditorComponent from './components/EditorComponent_ori';
// import MyComponent from './components/MyComponent.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{padding:'10px'}}>
    <EditorComponent />
    </div>
  </React.StrictMode>
);
