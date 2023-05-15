import React, { useEffect, useState } from 'react'
import cmodule from './kt.module.css';
import ProductItem from '../../../components/ProductItem/ProductItem';
import Select from 'react-select';
import { AiOutlineFilter } from 'react-icons/ai';

const KtPage = (props) => {

    const [checked, setChecked] = useState(true);
    const [brandSelect, setBrandSelect] = useState('all');
    const [selectedSlices, setSlices] = useState('');
    const [filterUzi, setFilterUzi] = useState(false);


    const handleChangeSlices = (selected) => {
        setSlices(selected);
    };

    useEffect(() => {
        if (props?.findedProducts[0]?.type != 'kt') {
            props.clearFindedProducts();
        }
        props.getProductByKtChars({
            brand: 'all',
            slices: ''
        });
    }, [])

    if (!props.products) {
        return (<>
            ...Загрузка
        </>)
    }
    else {
        const acceptBut = () => {
            props.getProductByKtChars({
                brand: brandSelect,
                slices: selectedSlices.length ? selectedSlices.map(el => { return el.value }) : '',
            });

        }
        return (
            <div className={cmodule.ktPage}>
                <div className={cmodule.head}>
                    <h1>КТ-аппараты</h1>
                </div>
                <div className={cmodule.productsWrapper}>
                    <div className={cmodule.mobileBtn} onClick={() => setFilterUzi(!filterUzi)}>
                        <span>Фильтр</span> <AiOutlineFilter size={25} />
                    </div>
                    {filterUzi && <div className={cmodule.filterUzi}>
                        <label>
                            <select value={brandSelect} onChange={(event) => { setBrandSelect(event.target.value) }}>
                                {props.brands && props.brands.map(brand => {
                                    return (<>
                                        <option value={brand}>{brand}</option>
                                    </>)

                                })}
                                <option value="all">Все производители</option>
                            </select>
                        </label>
                        <Select
                            defaultValue={[]}
                            isMulti
                            name="colors"
                            options={props.ktChars.slices}
                            onChange={handleChangeSlices}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Срезы"
                        />
                        <div className={cmodule.availableUzi}>
                            <label>
                                В наличии:    </label>
                            <input
                                name="available"
                                type="checkbox"
                                checked={checked}
                                onChange={() => { setChecked(!checked) }} />

                        </div>

                        <button className={cmodule.accept} onClick={() => { acceptBut(); }}>Применить</button>
                    </div>}
                    <div className={cmodule.leftBar}>
                        <label>
                            Производитель:
                            <select value={brandSelect} onChange={(event) => { setBrandSelect(event.target.value) }}>
                                {props.brands && props.brands.map(brand => {
                                    return (<>
                                        <option value={brand}>{brand}</option>
                                    </>)

                                })}
                                <option value="all">Все производители</option>
                            </select>
                        </label>
                        <Select
                            defaultValue={[]}
                            isMulti
                            name="colors"
                            options={props.ktChars.slices}
                            onChange={handleChangeSlices}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Срезы"
                        />
                        <label>
                            В наличии:
                            <input
                                name="available"
                                type="checkbox"
                                checked={checked}
                                onChange={() => { setChecked(!checked) }} />
                        </label>

                        <button className={cmodule.accept} onClick={() => { acceptBut(); }}>Применить</button>
                    </div>
                    <div className={cmodule.productItems}>
                        {props.findedProducts.length ? props.findedProducts.map(product => {
                            if (product.type == 'kt') {
                                return (<ProductItem id={product.id} key={product.id} name={product.name} type={product.type} img={product.img[0]} brand={product.brand} />)
                            }
                        }) :
                            <div className={cmodule.errorMes}>По Вашему запросу ничего не найдено</div>
                        }
                    </div>
                </div>
            </div>
        )
    }


}

export default KtPage