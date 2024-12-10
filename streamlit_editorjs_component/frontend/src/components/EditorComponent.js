import {
    Streamlit,
    StreamlitComponentBase,
    withStreamlitConnection
} from "streamlit-component-lib";
import React, { useRef, useEffect } from 'react';
import { EDITOR_JS_TOOLS } from './constant';
import EditorJS from '@editorjs/editorjs';
import Header from "@editorjs/header";

// class Mycomponent extends StreamlitComponentBase {
//     render = () => {
//         let initialData = this.props.args["data"];
//         let st_height = this.props.args["height"] || 500;
//         return (
//             <div style={{height: `${st_height}px`}}>
//                 <div style={{height: "90%", overflow: "auto", margin: "20px", padding: "20px", width: "90%"}}>
//                     <EditorComponent
//                     initialData={initialData}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }

class Mycomponent extends StreamlitComponentBase {
    render = () => {
        let initialData = this.props.args["data"];
        let st_height = this.props.args["height"] || 500;
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
            placeholder: 'use \'/\' to create a new block',
            onReady: () => {
                editorRef.current = editor;
            },
            autofocus: true,
            data: initialData || {},
            onChange: async () => {
                content = await editor.saver.save();
                console.log(JSON.stringify(content));
                Streamlit.setComponentValue(JSON.stringify(content));
            },
            // tools: EDITOR_JS_TOOLS,
            tools: {
                header: Header,
            }
        });
    };

    useEffect(() => {
        initEditor();
        if (editorRef.current === null) {
            Streamlit.setComponentReady();
            initEditor();
        }
        return () => {
            editorRef?.current?.destroy();
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