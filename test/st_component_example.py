from streamlit_editorjs_component import streamlit_editorjs
import streamlit as st

st.set_page_config(layout="wide")
st.title("EditorJS")

st.write("### Editable mode")
col1, col2 = st.columns(2)
with col1:
    content = streamlit_editorjs(height=300)
with col2:
    st.write(content)

st.write("---")
st.write("### Readonly mode")
col1, col2 = st.columns(2)
with col1:
    content = streamlit_editorjs(data=content, height=300, readonly=True)
with col2:
    st.write(content)
