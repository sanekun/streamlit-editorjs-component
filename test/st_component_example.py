from streamlit_editorjs_component import streamlit_editorjs
import streamlit as st

st.title("EditorJS")
content = streamlit_editorjs(height=500)

if st.button("Get content"):
    st.write(content)
