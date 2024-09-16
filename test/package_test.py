import streamlit as st
from streamlit_editorjs_component import streamlit_editorjs

st.title("EditorJS")
content = streamlit_editorjs(height=300)

st.write(content)
