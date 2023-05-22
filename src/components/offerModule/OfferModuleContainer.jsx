import { connect } from "react-redux"
import OfferModule from "./OfferModule"


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

const OfferModuleContainer = connect(mapStateToProps, mapDispatchToProps)(OfferModule);

export default OfferModuleContainer;