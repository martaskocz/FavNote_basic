import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss'
import logoImage from '../../assets/images/logo.svg'
import Button from '../Button/Button';

const Header = ({openModalFunc}) => (
    <header className={styles.wrapper}>
        <img src={logoImage} alt="FavNote"/>
        <HeaderNavigation />
        <Button onClick={openModalFunc} secondary>new item</Button>
    </header>
);

export default Header;