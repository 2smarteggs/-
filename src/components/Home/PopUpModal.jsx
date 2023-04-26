import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './css/PopUpModal.css';

const PopUpModal = ({ mode, title, content, children, show, onClose }) => {
    const [visible, setVisible] = useState(false);
    const [disappear, setDisappear] = useState(false);

    useEffect(() => {
        setVisible(show);
    }, [show]);

    const handleClose = () => {
        setDisappear(true);
        setTimeout(() => {
            setVisible(false);
            onClose();
            setDisappear(false);
        }, 300);
    };

    const handleClickOutside = (e) => {
        if (e.target.classList.contains('popup-modal__overlay')) {
            handleClose();
        }
    };

    return (
        <div className={`popup-modal ${mode} ${visible ? 'visible' : ''} ${disappear ? 'disappear' : ''}`} onClick={handleClickOutside}>
            <div className="popup-modal-content">
                {mode === 'notification' && (
                    <>
                        <div className="popup-modal__header">
                            <h2 className="popup-modal-title">{title}</h2>
                        </div>
                        <p className="popup-modal-description">{content}</p>
                        <div className="popup-modal__footer">
                            <button className="popup-modal-button" onClick={handleClose}>确认</button>
                        </div>
                    </>
                )}
                {mode === 'dialog' && (
                    <>
                        {children}
                    </>
                )}
            </div>
        </div>
    );
};

PopUpModal.propTypes = {
    mode: PropTypes.oneOf(['notification', 'dialog']).isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    children: PropTypes.node,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

PopUpModal.defaultProps = {
    title: '',
    content: '',
    children: null,
};

export default PopUpModal;
