

/* import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';


const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


 const [mobileMenu, setMobilemenu] = useState(false)
  const toggleMenu = ()=>{
mobileMenu ? setMobilemenu(false) : setMobilemenu(true);
  }
  

  return (
    <nav className={`nav ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu?'':' hide-mobile-menu'}>
  <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
  <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
  <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
  <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
  <li><Link to="testimonals" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
  <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
</ul>
<img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
};

 export default Navbar;*/
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobilemenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobilemenu(!mobileMenu);

  return (
    <nav className={`nav ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      
      <ul className={`nav-links ${mobileMenu ? 'open' : ''}`}>
        <li><Link to="hero" smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500} onClick={toggleMenu}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn" onClick={toggleMenu}>Contact us</Link></li>
      </ul>

      <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
