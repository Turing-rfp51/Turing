import React from 'react';

const Modal = ({ close }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>Modal Title</h4>
        </div>
        <div className='modal-body'>This is where form data could go</div>
        <div className='modal-footer'>
          <button className='modal-submit' type='submit' onClick={close}>
            Submit Your Q/A Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
