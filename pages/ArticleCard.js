import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
export default function ArticleCard({media}) {
  

  const [showModal, setShowModal] = useState(false)
  

  function handleCloseModal() {
    setShowModal(false);
  } 
 
  function showMedia() {
    setShowModal(true)
  }

  return (
    <>
      <div id={media.name} className="row modalClick" onClick={showMedia}>
        <img className="mediaImage" src={media.image}></img>
        <h1 className="mediaOutlet">{media.outlet}</h1>
        <h1 className="mediaName">{media.name}</h1>
        <h2 className="mediaSubtitle">{media.subtitle}</h2>
      </div>
      <div className="modalWindow">
        <Modal size="lg" show={showModal} className='modalContent'>
            <Modal.Body id="mediaModal">
                <div class="closeButton">
                    <button class="closeModal" onClick={handleCloseModal} >&times;</button>
                </div>
                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe class="embed-responsive-item" src={media.url} allowfullscreen></iframe>
                </div>
            </Modal.Body>
        </Modal>
      </div>
    </>
  ) 
}