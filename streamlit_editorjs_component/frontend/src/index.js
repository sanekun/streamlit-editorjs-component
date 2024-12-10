import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './components/EditorComponent';
// import MyComponent from './components/EditorComponent_ori';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <div>
        <h1>Hello Wolrd!</h1>
        <MyComponent />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
);