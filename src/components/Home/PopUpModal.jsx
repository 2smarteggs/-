import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import './css/PopUpModal.css';

const PopUpModal = forwardRef(({ mode, title, content, children, show, onClose }, ref) => {
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
        if (e.target.classList.contains('popup-modal__overlay')) {
            handleClose();
        }
    };

    useImperativeHandle(ref, () => ({
        close() {
            handleClose()
        }
    }));

    useEffect(() => {
        if (show) {
            handleOpen();
        } else {
            if (visible) handleClose();
        }
    }, [handleClose, handleOpen, show, visible]);

    return (
        <div className={`popup-modal ${mode} ${visible ? 'visible' : ''} ${disappear ? 'disappear' : ''}`} onClick={handleClickOutside}>
            <div className="popup-modal-content">
                {mode === 'notification' && (
                    <>
                        <div className="popup-modal__header">
                            <h2 className="popup-modal-title">{title}</h2>
                        </div>
                        <div className="popup-modal__content">
                            <p className="popup-modal-description">{content}</p>
                        </div>
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
});

PopUpModal.propTypes = {
    mode: PropTypes.oneOf(['notification', 'dialog']).isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    children: PropTypes.node,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

PopUpModal.defaultProps = {
    title: 'Title',
    content: 'Description',
    children: null,
};

export default PopUpModal;
