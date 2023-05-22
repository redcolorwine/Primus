import { connect } from "react-redux"
import { clearFindedProducts, getProductByKtChars, getTomographByChars } from "../../../redux_store/product_reducer"
import TrenajerPage from "./TrenajerPage"

let mapStateToProps = (state) => {
    return {
        products: state.products.products,
        brands: state.products.brands,
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

const TrenajerPageContainer = connect(mapStateToProps, mapDispatchToProps)(TrenajerPage);

export default TrenajerPageContainer;