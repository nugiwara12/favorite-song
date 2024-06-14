"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeButton, setActiveButton] = useState("description");
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    openDescription(
      "../playlist-video/playlist.mp4",
      true,
      "description",
      "anotherDescription",
      "troubleSpotId",
      "timingId",
      "desktopId"
    );
  }, []);

  const openDescription = (mediaSrc, isVideo, descriptionId, ...otherIds) => {
    const videoPlayer = document.getElementById("videoPlayer");
    const videoSource = document.getElementById("videoSource");
    const imageElement = document.getElementById("imageElement");

    if (isVideo) {
      videoSource.src = mediaSrc;
      videoPlayer.load();
      videoPlayer.classList.remove("hidden");
      imageElement.classList.add("hidden");
    } else {
      setImageSrc(mediaSrc);
      videoPlayer.classList.add("hidden");
      imageElement.classList.remove("hidden");
    }

    document.getElementById(descriptionId).classList.remove("hidden");
    document.getElementById(descriptionId).classList.add("block");
    otherIds.forEach((id) => {
      document.getElementById(id).classList.add("hidden");
      document.getElementById(id).classList.remove("block");
    });
  };

  const handleButtonClick = (mediaSrc, isVideo, descriptionId, ...otherIds) => {
    return () => {
      openDescription(mediaSrc, isVideo, descriptionId, ...otherIds);
      setActiveButton(descriptionId);
    };
  };

  return (
    <div className="container mx-auto text-white px-4 py-16">
      <h1 className="text-header font-bold mb-4 text-center">
        Play your favorite songs.
      </h1>
      <p className="text-lg text-center mb-8">
        You’ll have all the tools you need to make sure you never miss a beat.
        <a
          href="#"
          className="font-bold text-red-600 underline decoration-red-600"
        >
          Try the demo
        </a>
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="flex justify-center items-center w-full mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="space-y-6">
              <a
                href="#"
                className={`flex items-start space-x-4 bg-element rounded-lg p-4 ${
                  activeButton === "description" ? "active-button" : ""
                }`}
                onClick={handleButtonClick(
                  "../playlist-video/playlist.mp4",
                  true,
                  "description",
                  "anotherDescription",
                  "troubleSpotId",
                  "timingId",
                  "desktopId"
                )}
                id="showDescriptionButton"
              >
                <div className="text-red-500 text-2xl flex-shrink-0 w-7">
                  <Image
                    src="/icons/music.svg"
                    width={50}
                    height={50}
                    alt="playlist"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h2 className="text-xl font-bold">500+ popular songs.</h2>
                  <p
                    className="description mx-0 mt-1 sm:mt-2 text-sm"
                    id="description"
                  >
                    Get note-for-note song breakdowns for every style, era, and
                    skill level.
                  </p>
                </div>
              </a>

              <a
                href="#"
                className={`flex items-start space-x-4 rounded-lg p-4 ${
                  activeButton === "anotherDescription" ? "active-button" : ""
                }`}
                onClick={handleButtonClick(
                  "../playlist-video/tempo.mp4",
                  true,
                  "anotherDescription",
                  "description",
                  "troubleSpotId",
                  "timingId",
                  "desktopId"
                )}
                id="showAnotherDescriptionButton"
              >
                <div className="text-red-500 text-2xl flex-shrink-0 w-7">
                  <Image
                    src="/icons/tempo.svg"
                    width={50}
                    height={50}
                    alt="Perfect Tempo"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h2 className="text-xl font-bold">Find the perfect tempo.</h2>
                  <p
                    className="description hidden mx-0 mt-1 sm:mt-2 text-sm"
                    id="anotherDescription"
                  >
                    Slow down any section of a song to make those tricky bars
                    easier.
                  </p>
                </div>
              </a>

              <a
                href="#"
                className={`flex items-start space-x-4 rounded-lg p-4 ${
                  activeButton === "troubleSpotId" ? "active-button" : ""
                }`}
                onClick={handleButtonClick(
                  "../playlist-video/troublespot.mp4",
                  true,
                  "troubleSpotId",
                  "description",
                  "anotherDescription",
                  "timingId",
                  "desktopId"
                )}
                id="showTroubleSpotIdButton"
              >
                <div className="text-red-500 text-2xl flex-shrink-0 w-7">
                  <Image
                    src="/icons/troublespot.svg"
                    width={50}
                    height={50}
                    alt="Trouble Spot"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h2 className="text-xl font-bold">Loop the trouble spots.</h2>
                  <p
                    className="description hidden mx-0 mt-1 sm:mt-2 text-sm"
                    id="troubleSpotId"
                  >
                    Create practice loops to play-through those difficult parts
                    over and over.
                  </p>
                </div>
              </a>

              <a
                href="#"
                className={`flex items-start space-x-4 rounded-lg p-4 ${
                  activeButton === "timingId" ? "active-button" : ""
                }`}
                onClick={handleButtonClick(
                  "../playlist-video/timing.mp4",
                  true,
                  "timingId",
                  "description",
                  "anotherDescription",
                  "troubleSpotId",
                  "desktopId"
                )}
                id="showTimingIdButton"
              >
                <div className="text-red-500 text-2xl flex-shrink-0 w-7">
                  <Image
                    src="/icons/timing.svg"
                    width={50}
                    height={50}
                    alt="Timing"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h2 className="text-xl font-bold">Improve your timing.</h2>
                  <p
                    className="description hidden mx-0 mt-1 sm:mt-2 text-sm"
                    id="timingId"
                  >
                    Use the built-in metronome – your new best friend for
                    difficult rhythms.
                  </p>
                </div>
              </a>

              <a
                href="#"
                className={`flex items-start space-x-4 rounded-lg p-4 ${
                  activeButton === "desktopId" ? "active-button" : ""
                }`}
                onClick={handleButtonClick(
                  "/icons/desktop.svg",
                  false,
                  "desktopId",
                  "description",
                  "anotherDescription",
                  "troubleSpotId",
                  "timingId"
                )}
                id="showDesktopIdButton"
              >
                <div className="text-red-500 text-2xl flex-shrink-0">
                  <Image
                    src="/icons/desktop.svg"
                    width={50}
                    height={50}
                    alt="Desktop Access"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h2 className="text-xl font-bold">
                    Take your songs anywhere.
                  </h2>
                  <p
                    className="description hidden mx-0 mt-1 sm:mt-2 text-sm"
                    id="desktopId"
                  >
                    Accessible on any device, or printable, so you can play any
                    song, any time.
                  </p>
                </div>
              </a>
            </div>
            <div className="color-element w-96 text-white flex justify-end items-end ml-4 mt-6 md:mt-0">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4">
                <div className="relative sm:order-1 rounded-l-xl overflow-hidden py-10 pl-10 max-w-xs sm:max-w-full">
                  <video id="videoPlayer" width="490" autoPlay muted loop>
                    <source
                      id="videoSource"
                      src="./playlist-video/playlist.mp4"
                      type="video/mp4"
                      className="w-full hidden media-toggle rounded-l-xl overflow-hidden"
                    />
                  </video>
                  <Image
                    id="imageElement"
                    src="/playlist-video/image/desktop.png"
                    width={490}
                    height={276}
                    alt="Media Display"
                    className="media-toggle hidden rounded-l-xl overflow-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <a href="#" className="w-96 button button-outline">
          SEE SONGS LIST
        </a>
        <a
          href="#"
          className="w-96 flex items-center ml-4 p-2 button button-solid"
        >
          START FOR FREE
          <i className="bi bi-arrow-right arrow ml-2"></i>
        </a>
      </div>
      <p className="note">Songs included with Pianote+</p>
    </div>
  );
}
