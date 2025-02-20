# streamlit-editor-js-component

Custom component for editorjs.  
[Editorjs](https://editorjs.io/) is json-based rich-text-editor.  

## Installation
``` bash
pip install streamlit-editorjs-component
```

## Getting started

``` python
import streamlit as st
from streamlit-editorjs-component import streamlit_editorjs

content = streamlit_editorjs(height=500)
st.write(content)
```

``` plain text
Args:  
    data (dict, optional): initial json data formatted as EditorJS. Defaults to None.  
    key (str, optional): Streamlit state key. Defaults to None.  
    height (int, optional): Component block height it the content over the height, it makes scroll. Defaults to 500.
    readonly (bool, optional): Readonly mode [not updated in PYPI.]

Returns:  
    dict: dictionary content from EditorJS.
```

## For developer

### Add new plugins

Add tools to [constant.js](streamlit_editorjs_component/frontend/src/components/constant.js)  

``` bash
yarn install
yarn build
```

``` bash
streamlit run test/st_component_example.py
```
