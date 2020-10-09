import Dialogs from "./dialogs";
import {sendMessage} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HighOrderComponents/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogsData,
        messagies: state.dialogsPage.messagiesData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        SendMessage: (message) => {
            dispatch(sendMessage(message))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
