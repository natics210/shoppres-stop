import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='shop' className='option'>SHOP</Link>
            <Link to='contact' className='option'>CONTACT</Link>
        </div>
        {
            currentUser ? 
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
             <Link className='option' to='signIn'>SIGN IN</Link>
        }
    </div>
)

export default Header;