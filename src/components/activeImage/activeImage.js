import React from "react";
import Preview from "../../assets/imagePreview.png";
import "./activeImage.scss";

function ActiveImage(props) {
  const { activeImage } = props;
  const url = activeImage.image ? activeImage.image : Preview;
  return (
    <aside className="ui-aside">
      <h2>Preview</h2>
      <div >
        <img src={url} alt="preview" />
      </div>
    </aside>
  )
}
export default ActiveImage;