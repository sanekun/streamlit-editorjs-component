import streamlit as st
import streamlit.components.v1 as components

_my_component = components.declare_component(
    "streamlit-editorjs-v2",
    url="http://localhost:3001",
)

with st.container(border=True):
    _my_component()