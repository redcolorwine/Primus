import React from 'react'
import cmodule from './products.module.css';
import medicineImg from './../../media/medicine.jpg';
import uzImg from './../../media/products/uzi/Mindray/DC-40 Exp/l2fv1w4gfq47tjw5t81shh4mkzamy9ab.jpg';
import ktImg from './../../media/products/kt/Philips/Ingenuity/5f0459d8efb7798796b72dcfb2bb33ef.jpg';
import mrtImg from './../../media/products/mrt/Siemens/MAGNETOM Aera/4784d6bf47e3e8769922c0314fd8858b.jpg';
import scanImg from './../../media/products/tomograph/newtom/Giano HR Professional/newtom-giano-hr-professional-16x18-foto.jpg';
import trenajImg from './../../media/products/trenajer3.jpg';
import anesthesiaImg from './../../media/products/anesthesia/anesthesia.png';
import ProductItem from '../../components/ProductItem/ProductItem';
import { NavLink } from 'react-router-dom';
import OfferModuleContainer from '../../components/offerModule/OfferModuleContainer';
const Products = (props) => {
    return (
        <div className={cmodule.products}>

            <div className={cmodule.head}>
                <img src={medicineImg} alt="" />
                <h2>Каталог медицинского оборудования</h2>
                <p>Компания PRIMUS предлагает широкий спектр современного оборудования, приборов и аппаратов для оснащения медицинских отделений и кабинетов.

                    В нашем каталоге присутствуют товарные позиции по 22 медицинским направлениям.

                    Проконсультируйтесь с нашим менеджером, чтобы подобрать для себя подходящее оборудование.</p>
            </div>
            <div className={cmodule.productsWrapper}>
                <div className={cmodule.leftBar}>
                    <h4>Виды оборудования</h4>
                    <NavLink to="/products/uzi">УЗИ-аппараты</NavLink>
                    <NavLink to="/products/mrt">МРТ-аппараты</NavLink>
                    <NavLink to="/products/kt">КТ-аппараты</NavLink>
                    <NavLink to="/products/scan">Стомотологические томографы</NavLink>
                    <NavLink to="/products/anesthesia">Наркозно-дыхательные аппараты</NavLink>
                    <NavLink to="/products/trenajers">Дыхательные тренажеры</NavLink>
                </div>
                <div className={cmodule.productItems}>
                    <ProductItem img={uzImg} name="УЗИ-аппараты" type="uzi" />
                    <ProductItem img={ktImg} name="КТ-аппараты" type="kt" />
                    <ProductItem img={mrtImg} name="МРТ-аппараты" type="mrt" />
                    <ProductItem img={scanImg} name="Стомотологические томографы" type="scan" />
                    <ProductItem img={anesthesiaImg} name="Наркозно-дыхательные аппараты" type="anesthesia" />
                    <ProductItem img={trenajImg} name="Дыхательные-тренажеры" type="trenajers" />
                </div>

            </div>
            <OfferModuleContainer />
        </div>
    )
}

export default Products;