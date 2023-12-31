import React, { useContext, useRef, useState } from 'react';
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import './navbar.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import nav_dropdown from '../assets/breadcrum_arrow.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
function Navbar(props) {
    const [menu,setMenu] = useState('shop')
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef(null)
    const dropDown_toggle = (e) =>{
menuRef.current.classList.toggle("nav-menu-visible");
        e.target.classList.toggle('open')
        console.log(e.target)
    }
    return (
        <div className='navbar'>
           <div className="nav-logo">
           <img src={logo} alt="fb" />
            <p>SHOPPER</p>
           </div>
           <div  className="wrapper-dropdown"><img className='nav-dropdown' src={nav_dropdown} alt="" onClick={dropDown_toggle}/></div>
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==='shop'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('men')}}><Link style={{textDecoration:'none'}}  to='/men'>Men</Link> {menu==='men'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('women')}}><Link style={{textDecoration:'none'}}  to='/women'>Woman</Link> {menu==='women'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration:'none'}}  to='/kids'>Kids</Link> {menu==='kids'?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="dgn" /></Link>
                <div className="nav-cart-count">
                {getTotalCartItems()}
            </div>
            </div>
            
        </div>
    );
}

export default Navbar;