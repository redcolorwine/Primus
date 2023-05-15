import React, { useRef, useState } from 'react'
import cmodule from './contactform.module.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const [uname, setUname] = useState('');
    const [uemail, setUemail] = useState('');
    const [num, setNum] = useState('');
    const [mes, setMes] = useState('');
    const [checked, setChecked] = useState(true);
    const [errMes, setErrMes] = useState(false);

    const [acceptMenu, showAcceptMenu] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if (checked && uname.length > 3 && uemail.length > 5 && num.length > 7) {
            if (String(uemail)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )) {
                emailjs.sendForm('service_st0t5zw', 'template_0hrd4ud', e.target, 'ERJRWnPohaLlxpXaL');
                showAcceptMenu(true);
                setErrMes(false);
                setUname('');
                setUemail('');
                setNum('');
                setMes('');
            }

        } else {
            setErrMes(true);
        }

    }

    return (
        <div className={cmodule.contactForm}>
            <h2>Eсли у Вас возникли вопросы</h2>

            <form onSubmit={sendEmail}>
                <label htmlFor="name">Ваше имя:</label>
                <input type="text" name="user_name" id="userName" value={uname} onChange={(e) => setUname(e.target.value)} />
                <label htmlFor="emailFrom">Ваш электронный адрес:</label>
                <input type="text" name="email_from" id="emailFrom" value={uemail} onChange={(e) => setUemail(e.target.value)} />
                <label htmlFor="phone">Ваш номер телефона:</label>
                <input type="tel" name="phone_From" id="phoneFrom" value={num} onChange={(e) => setNum(e.target.value)} />
                <textarea name="message" id="message" cols="30" rows="10" value={mes} onChange={(e) => setMes(e.target.value)}></textarea>
                <input type="checkbox" name="ck" id="" defaultChecked={checked} onChange={() => setChecked(!checked)} />
                <label htmlFor="ck">Согласен с обработкой персональных данных</label>
                <input type="submit" value="Отправить" />
                {errMes && <div className={cmodule.errorMessage}><p>Вы не согласились с политикой обработки персональных данных, остались пустые поля или ошибка в заполнении формы.</p></div>}
                {acceptMenu && <div className={cmodule.acceptMenu}><p>Сообщение отправлено!</p></div>}
            </form>
        </div>
    )
}

export default ContactForm;