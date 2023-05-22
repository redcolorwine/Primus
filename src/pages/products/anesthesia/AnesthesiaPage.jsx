import React, { useEffect, useState } from 'react'
import cmodule from './anesthesia.module.css';
import Select from 'react-select';
import { AiOutlineFilter } from 'react-icons/ai';
import ProductItem from '../../../components/ProductItem/ProductItem';
const AnesthesiaPage = (props) => {
    const [checked, setChecked] = useState(true);
    const [brandSelect, setBrandSelect] = useState('all');
    const [selectedSizes, setSizes] = useState('');
    const [filterUzi, setFilterUzi] = useState(false);
    const [selectedClasses, setClasses] = useState('');

    const handleChangeClasses = (selected) => {
        setClasses(selected);
    };

    useEffect(() => {
        if (props?.findedProducts[0]?.type != 'anesthesia') {
            props.clearFindedProducts();
        }
        props.getAnesthesiaByChars({
            brand: 'all',
            classes: '',
        });
    }, [])

    if (!props.products) {
        return (<>
            ...Загрузка
        </>)
    }
    else {
        const acceptBut = () => {
            props.getAnesthesiaByChars({
                brand: brandSelect,
                classes: selectedClasses.length ? selectedClasses.map(el => { return el.value }) : '',
            });

        }
        return (
            <div className={cmodule.anesthesiaPage}>
                <div className={cmodule.head}>
                    <h1>Наркозно-дыхательное оборудование</h1>
                </div>
                <div className={cmodule.productsWrapper}>
                    <div className={cmodule.mobileBtn} onClick={() => setFilterUzi(!filterUzi)}>
                        <span>Фильтр</span> <AiOutlineFilter size={25} />
                    </div>
                    {filterUzi && <div className={cmodule.filterUzi}>
                        <label>
                            <select value={brandSelect} onChange={(event) => { setBrandSelect(event.target.value) }}>
                                {props.anesthesiaChars.brands && props.anesthesiaChars.brands.map(brand => {
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
                            options={props.anesthesiaChars.classes}
                            onChange={handleChangeClasses}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Класс"
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
                                {props.anesthesiaChars.brands && props.anesthesiaChars.brands.map(brand => {
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
                            options={props.anesthesiaChars.classes}
                            onChange={handleChangeClasses}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Класс"
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
                            if (product.type == 'anesthesia') {
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

export default AnesthesiaPage