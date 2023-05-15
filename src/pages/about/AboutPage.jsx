import React from 'react'
import cmodule from './about.module.css';
import aboutImg from './../../media/about.jpg';
import logo from './../../media/logo_2.png';

const AboutPage = (props) => {
    return (
        <div className={cmodule.aboutPage}>
            <h1>О компании</h1>
            <div className={cmodule.head}>
                <img src={aboutImg} alt="" />
                <h2>Компания <span>PRIMUS</span> занимается продажей медицинского оборудования от
                    официального дистрибьютора. Обратившись к нам, Вы получаете профессиональный и индивидуальный подход к Вашей задаче или потребности.</h2>
            </div>
            <div className={cmodule.aboutWrapper}>
                <div className={cmodule.ourMisson}>
                    <h1>Наша миссия</h1>
                    <p>Одной из наших основных задач является долгосрочное взаимовыгодное партнерство,
                        построенное на честности и открытости.
                        Специалисты нашей компании дают клиентам максимально прозрачную информацию по всем интересующим их вопросам,
                        выступая в роли консультантов, для того, чтобы за руку провести клиента через сумерки неизвестности к ясности понимания - какое оборудование
                        будет идеально отвечать всем требованиям клиента.</p>
                    <h1>Мы гарантируем</h1>
                    <p>Обратившись в компанию PRIMUS, вы получаете профессиональный подход и индивидуальное компетентное решение вашей задачи: будь то покупка, аренда, ремонт или сервисное обслуживание медицинского оборудования.</p>
                    <h1>Мы предлагаем</h1>
                    <p>Мы предлагаем нашим клиентам и их пациентам воспользоваться возможностями современной телемедицины для оперативной связи с ведущими специалистами со всего мира, которые уже много лет являются партнерами компании PRIMUS.</p>
                    <h1>Наш подход</h1>
                    <ul>
                        <li>мы работаем в интересах клиента;</li>
                        <li>работая напрямую с производителями, всегда предлагаем нашим клиентам лучшие цены;</li>
                        <li>мы работаем по всей территории Российской Федерации, включая Крым;</li>
                        <li>на складах в Москве и Санкт-Петербурге у нас всегда в наличии популярные позиции для наших клиентов, которые могут в кратчайшие сроки начать работу и зарабатывать на приобретенном оборудовании;</li>
                        <li>пусконаладочные работы производятся в день доставки оборудования в 90% случаев;</li>
                        <li>предоставляем различные варианты оплаты, а также предоставляем список надежных партнеров по лизингу.</li>
                    </ul>
                    <h1>Партнеры</h1>
                    <p>PRIMUS является официальным партнёром ведущих мировых производителей медицинской техники и осуществляет прямые поставки оборудования Philips, GE, Draeger, Siemens, Canon, Johnson & Johnson, Pentax, eVentMedical, Zoll, Huvitz, Dixion, Haag-Streit, LightMed, Carl Reiner, Keeler и др. Общее количество партнеров мировых производителей медицинских изделий — более 150 заводов.</p>
                </div>
                <div className={cmodule.company}>
                    <div className={cmodule.logoBlock}>
                        <h1>Компания PRIMUS — одна из самых быстрорастущих торговых компаний на рынке медицинского оборудования России.</h1>
                        <img src={logo} alt="" />
                    </div>

                    <div className={cmodule.textBlock}>
                        <p>
                            На Российском рынке в последние три года с учетом изменения конъюктуры рынка основные усилия сотрудников компании тратятся на переформирование линейки товаров и обучение сотрудников.

                            Мы постоянно совершенствуем и развиваем спектр услуг. Наши клиенты всегда могут получить в оперативном порядке консультации по работе на высокотехнологичном медицинском оборудовании, сервисную поддержку, поверку медицинской техники, помощь в обучении и надзор за соблюдением протоколов диагностики и лечения. Компания PRIMUS имеет возможность реализации всестороннего и комплексного подхода к запуску и организации работы медицинского учреждения.</p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutPage