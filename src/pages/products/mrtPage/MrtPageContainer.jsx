import { connect } from "react-redux"
import MrtPage from "./MrtPage"
import { clearFindedProducts, getProductByMrtChars } from "../../../redux_store/product_reducer"

let mapStateToProps = (state) => {
    return {
        products: state.products.products,
        brands: state.products.brands,
        mrtChars: state.products.mrtChars,
        findedProducts: state.products.findedProducts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getProductByMrtChars: (chars) => {
            dispatch(getProductByMrtChars(chars));
        },
        clearFindedProducts: () => {
            dispatch(clearFindedProducts());
        }
    }
}

const MrtPageContainer = connect(mapStateToProps, mapDispatchToProps)(MrtPage);

export default MrtPageContainer;