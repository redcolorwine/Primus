import { connect } from "react-redux"
import { clearFindedProducts, getAnesthesiaByChars, getProductByKtChars, getTomographByChars } from "../../../redux_store/product_reducer"
import AnesthesiaPage from "./AnesthesiaPage"

let mapStateToProps = (state) => {
    return {
        products: state.products.products,
        brands: state.products.brands,
        findedProducts: state.products.findedProducts,
        anesthesiaChars: state.products.anesthesiaChars,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getAnesthesiaByChars: (chars) => {
            dispatch(getAnesthesiaByChars(chars));
        },
        clearFindedProducts: () => {
            dispatch(clearFindedProducts());
        }
    }
}

const AnesthesiaPageContainer = connect(mapStateToProps, mapDispatchToProps)(AnesthesiaPage);

export default AnesthesiaPageContainer;