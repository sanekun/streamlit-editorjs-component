from pathlib import Path

import setuptools

this_directory = Path(__file__).parent
long_description = (this_directory / "README.md").read_text()

setuptools.setup(
    name="streamlit-editorjs-component",
    version="0.1.2",
    author="sanekun",
    url="https://github.com/sanekun/streamlit-editorjs-component",
    author_email="sanekun@kaist.ac.kr",
    description="editorjs component for streamlit",
    long_description=long_description,
    long_description_content_type="text/markdown",
    packages=setuptools.find_packages(),
    include_package_data=True,
    package_data={"streamlit_editorjs_component": ["frontend/build/*"]},
    classifiers=[],
    python_requires=">=3.7",
    install_requires=["streamlit>=1.2", "jinja2"],
)
