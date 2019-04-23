import React from 'react';
import ActiveImage from "./components/activeImage";
import Header from "./components/header";
import ImagePreview from "./components/imagePreview";
import SelectedImages from "./components/selectedImages";
import Footer from "./components/footer";
import './App.scss';

const { useState } = React;

function App() {
  const [activeImage, setActiveImage] = useState({});
  const [imageList, setImageList] = useState([]);
  const [selectedImageList, setSelectedImageList] = useState([]);
  const [buffer, setBuffer] = useState({});

  const getUploadedImage = (images) => {
    setImageList([...imageList, ...images])
  }

  const handelClickItem = (item) => {
    setActiveImage(item);
  };

  const handleDrop = (event) => {
    const bufferLength = Object.keys(buffer).length;
    if (bufferLength && event.target.dataset) {
      setSelectedImageList([...selectedImageList, buffer])
    }
    setBuffer({});
  }

  const dragStart = (item) => {
    setBuffer(item);
  }

  return (
    <div className="ui-root">
      <ActiveImage
        activeImage={activeImage}
      />
      <section className="ui-root_section">
        <Header
          getUploadedImage={getUploadedImage}
        />
        <main className="ui-root_section__main">
          <ImagePreview
            imageList={imageList}
            handelClickItem={handelClickItem}
            dragStart={dragStart}
          />
          <SelectedImages
            selectedImageList={selectedImageList}
            handelClickItem={handelClickItem}
            handleDrop={handleDrop}
          />
        </main>
        <Footer imageList={imageList}
          handelClickItem={handelClickItem}
        />
      </section>
    </div>
  );
}

export default App;
