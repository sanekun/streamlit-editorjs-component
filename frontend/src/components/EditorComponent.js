import React, { useRef, useEffect } from 'react';
import { EDITOR_JS_TOOLS } from './constant';
import EditorJS from '@editorjs/editorjs';

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
            onChange: async () => {
                content = await editor.saver.save();
                console.log(content);
            },
            tools: EDITOR_JS_TOOLS,
        });
    };

    useEffect(() => {
        if (editorRef.current === null) {
            initEditor();
        }

        return () => {
            editorRef?.current?.destory();
            editorRef.current = null;
        };
    }, [initialData]);

    return (
        <div id="editorjs">
            {/* Editor will be rendered here */}
        </div>
    );
}
export { content };
export default EditorComponent;