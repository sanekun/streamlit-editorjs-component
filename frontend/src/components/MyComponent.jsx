import {
    Streamlit,
    StreamlitComponentBase,
    withStreamlitConnection
} from "streamlit-component-lib";
import React, { ReactNode } from "react";
import EditorComponent from "./EditorComponent";

class MyComponent extends StreamlitComponentBase {
    render = () => {
        return (
            <EditorComponent />
        );
    }
}

export default withStreamlitConnection(MyComponent);