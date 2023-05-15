import { connect } from "react-redux"
import Main from "./main"

let mapStateToProps = (state) => {
    return {
        brandsLogo: state.products.brandsLogo,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;