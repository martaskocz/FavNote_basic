import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';
import close from '../../assets/images/close.png'

const Modal = ({modalCloseFunc}) => (
    <div className={styles.wrapper}>
        <button className={styles.button} onClick={modalCloseFunc}>
            <img alt="close" src={close} />
        </button>
        <Form />
    </div>
);

export default Modal;