import React from 'react';
import "./imagePreview.scss"

function ImagePreview(props) {
  const { imageList, handelClickItem, dragStart } = props;

  return (
    <section className="ui-image-preview">
      {
        imageList.map((item, index) => {
          const handleDragStart = () => {
            dragStart(item)
          }
          return (
            <div key={index} className="ui-image-preview_image__wrapper"
              onClick={() => handelClickItem(item)}
              onDragStart={handleDragStart}
            >
              <img
                style={{ width: "100px" }}
                alt="..."
                src={item.image} draggable
              />
            </div>
          )
        })
      }
    </section>
  )
}

export default ImagePreview;
