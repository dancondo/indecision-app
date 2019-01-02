import React from 'react';
import Modal from 'react-modal';
import { Animated } from "react-animated-css";

const OptionModal = (props) => (
  <Animated 
    animationIn="fadeIn" 
    animationOut="fadeOut">
    <Modal
      isOpen={ !!props.selectedOption }
      onRequestClose={ props.handleCloseModal }
      contentLabel="Selected Option">
      <h3>You should...</h3>
      { 
        !!props.selectedOption && (
          <p>{ props.selectedOption }</p>
          ) 
        }
      <button onClick={ props.handleCloseModal }>Ok, Cool!</button>
    </Modal>
  </Animated>
)
export default OptionModal;