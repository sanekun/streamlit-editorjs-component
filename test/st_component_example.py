from streamlit_editorjs_component import streamlit_editorjs
import streamlit as st

st.title("EditorJS")
content = streamlit_editorjs(height=500, readonly=False)

if st.button("Get content"):
    st.write(content)
