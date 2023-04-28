import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import './SEModal.css';

const SEModal = ({ mode, title, content, children, actionButton, show, onClose}) => {
    const [visible, setVisible] = useState(false);
    const [disappear, setDisappear] = useState(false);

    const handleOpen = () => {
        setVisible(show);
    }

    const handleClose = () => {
        setDisappear(true);
        setTimeout(() => {
            setVisible(false);
            onClose();
            setDisappear(false);
        }, 300);
    };

    const handleClickOutside = (e) => {
        if (e.target.classList.contains('popup-modal__background')) {
            handleClose();
        }
    };

    useEffect(() => {
        if (show) {
            handleOpen();
        } else {
            if (visible) handleClose();
        }
    }, [handleClose, handleOpen, show, visible]);

    return (
        <div className={`popup-modal__background ${visible ? 'visible' : ''} ${disappear ? 'disappear' : ''}`} onClick={handleClickOutside}>
            <div className={`popup-modal ${mode} ${visible ? 'visible' : ''} ${disappear ? 'disappear' : ''}`}>
                {mode === 'notification' && (
                    <>
                        <div style={{height: '90%', width: '100%', overflowY: 'auto'}}>
                            <h2 className="popup-modal-title">{title}</h2>
                            <p className="popup-modal-description">{content}</p>
                        </div>
                    </>
                )}
                {mode === 'dialog' && (
                    <>
                        <div style={{height: '90%', width: '100%', overflowY: 'auto'}}>
                            {children}
                        </div>
                    </>
                )}
                <div style={{
                    bottom: 0,
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '98%',
                }}>
                    {actionButton}
                </div>
            </div>
        </div>
    );

}

SEModal.propTypes = {
    mode: PropTypes.oneOf(['notification', 'dialog']).isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    children: PropTypes.node,
    actionButton: PropTypes.node,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

SEModal.defaultProps = {
    title: 'Title',
    content: 'Description',
    children: null,
};

export default SEModal;