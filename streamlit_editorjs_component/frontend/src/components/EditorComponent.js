import { Streamlit, StreamlitComponentBase, withStreamlitConnection } from 'streamlit-component-lib';
import React, { useRef, useEffect } from 'react';
import { EDITOR_JS_TOOLS } from './constant';
import EditorJS from '@editorjs/editorjs';

class Mycomponent extends StreamlitComponentBase {
	render = () => {
		let initialData = this.props.args['data'];
		let st_height = this.props.args['height'] || 500;
		let readOnly = this.props.args['readonly'] || false;

		return (
			<div style={{ height: `${st_height}px` }}>
				<div style={{ height: '90%', overflow: 'auto', margin: '20px', padding: '20px', width: '90%' }}>
					<EditorComponent initialData={initialData} readOnly={readOnly} />
				</div>
			</div>
		);
	};
}

function EditorComponent({ initialData, readOnly }) {
	const editorRef = useRef();
	let content = null;

	const initEditor = () => {
		const editor = new EditorJS({
			holder: 'editorjs',
			placeholder: readOnly ? 'readonly mode' : "use '/' to create a new block",
			readOnly: readOnly,
			onReady: () => {
				editorRef.current = editor;
			},
			autofocus: !readOnly,
			data: initialData || {},
			onChange: async () => {
				content = await editor.saver.save();
				Streamlit.setComponentValue(content);
			},
			tools: EDITOR_JS_TOOLS,
		});
	};

	useEffect(() => {
		// console.log(editorRef.current);
		if (editorRef.current === undefined) {
			// not null, undefined
			initEditor();
			Streamlit.setComponentReady();
		}
		return () => {
			editorRef?.current?.destroy();
			editorRef.current = null;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div id="editorjs">{/* Editor will be rendered here */}</div>;
}

export default withStreamlitConnection(Mycomponent);
