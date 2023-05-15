import React from 'react'
import cmodule from './products.module.css';
import medicineImg from './../../media/medicine.jpg';
import uzImg from './../../media/products/uzi/Mindray/DC-28/0f584eba2de49773ec5e1ef4c458544d.jpg';
import ktImg from './../../media/products/kt1.jpg';
import mrtImg from './../../media/products/mrt1.jpg';
import scanImg from './../../media/products/3dscan.png';
import trenajImg from './../../media/products/trenajer3.jpg';
import ProductItem from '../../components/ProductItem/ProductItem';
import { NavLink } from 'react-router-dom';
const Products = (props) => {
    return (
        <div className={cmodule.products}>

            <div className={cmodule.head}>
                <img src={medicineImg} alt="" />
                <h2>Каталог медицинского оборудования</h2>
                <p>Компания PRIMUS предлагает широкий спектр современного оборудования, приборов и аппаратов для оснащения медицинских отделений и кабинетов.

                    В нашем каталоге более 2500 товарных позиций по 22 медицинским направлениям.

                    Проконсультируйтесь с нашим менеджером, чтобы подобрать для себя подходящее оборудование.</p>
            </div>
            <div className={cmodule.productsWrapper}>
                <div className={cmodule.leftBar}>
                    <h4>Виды оборудования</h4>
                    <NavLink to="/products/uzi">УЗИ-аппараты</NavLink>
                    <NavLink to="/products/mrt">МРТ-аппараты</NavLink>
                    <NavLink to="/products/kt">КТ-аппараты</NavLink>
                    <NavLink to="/products/scan">3д-сканеры</NavLink>
                    <NavLink to="/products/trenajers">Дыхательные тренажеры</NavLink>
                </div>
                <div className={cmodule.productItems}>
                    <ProductItem img={uzImg} name="УЗИ-аппараты" type="uzi" />
                    <ProductItem img={ktImg} name="КТ-аппараты" type="kt" />
                    <ProductItem img={mrtImg} name="МРТ-аппараты" type="mrt" />
                    <ProductItem img={trenajImg} name="Дыхательные-тренажеры" type="trenajers" />
                    <ProductItem img={scanImg} name="3д-сканеры" type="scan" />

                </div>
            </div>

        </div>
    )
}

export default Products;