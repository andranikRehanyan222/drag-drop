import React from 'react';
import Dropzone from 'react-dropzone';
import Cloud from "../../assets/cloud.png"
import "./header.scss";

function Header(props) {
  const { getUploadedImage } = props;
  const onDrop = (drop) => {
    const images = drop.map((item) => {
      return {
        image: URL.createObjectURL(item),
        name: item.name,
        type: item.type,
      }
    });
    getUploadedImage(images);
  };

  return (
    <header className="ui-header">
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()} className="ui-header_dropzone"
            >
              <input {...getInputProps()} />
              <img src={Cloud} alt="cloud icon" />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
    </header>
  )
}

export default Header;