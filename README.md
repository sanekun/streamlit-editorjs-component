# streamlit-editor-js-component

Custom component for editorjs.  
[Editorjs](https://editorjs.io/) is json-based rich-text-editor.  

### Usage

``` python
from streamlit-editorjs-component import streamlit_editorjs

content = streamlit_editorjs(height=500)
```

``` plain text
Args:  
    data (dict): initial json data formatted as EditorJS.  
    key (str, optional): Streamlit state key. Defaults to None.  
    height (int, optional): Component block height it the content over the height, it makes scroll. Defaults to 500.

Returns:  
    dict: dictionary content from EditorJS.
```
