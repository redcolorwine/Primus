import React, { useEffect, useState } from 'react'
import cmodule from './offerModule.module.css';
import OfferItem from './offerItem/OfferItem';

const OfferModule = (props) => {
    const [offers, setOffers] = useState('');
    const countOffers = 4;
    useEffect(() => {
        setOffers(props.products.filter(product => {
            if (product.name == 'Medison HS40' || product.name == 'Medison HS50' || product.name == 'Giano HR PROFESSIONAL' || product.name == 'RAYSCAN Symphony Alpha') {
                return product;
            }
        }));
    }, [])

    if (!offers) {
        return <></>
    }
    console.log(offers);
    return (
        <div className={cmodule.offerModule}>
            <h1>Мы рекомендуем:</h1>
            <div className={cmodule.offerWrapper}>
                {offers.map((offer, index) => {
                    if (index < countOffers) {
                        return (<OfferItem id={offer.id} key={offer.id} name={offer.name} type={offer.type} img={offer.img[0]} brand={offer.brand} />)
                    }
                })}
            </div>
        </div>
    )
}

export default OfferModule