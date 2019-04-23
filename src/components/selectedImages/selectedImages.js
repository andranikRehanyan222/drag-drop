import React from "react";
import "./selectedImages.scss";

function SelectedImages(props) {
  const { selectedImageList, handleDrop } = props;
  return (
    <section
      className="ui-selected-images"
      onDrop={handleDrop}
      data-selected="selected"
    >
      {
        selectedImageList.map((item, index) => {
          return (
            <div key={index}>
              <img
                style={{ width: "100px" }} alt="..."
                src={item.image}
              />
            </div>
          )
        })
      }
    </section>
  )
}
export default SelectedImages