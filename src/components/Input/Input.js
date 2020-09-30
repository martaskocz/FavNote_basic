import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';


const Input = ({tag: Tag, name, label, maxLength, onChange, value}) => (
    <div className={styles.item}>
        <Tag className={styles.input}
            type="text"
            name={name}
            id={name}
            required={name !== "description" && name !== "image"}
            maxLength={maxLength}
            placeholder=" "
            onChange={onChange}
            value={value}
        />
        <label className={styles.label} htmlFor={name}>{label}</label>
        <div className={styles.item__bar}></div>
    </div>
);

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number
};

Input.defaultProps = {
    tag: 'input',
    maxLength: 200
};

export default Input;