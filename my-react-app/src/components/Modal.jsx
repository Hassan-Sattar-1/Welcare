import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Modal.css';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.28, type: 'spring', stiffness: 260, damping: 22 } },
  exit: { opacity: 0, scale: 0.92, transition: { duration: 0.2 } }
};

const Modal = ({ isOpen, onClose, product }) => {
  return (
    <AnimatePresence>
      {isOpen && product && (
        <motion.div
          className="modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>&times;</button>
            <div className="modal-image-section">
              <img src={product.img} alt={product.name} className="modal-product-image" />
            </div>
            <div className="modal-details-section">
              <h2 className="modal-product-name">{product.name}</h2>
              <p className="modal-product-description">{product.description}</p>
              {product.features && (
                <div className="modal-product-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {product.crops && (
                <div className="modal-product-crops">
                  <h4>Recommended Crops:</h4>
                  <p>{product.crops}</p>
                </div>
              )}
              {product.usage && (
                <div className="modal-product-usage">
                  <h4>Usage Instructions:</h4>
                  <p>{product.usage}</p>
                </div>
              )}
              {product.packaging && (
                <div className="modal-product-packaging">
                  <h4>Packaging:</h4>
                  <p>{product.packaging}</p>
                </div>
              )}
              {product.safety && (
                <div className="modal-product-safety">
                  <h4>Safety & Handling:</h4>
                  <p>{product.safety}</p>
                </div>
              )}
              {product.tagline && (
                <div className="modal-product-tagline">
                  <em>{product.tagline}</em>
                </div>
              )}
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <button className="modal-cta-btn">Enquire Now</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal; 