import React, { useEffect, useState } from 'react'
import cmodule from './mrt.module.css';
import ProductItem from '../../../components/ProductItem/ProductItem';
import Select from 'react-select';
import { AiOutlineFilter } from 'react-icons/ai';

const MrtPage = (props) => {

    const [checked, setChecked] = useState(true);
    const [brandSelect, setBrandSelect] = useState('all');
    const [selectedPat, setPat] = useState(false);
    const [selectedIntesity, setIntensity] = useState('');
    const [filterUzi, setFilterUzi] = useState(false);

    const handleChangePat = (selected) => {
        if (selected.length) {
            setPat(true);
        } else {
            setPat(false);
        }
    };
    const handleChangeIntensity = (selected) => {
        setIntensity(selected);
        console.log(selected);
    };

    useEffect(() => {
        if (props?.findedProducts[0]?.type != 'mrt') {
            props.clearFindedProducts();
        }
        props.getProductByMrtChars({
            brand: 'all',
            pat: false,
            intensity: '',
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
            props.getProductByMrtChars({
                brand: brandSelect,
                pat: selectedPat,
                intensity: selectedIntesity.length ? selectedIntesity.map(el => { return el.value }) : '',
            });

        }
        return (
            <div className={cmodule.mrtPage}>
                <div className={cmodule.head}>
                    <h1>МРТ-аппараты</h1>
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
                            options={props.mrtChars.pat}
                            onChange={handleChangePat}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="ПЭТ"
                        />
                        <Select
                            defaultValue={[]}
                            isMulti
                            name="colors"
                            options={props.mrtChars.intensity}
                            onChange={handleChangeIntensity}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Напряженность поля"
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
                            options={props.mrtChars.pat}
                            onChange={handleChangePat}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="ПЭТ"
                        />
                        <Select
                            defaultValue={[]}
                            isMulti
                            name="colors"
                            options={props.mrtChars.intensity}
                            onChange={handleChangeIntensity}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Напряженность поля"
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
                            if (product.type == 'mrt') {
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

export default MrtPage