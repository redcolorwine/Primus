import { connect } from "react-redux"
import ScanPage from "./ScanPage"

let mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ScanPageContainer = connect(mapStateToProps, mapDispatchToProps)(ScanPage);

export default ScanPageContainer;