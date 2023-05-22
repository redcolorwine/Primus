import React, { useEffect, useState } from 'react'
import cmodule from './scan.module.css';
import Select from 'react-select';
import { AiOutlineFilter } from 'react-icons/ai';
import ProductItem from '../../../components/ProductItem/ProductItem';
const ScanPage = (props) => {
    const [checked, setChecked] = useState(true);
    const [brandSelect, setBrandSelect] = useState('all');
    const [selectedSizes, setSizes] = useState('');
    const [filterUzi, setFilterUzi] = useState(false);


    const handleChangeSlices = (selected) => {
        setSizes(selected);
    };

    useEffect(() => {
        if (props?.findedProducts[0]?.type != 'tomograph') {
            props.clearFindedProducts();
        }
        props.getTomographByChars({
            brand: 'all',
            imageSizes: ''
        });
    }, [])

    if (!props.products) {
        return (<>
            ...Загрузка
        </>)
    }
    else {
        const acceptBut = () => {
            props.getTomographByChars({
                brand: brandSelect,
                imageSizes: selectedSizes.length ? selectedSizes.map(el => { return el.value }) : '',
            });

        }
        return (
            <div className={cmodule.scanPage}>
                <div className={cmodule.head}>
                    <h1>Стомотологические томографы</h1>
                </div>
                <div className={cmodule.productsWrapper}>
                    <div className={cmodule.mobileBtn} onClick={() => setFilterUzi(!filterUzi)}>
                        <span>Фильтр</span> <AiOutlineFilter size={25} />
                    </div>
                    {filterUzi && <div className={cmodule.filterUzi}>
                        <label>
                            <select value={brandSelect} onChange={(event) => { setBrandSelect(event.target.value) }}>
                                {props.tomographChars.brands && props.tomographChars.brands.map(brand => {
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
                            options={props.tomographChars.imageSizes}
                            onChange={handleChangeSlices}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Размер снимка"
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
                                {props.tomographChars.brands && props.tomographChars.brands.map(brand => {
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
                            options={props.tomographChars.imageSizes}
                            onChange={handleChangeSlices}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            placeholder="Размер снимка"
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
                            if (product.type == 'tomograph') {
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

export default ScanPage