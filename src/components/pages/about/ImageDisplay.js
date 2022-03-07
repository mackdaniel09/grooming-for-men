import React, { useEffect } from "react";
import { living } from "../data/story";
import { useParams } from "react-router-dom";

const ImageDisplay = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log("image display rendered");
  }, []);
  return (
    // <div
    //   class="modal fade"
    //   id="imageModal"
    //   data-bs-backdrop="static"
    //   data-bs-keyboard="false"
    //   tabindex="-1"
    //   aria-labelledby="staticBackdropLabel"
    //   aria-hidden="true"
    // >
    //   <div class="modal-dialog">
    //     <div class="modal-content">
    //       <div class="modal-header">
    //         <button
    //           type="button"
    //           class="btn-close"
    //           data-bs-dismiss="modal"
    //           aria-label="Close"
    //         ></button>
    //       </div>
    //       <div class="modal-body">
    //         <img src={living[id - 1].img} alt="image" />
    //       </div>
    //       <div class="modal-footer">
    //         <button
    //           type="button"
    //           class="btn btn-secondary"
    //           data-bs-dismiss="modal"
    //         >
    //           Close
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    // </div>
    <div className="listOfProducts">
      <div className="productDisplay">
        <img src={living[id - 1].img} />
      </div>
    </div>
  );
};

export default ImageDisplay;
