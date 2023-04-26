import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import './SEPopUpModal.css';

const SEPopUpModal = forwardRef(({ mode, title, content, children, actionButton, show, onClose }, ref) => {
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
                    <div style={{height: '90%', overflowY: 'auto'}}>
                        {children}
                    </div>
                    <div style={{
                        bottom: 0,
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '98%',
                    }}>
                        {actionButton}
                    </div>
                </>
            )}
        </div>
    );
});

SEPopUpModal.propTypes = {
    mode: PropTypes.oneOf(['notification', 'dialog']).isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    children: PropTypes.node,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

SEPopUpModal.defaultProps = {
    title: 'Title',
    content: 'Description',
    children: null,
};

export default SEPopUpModal;
