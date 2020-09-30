import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Button.module.scss";

const Button = ({children, href, secondary, ...props}) => {

    const buttonClass = secondary ? styles.secondary : styles.button;
    return(
        <>
            {
                href ? (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonClass}>
                        {children}
                    </a>
                ) : (
                    <button
                        className={buttonClass}
                        type="submit"
                        {...props}
                    >
                        {children}
                    </button>
                )
            }
        </>
    )
};

Button.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  secondary: PropTypes.bool
};

export default Button;

/* props.children pobiera elementy wewnątrz selektora do komponentu, dlatego można je tu wykorzystać  */