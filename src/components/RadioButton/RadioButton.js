import React from 'react';
import PropTypes from 'prop-types';
import styles from "./RadioButton.module.scss";

const RadioButton = ({id, onChange, checked, name}) => {

    return(
        <div className={styles.radio_wrapper}>
            <input
                id={id}
                type="radio"
                onChange={onChange}
                checked={checked}

            />
            <div className={styles.fakeRadio}></div>
            <label htmlFor={id}>{name}</label>
        </div>
    )
};

RadioButton.propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    name: PropTypes.string
};

export default RadioButton;

/* props.children pobiera elementy wewnątrz selektora do komponentu, dlatego można je tu wykorzystać  */