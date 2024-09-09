import {
    Streamlit,
    StreamlitComponentBase,
    withStreamlitConnection
} from "streamlit-component-lib";
import React, { useRef, useEffect } from 'react';
import { EDITOR_JS_TOOLS } from './constant';
import EditorJS from '@editorjs/editorjs';

class Mycomponent extends StreamlitComponentBase {
    render = () => {
        const initialData = this.props.args["data"];

        return (
            <EditorComponent 
            initialData={initialData}
            />
        );
    }
}

function EditorComponent ({ initialData }) {
    const editorRef = useRef();
    let content = null;

    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            tools: EDITOR_JS_TOOLS,
            placeholder: 'use \'/\' to create a new block',
            onReady: () => {
                editorRef.current = editor;
            },
            autofocus: true,
            data: initialData || {},
            onChange: async () => {
                content = await editor.saver.save();
                //console.log(JSON.stringify(content));
                Streamlit.setComponentValue(JSON.stringify(content));
            },
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

export default withStreamlitConnection(Mycomponent);