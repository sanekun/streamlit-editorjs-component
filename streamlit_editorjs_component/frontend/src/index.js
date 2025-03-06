import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './components/EditorComponent';
// import MyComponent from './components/EditorComponent_ori';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<div>
			<MyComponent />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);
