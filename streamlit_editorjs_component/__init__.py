import os
import streamlit.components.v1 as components

_RELEASE = True  # toggle to develop mode or release mode

if _RELEASE:
    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, "frontend/build")

    _custom_component = components.declare_component(name="streamlit_editorjs", path=build_dir)
else:
    _custom_component = components.declare_component("streamlit-editorjs", url="http://localhost:3000")


def streamlit_editorjs(data=None, key=None, height=500, readonly=False) -> dict:
    """_summary_

    Args:
        data (dict): initial json data formatted as EditorJS.
        key (str, optional): Streamlit state key. Defaults to None.
        height (int, optional): Component block height it the content over the height, it makes scroll. Defaults to 500.
        readonly (bool, optional): Enable read-only mode. Defaults to False.

    Returns:
        dict: dictionary content from EditorJS.
    """

    st_editorjs = _custom_component(data=data, key=key, height=height, readonly=readonly)

    if readonly:
        return data or {}

    return st_editorjs or data or {}


if not _RELEASE:  # for development
    import streamlit as st

    st.title("Streamlit EditorJS Component")

    initial_data = {}

    content = streamlit_editorjs(data=initial_data, key="editorjs", height=1000, readonly=False)

    if st.button("Get data"):
        st.write(content)
