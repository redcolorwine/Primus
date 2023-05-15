import { connect } from "react-redux"
import UziPage from "./UziPage"
import { clearFindedProducts, getProductByUziChars } from "../../../redux_store/product_reducer"


let mapStateToProps = (state) => {
    return {
        products: state.products.products,
        brands: state.products.brands,
        uziChars: state.products.uziChars,
        findedProducts: state.products.findedProducts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getProductByUziChars: (chars) => {
            dispatch(getProductByUziChars(chars));
        },
        clearFindedProducts: () => {
            dispatch(clearFindedProducts());
        }
    }
}

const UziPageContainer = connect(mapStateToProps, mapDispatchToProps)(UziPage);

export default UziPageContainer;