import { connect } from "react-redux"
import ScanPage from "./ScanPage"
import { clearFindedProducts, getProductByKtChars, getTomographByChars } from "../../../redux_store/product_reducer"

let mapStateToProps = (state) => {
    return {
        products: state.products.products,
        brands: state.products.brands,
        findedProducts: state.products.findedProducts,
        tomographChars: state.products.tomographChars,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getTomographByChars: (chars) => {
            dispatch(getTomographByChars(chars));
        },
        clearFindedProducts: () => {
            dispatch(clearFindedProducts());
        }
    }
}

const ScanPageContainer = connect(mapStateToProps, mapDispatchToProps)(ScanPage);

export default ScanPageContainer;