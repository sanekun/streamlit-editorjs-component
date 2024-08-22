import React, { useRef, useEffect } from 'react';
import { EDITOR_JS_TOOLS } from './constant';
import EditorJS from '@editorjs/editorjs';
import { Streamlit } from 'streamlit-component-lib';

let content = null;

function EditorComponent({ initialData }) {
    const editorRef = useRef();

    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            placeholder: 'use \'/\' to create a new block',
            onReady: () => {
                editorRef.current = editor;
            },
            autofocus: true,
            data: initialData || {},
            onSave: async () => {
                content = await editor.saver.save();
                console.log(JSON.stringify(content));
                Streamlit.setComponentValue(JSON.stringify(content));
            },
            tools: EDITOR_JS_TOOLS,
        });
    };

    useEffect(() => {
        Streamlit.setFrameHeight();
        if (editorRef.current === null) {
            initEditor();
        }

        return () => {
            editorRef?.current?.destory();
            editorRef.current = null;
        };
    }, []);

    return (
        <div id="editorjs">
            {/* Editor will be rendered here */}
        </div>
    );
}
export { content };
export default EditorComponent;