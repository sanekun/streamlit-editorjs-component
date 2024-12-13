import os
import streamlit.components.v1 as components
from pathlib import Path

_RELEASE = True  # toggle to develop mode or release mode

if _RELEASE:
    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, "frontend/build")

    _custom_component = components.declare_component(
        name="streamlit_editorjs",
        path=build_dir
    )  
else:
    _custom_component = components.declare_component(
        "streamlit-editorjs",
        url="http://localhost:3000"
    )

def streamlit_editorjs(data=None, key=None, height=500):
    """_summary_

    Args:
        data (dict): initial json data formatted as EditorJS.
        key (str, optional): Streamlit state key. Defaults to None.
        height (int, optional): Component block height it the content over the height, it makes scroll. Defaults to 500.

    Returns:
        dict: dictionary content from EditorJS.
    """
    
    st_editorjs = _custom_component(data=data, key=key, height=height)
    
    return st_editorjs

if not _RELEASE: # for development
    import streamlit as st

    st.title("Streamlit EditorJS Component")
    
    initial_data = {}
    
    content = streamlit_editorjs(data= initial_data, key='editorjs', height=1000)

    if st.button("Get data"):
        st.write(content)
