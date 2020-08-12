import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';


export default function TopicPage() {
  let media = [ 
    {
      image: "https://climate.nasa.gov/system/content_pages/main_images/203_co2-graph-061219.jpg",
      name: "Nasa Climate Change",
      subtitle: "",
      url: "https://climate.nasa.gov/evidence/"
    },
    {
      image: "",
      name: "",
      subtitle: "",
      url: ""
    },
    {
      image: "",
      name: "",
      subtitle: "",
      url: ""
    },
    {
      image: "",
      name: "",
      subtitle: "",
      url: ""
    },
    {
      image: "",
      name: "",
      subtitle: "",
      url: ""
    },
    
  ]
  const [showModal, setShowModal] = useState(false)

  function handleCloseModal() {
    setShowModal(false);
  } 
  
  function showMedia() {
    setShowModal(true)
    // let modalButtons = getElementsByClassName("modalButton")
    // for (let i=0; i<modalButtons.length; i++) {
    //   modalButtons[i].addEventListener("click", function(e) {
      // iframeURL = (e.target.id).url
      // iframeElement.src = iframeURL
    // })
    }
    
  
    
  return (
  <div>
    <div id={media[0]} className="modalButton" onClick={showMedia}>
      <img src={media[0].image}></img>
      <h1 className="mediaName">{media[0].name}</h1>
      <h2 className="mediaSubtitle">{media[0].subtitle}</h2>
    </div>
    <div id={media[1]} className="modalButton" onClick={showMedia}>
      <img src={media[1].image}></img>
      <h1 className="mediaName">{media[1].name}</h1>
      <h2 className="mediaSubtitle">{media[1].subtitle}</h2>
    </div>
    <div id={media[2]} className="modalButton" onClick={showMedia}>
      <img src={media[2].image}></img>
      <h1 className="mediaName">{media[2].name}</h1>
      <h2 className="mediaSubtitle">{media[2].subtitle}</h2>
    </div>
    <div id={media[3]} className="modalButton" onClick={showMedia}>
      <img src={media[3].image}></img>
      <h1 className="mediaName">{media[3].name}</h1>
      <h2 className="mediaSubtitle">{media[3].subtitle}</h2>
    </div>
    <div id={media[4]} className="modalButton" onClick={showMedia}>
      <img src={media[4].image}></img>
      <h1 className="mediaName">{media[4].name}</h1>
      <h2 className="mediaSubtitle">{media[4].subtitle}</h2>
    </div>
    <div className="modalWindow">
      <Modal show={showModal} className='modalContent'>
          <Modal.Body id="mediaModal">
              <div class="closeButton">
                  <button class="closeModal" onClick={handleCloseModal} >&times;</button>
              </div>
              <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe class="embed-responsive-item" src="https://www.pnas.org/content/107/39/E151" allowfullscreen></iframe>
              </div>
          </Modal.Body>
      </Modal>
    </div>
  </div>
  )
}