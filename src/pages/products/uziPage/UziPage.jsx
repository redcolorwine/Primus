import React, { useEffect, useState } from 'react'
import cmodule from './uzi.module.css';
import ProductItem from '../../../components/ProductItem/ProductItem';
import Select from 'react-select';
import { AiOutlineFilter } from 'react-icons/ai';


const UziPage = (props) => {

    const [checked, setChecked] = useState(true);
    const [brandSelect, setBrandSelect] = useState('all');
    const [selectedClasses, setClasses] = useState('');
    const [selectedTypes, setTypes] = useState('');
    const [filterUzi, setFilterUzi] = useState(false);


    const handleChangeClasses = (selected) => {
        setClasses(selected);
    };
    const handleChangeTypes = (selected) => {
        setTypes(selected);
    };
    useEffect(() => {
        if (props?.findedProducts[0]?.type != 'uzi') {
            props.clearFindedProducts();
        }
        props.getProductByUziChars({
            brand: 'all',
            classes: '',
            types: '',
        });

    }, [])
    if (!props.products) {
        return (<>
            ...Загрузка
        </>)
    }
    else {
        console.log(props.findedProducts);
        const acceptBut = () => {
            props.getProductByUziChars({
                brand: brandSelect,
                classes: selectedClasses.length ? selectedClasses.map(el => { return el.value }) : '',
                types: selectedTypes.length ? selectedTypes.map(el => { return el.value }) : '',
            });

            console.log(props.findedProducts);
        }
        return (
            <div className={cmodule.uziPage}>
                <div className={cmodule.head}>
                    <h1>УЗИ-аппараты</h1>
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
                            options={props.uziChars.classes}
                            onChange={handleChangeClasses}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Класс"
                        />
                        <Select
                            defaultValue={[]}
                            isMulti
                            name="colors"
                            options={props.uziChars.types}
                            onChange={handleChangeTypes}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Тип"
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
                            options={props.uziChars.classes}
                            onChange={handleChangeClasses}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Класс"
                        />
                        <Select
                            defaultValue={[]}
                            isMulti
                            name="colors"
                            options={props.uziChars.types}
                            onChange={handleChangeTypes}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Тип"
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
                            if (product.type == 'uzi') {
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

export default UziPage