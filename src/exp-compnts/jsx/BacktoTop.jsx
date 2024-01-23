import React from "react";
import "../css/BacktoTop.css";
const BacktoTop = () => {
  // When a user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFx();
  };

  function scrollFx() {
    // Get the button
    const backToTopBtn = document.getElementById("top");
    // console.log(window.location)
    if (
      (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) &&
      window.location.hash === "#/stocked/chemicals"
    ) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }

  // When a user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For safari
    document.documentElement.scrollTop = 0; // For chrome, firefox, IE and Opera
  }

  return (
    <button className="top" id="top" onClick={topFunction}>
      {/* <BsArrowUpCircleFill /> */}
      TOP
    </button>
  );
};

export default BacktoTop;
