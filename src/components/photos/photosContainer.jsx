import React from "react";
import photos from "./photos";
import {connect} from "react-redux";
import {addPhotoAC, changeURLAC} from "../../Redux/photosReducer";


let mapStateToProps = (state) => {
    return {
        newPhotoURL: state.photosPage.newPhotoURL,
        photosList: state.photosPage.photosList,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        localAddPhoto: () => {
            dispatch(addPhotoAC())
        },
        onChange: (newUrl) => {
            dispatch(changeURLAC(newUrl))
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(photos)