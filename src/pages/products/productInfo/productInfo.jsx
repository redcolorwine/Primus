import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import cmodule from './productInfo.module.css';
import ContactForm from '../../../components/contactForm/ContactForm';
import DOMPurify from 'dompurify';

const ProductInfo = (props) => {

    const { id } = useParams();
    const [curImg, setCurImg] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        props.getProduct(id - 1);

    }, [id])

    if (!props.products[props.currentProduct]) {
        return (
            <>
                {props.products.length}
                Загрузка..
            </>
        )
    } else {

        return (
            <div className={cmodule.productInfo}>
                <h1>
                    Аппарат {props.products[props.currentProduct].brand} {props.products[props.currentProduct].name}
                </h1>
                <div className={cmodule.productWrapper}>
                    <div className={cmodule.topInfo}>
                        <div className={cmodule.shortDesc}>
                            <h4>Производитель: <span>{props.products[props.currentProduct].brand}</span></h4>
                            {props.products[props.currentProduct].logo && <div className={cmodule.brandLogo}><img src={props.products[props.currentProduct].logo} alt='logo' /></div>}
                            <p className={cmodule.price}>Цена по запросу</p>
                            <p>Характеристики:</p>

                            <p className={cmodule.shortChar}> {props.products[props.currentProduct].short.split(' ').map(word => {

                                if (word.search(';') != -1) {
                                    return (<> {word.replace(';', '')}<br></br> </>)
                                }

                                else
                                    return (<> {word} </>)
                            })}</p>

                            <div className={cmodule.stock}>
                                {props.products[props.currentProduct].inStock ? <p className={cmodule.inStock}>В наличии</p> : <p className={cmodule.notInStock}>Отсутствует в данный момент</p>}
                            </div>
                            <div className={cmodule.contactWithUs}>
                                <button onClick={() => navigate('/contacts')}>Связаться с нами</button>
                            </div>
                        </div>

                        <div className={cmodule.imgWrapper}>
                            <div className={cmodule.mainImg}>
                                <img src={props.products[props.currentProduct].img[curImg]} alt="" />
                            </div>
                            <div className={cmodule.otherImgs}>
                                {props.products[props.currentProduct].img.map((img, index) => {
                                    return (<><img src={img} alt={`img: ${index}`} className={`${index == curImg ? `${cmodule.active}` : ''}`} onClick={() => { setCurImg(index) }} /></>)
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={cmodule.description}>
                        <h2>Подробное описание</h2>

                        <div className={cmodule.fullChar} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.products[props.currentProduct].description) }} ></div>

                        <div className={cmodule.contactWithUs}>
                            <button onClick={() => navigate('/contacts')}>Связаться с нами</button>
                        </div>
                    </div>
                    <div className={cmodule.contacts}>
                        {/* <div className={cmodule.formWrapper}>
                            <h2>Свяжитесь с нами, если у Вас возникли вопросы</h2>
                            <form>
                                <label htmlFor="name">Ваше имя:</label>
                                <input type="text" name="name" />
                                <label htmlFor="name">Ваш номер телефона:</label>
                                <input type="tel" name="phone" />
                                <input type="button" value="Отправить" />
                            </form>
                        </div> */}
                        <ContactForm />
                        <img src={props.products[props.currentProduct].img[curImg]} alt="" />
                    </div>
                </div>


            </div>
        )
    }

}

export default ProductInfo;