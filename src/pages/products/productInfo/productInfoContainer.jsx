import { connect } from "react-redux"
import ProductInfo from "./productInfo"
import { getProductById } from "../../../redux_store/product_reducer"

let mapStateToProps = (state) => {
    return {
        products: state.products.products,
        currentProduct: state.products.currentProduct,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getProduct: (id) => { return dispatch(getProductById(id)) }
    }
}


let ProductInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProductInfo);

export default ProductInfoContainer;