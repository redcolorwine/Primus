import React from 'react'
import cmodule from './contacts.module.css';
import instaLogo from './../../media/icons/inst.png';
import ContactForm from '../../components/contactForm/ContactForm';

const ContactsPage = (props) => {
    return (
        <div className={cmodule.contactsPage}>
            <h1>Контакты</h1>
            <div className={cmodule.contactWrapper}>
                <div className={cmodule.head}>
                    <div className={cmodule.headText}>
                        <h2>Наш центральный офис в России</h2>
                        <p>Компания PRIMUS
                            г. Москва
                           </p>
                    </div>

                </div>
                <div className={cmodule.contacts}>
                    <div className={cmodule.empty}></div>
                    <div className={cmodule.phones}>
                        <h4>Генеральный директор</h4>
                        <p>Мелкумян Карен Маратович</p>
                        <p><span>shef@primus.com.ru</span></p>
                        <h4>Исполнительный директор</h4>
                        <p>Носевич Александр Сергеевич</p>
                        <p><span>+7 (995) 886-98-36</span></p>
                        <p><span>nosevich@primus.com.ru</span></p>
                        <h4>Старший менеджер</h4>
                        <p>Киселёв Роман Евгеньевич</p>
                        <p><span>+7 (916) 969-38-99</span></p>
                        <p><span>kiselev@primus.com.ru</span></p>
                        <h4>Корпоративная почта</h4>
                        <p><span>info@primus.com.ru</span></p>
                        <div className={cmodule.social}>
                            <img src={instaLogo} alt="" />
                        </div>
                    </div>

                </div>
                <ContactForm />
            </div>

        </div>
    )
}

export default ContactsPage