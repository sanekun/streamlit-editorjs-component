import os
import streamlit as st
import streamlit.components.v1 as components

_RELEASE = True # toggle to develop mode or release mode

if _RELEASE:
    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, "frontend/build")
    print (build_dir)

    st_editorjs = components.declare_component(
        "streamlit-editorjs",
        path=build_dir
    )
else:
    st_editorjs = components.declare_component(
        "streamlit-editorjs",
        url="http://localhost:3001"
    )

# initial_data = {
#         "time": "1552744582955",
#         "blocks": [
#             {
#                 "type": "header",
#                 "data": {
#                     "text": "test.js",
#                     "level": 2
#                 }
#             },
#             {
#                 "type": "table",
#                 "data": {
#                     "content": [
#                         ["a", "b", "c"],
#                         ["1", "2", "3"]
#                     ]
#                 }
#             }
#         ]
# }

st.title("EditorJS")
content = st_editorjs(key='test', height=500)
#with st.container(border=True, height=500):

# st.write(content)
if st.button("  Get data  "):
    st.write(content)
    # st.rerun()