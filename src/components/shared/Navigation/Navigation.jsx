import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    const brandStyle ={
        fontWeight: 'bold',
        fontSize: '25px',
        color: '#fff',
        display: 'flex',
        textDecoration: 'none',
        alignItem: 'center'
    }

    const logoText ={
        marginLeft: '12px'
    }

    return(
       <nav className={`${styles.navbar} container`}>
           <Link to="/" style={brandStyle}>
           <img src="/Images/logo.png" alt="logo" />
           <span style={logoText}>Codershouse</span>
           </Link>
       </nav>
    );
}

export default Navigation;