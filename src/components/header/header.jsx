import React, { useState } from 'react'
import cmodule from './header.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from './../../media/logo.png';
import locationImg from './../../media/icons/loc.png';
import phoneImg from './../../media/icons/whatsapp.png';
import { AiOutlineMenu, AiOutlineClose, AiOutlineShop, AiOutlineHome, AiOutlineTeam, AiOutlineCustomerService } from 'react-icons/ai';
import lic from './../../media/lic.jpg';

const Header = (props) => {

    const navigate = useNavigate();

    const [menu, showMenu] = useState(false);

    const [newMenu, setNewMenu] = useState(false);

    return (
        <div className={cmodule.header}>
            <div className={cmodule.preHeader}>

                <div className={cmodule.about}>
                    <h4>Медицинское оборудование. <br></br>Продажа, аренда, сервис.</h4>
                </div>
                <button className={cmodule.license} onClick={() => { setNewMenu(!newMenu) }}>
                    Официальная лицензия
                </button>
                <div className={cmodule.location}>
                    <img src={locationImg} alt="" />
                    <p>г. Москва</p>
                </div>
                <div className={cmodule.mail}>
                    <Link to={`mailto:info@primus.com.ru`}>info@primus.com.ru</Link>
                </div>
                <div className={cmodule.phoneCall}>

                    <div className={cmodule.phones}>
                        <img src={phoneImg} />
                        <p>+7 (993) 591-38-99</p>

                    </div>
                    <p><span>ежедневно с 9:00 до 20:00</span></p>
                </div>
            </div>


            <div className={cmodule.headerMenu}>
                <div className={cmodule.logoBlock}>
                    <img src={logo} alt="" onClick={() => { navigate('/') }} />
                </div>
                <nav className={menu ? [cmodule.navMenu, cmodule.active].join(' ') : [cmodule.navMenu]}>
                    <li>
                        <NavLink to="/" onClick={() => showMenu(false)}><div className={cmodule.alink}><span>Главная</span>{menu && <AiOutlineHome size={25} />} </div></NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" onClick={() => showMenu(false)}><div className={cmodule.alink}><span>Каталог</span> {menu && <AiOutlineShop size={25} />}</div></NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={() => showMenu(false)}><div className={cmodule.alink}><span>О нас</span> {menu && <AiOutlineTeam size={25} />}</div></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" onClick={() => showMenu(false)}><div className={cmodule.alink}><span>Контакты</span> {menu && <AiOutlineCustomerService size={25} />}</div></NavLink>
                    </li>

                </nav>
                <div className={cmodule.mobilebtn} onClick={() => showMenu(!menu)}>
                    {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}


                </div>

            </div>

      

            {/* {newMenu && <div className={cmodule.newMenu}><button onClick={() => setNewMenu(!newMenu)}>X</button><img src={lic} alt="" srcset="" /></div>} */}
        </div>
    )
}

export default Header