import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
import './modal.css'

export default function TopicPage() {
  let articleOptions = {
    name: "",
    subtitle: "",
    url: "https://climate.nasa.gov/evidence/", 
    "https://www.scientificamerican.com/article/antarcticas-ice-shelves-have-lost-millions-of-metric-tons-of-ice/" ]
  }
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => setShowModal(false);

  const showArticle = (e) => {
    setShowModal(true)


  }

  function 
  return (
    <div>
      <h1>{article.name}</h1>
      <h2 onClick={showArticle}>Read about it!</h2>
    </div>
  )
}