import streamlit as st
import streamlit.components.v1 as components

_my_component = components.declare_component(
    "streamlit-editorjs-v2",
    url="http://localhost:3001",
)

initial_data = {
        "time": "1552744582955",
        "blocks": [
            {
                "type": "header",
                "data": {
                    "text": "test.js",
                    "level": 2
                }
            },
            {
                "type": "link",
                "data": {
                    "text": "test",
                    "url": "https://test.com"
                }
            },
            {
                "type": "table",
                "data": {
                    "content": [
                        ["a", "b", "c"],
                        ["1", "2", "3"]
                    ]
                }
            }
        ]
}

st.title("EditorJS")
with st.container(border=True, height=500):
    content = _my_component(data=initial_data, key='test')

# st.write(content)
if st.button("  Get data  "):
    st.write(content)
    # st.rerun()