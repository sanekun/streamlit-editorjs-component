import {
    Streamlit,
    StreamlitComponentBase,
    withStreamlitConnection
} from "streamlit-component-lib";
import React, { ReactNode } from "react";
import EditorComponent from "./EditorComponent";

class MyComponent extends StreamlitComponentBase {
    render = () => {
        const initialData =this.props.args["initialData"];

        return (
            <EditorComponent 
            initialData={initialData}
            />
        );
    }
}

export default withStreamlitConnection(MyComponent);