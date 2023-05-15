import { NavLink } from 'react-router-dom';
import cmodule from './footer.module.css';

const Footer = (props) => {
    return (
        <>
            <div className={cmodule.footer}>

                <div className={cmodule.aboutBlock}>
                    <h4>PRIMUS</h4>
                    <nav>
                        <li><NavLink to='about'>О компании</NavLink></li>
                        <li><NavLink to='policy'>Политика конфиденциальности</NavLink></li>
                        <li><NavLink to='contacts'>Контакты</NavLink></li>
                    </nav>
                </div>

                <div className={cmodule.appBlock}>
                    <h4>Каталог</h4>
                    <li><NavLink to='/products/uzi'>УЗИ аппараты</NavLink></li>
                    <li><NavLink to='/products/kt'>КТ аппараты</NavLink></li>
                    <li><NavLink to='/products/mrt'>МРТ аппараты</NavLink></li>
                    <li><NavLink to='/products/scan'>3д-сканеры</NavLink></li>
                    <li><NavLink to='/products/tranajers'>Дыхательные тренажеры</NavLink></li>
                </div>

                <div className={cmodule.platformBlock}>
                    <h4>Услуги</h4>
                    <li><a href="#">Аренда оборудования</a></li>
                    <li><a href="#">Обслуживание</a></li>
                    <li><a href="#">Лизинг</a></li>
                    <li><NavLink to='contacts'>Консультация</NavLink></li>
                </div>

                <div className={cmodule.platformBlock}>
                    <h4>Контакты</h4>
                    <div className={cmodule.phones}>
                        <p>+7 (995) 886-98-36</p>
                        <p><span>ежедневно с 9:00 до 20:00</span></p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer;