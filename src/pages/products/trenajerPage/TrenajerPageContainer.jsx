import { connect } from "react-redux"
import TrenajerPage from "./TrenajerPage"


let mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const TrenajerPageContainer = connect(mapStateToProps, mapDispatchToProps)(TrenajerPage);

export default TrenajerPageContainer;