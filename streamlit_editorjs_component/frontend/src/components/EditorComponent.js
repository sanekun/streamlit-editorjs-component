import {
    Streamlit,
    StreamlitComponentBase,
    withStreamlitConnection
} from "streamlit-component-lib";
import React, { useRef, useEffect } from 'react';
import { EDITOR_JS_TOOLS } from './constant';
import EditorJS from '@editorjs/editorjs';

// if st_height === null; set 500px
//let st_height = this.props.args["height"] | 500;

class Mycomponent extends StreamlitComponentBase {
    render = () => {
        let initialData = this.props.args["data"];
        let st_height = this.props.args["height"] || 500;
        return (
            <div style={{height: `${st_height}px`}}>
                <div style={{height: "90%", overflow: "auto", margin: "10px", padding: "10px", width: "90%"}}>
                    <EditorComponent
                    initialData={initialData}
                    />
                </div>
            </div>
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
        Streamlit.setComponentReady();
        initEditor();
        if (editorRef.current === null) {
        }

        return () => {
            editorRef?.current?.destory();
            editorRef.current = null;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="editorjs">
            {/* Editor will be rendered here */}
        </div>
    );
}

export default withStreamlitConnection(Mycomponent);