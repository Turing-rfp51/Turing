/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ImageViewBox from './ImageViewBox.jsx';
// import ModalBody from 'react-bootstrap/ModalBody';

const ImageModal = ({ expanded, toggleModal, photos, selectedIndex }) =>
  (<Modal show={expanded} onHide={toggleModal} size='lg' >
    <Modal.Body>
        <ImageViewBox photos={photos} selectedIndex={selectedIndex}/>
    </Modal.Body>
  </Modal>);

export default ImageModal;
