import { connect } from "react-redux"
import KtPage from "./KtPage"
import { clearFindedProducts, getProductByKtChars } from "../../../redux_store/product_reducer"

let mapStateToProps = (state) => {
    return {
        products: state.products.products,
        brands: state.products.brands,
        ktChars: state.products.ktChars,
        findedProducts: state.products.findedProducts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getProductByKtChars: (chars) => {
            dispatch(getProductByKtChars(chars));
        },
        clearFindedProducts: () => {
            dispatch(clearFindedProducts());
        }
    }
}

const KtPageContainer = connect(mapStateToProps, mapDispatchToProps)(KtPage);

export default KtPageContainer;