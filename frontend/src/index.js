import React from 'react';
import ReactDOM from 'react-dom/client';
// import MyComponent from './components/EditorComponent';
import reportWebVitals from './reportWebVitals';
import MyComponent from './components/MyComponent.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{padding:'10px'}}>
    <MyComponent />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
