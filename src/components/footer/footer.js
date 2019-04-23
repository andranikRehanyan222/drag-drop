import React from "react";
import "./footer.scss";

function Footer(props) {
  const { imageList, handelClickItem } = props;
  return (
    <footer className="ui-footer">
      {
        imageList.map((item, index) => {
          return (
            <div key={index} className="ui-image-preview_image__wrapper"
              onClick={() => handelClickItem(item)}
            >
              <img style={{ width: "100px" }} alt="preview" src={item.image} draggable />
            </div>
          )
        })
      }
    </footer>
  )
}

export default Footer;