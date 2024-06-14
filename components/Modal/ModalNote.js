import React, { useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import abcjs from "abcjs";

const ModalNote = ({ isVisible, onClose }) => {
  const modalContentRef = useRef(null);

  if (!isVisible) return null;

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    const musicNotation = `
      X:1
      T:Transcribed Music
      M:4/4
      L:1/4
      K:C
      |: CDEFGABc :|
    `;

    // Render the musical notes using ABCJS
    abcjs.renderAbc("music-notation", musicNotation);

    // Event listener to close the modal when clicking outside of it
    const handleClickOutside = (event) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 text-black flex justify-center items-center">
      <div
        ref={modalContentRef}
        className="h-3/4 w-3/4 bg-white backdrop-blur-sm relative"
      >
        {/* Video Player */}
        <div className="absolute left-0 w-1/3 h-full bg-white flex justify-center items-center">
          <iframe
            width="500"
            height="505"
            src="https://www.youtube.com/embed/hLQl3WQQoQ0?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Music Notes */}
        <div className="absolute right-0 w-1/2 h-full p-4">
          <div
            className="h-full flex flex-col justify-center items-center"
            id="music-notation"
          ></div>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          onClick={handleClose}
        >
          <IoCloseSharp className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default ModalNote;
