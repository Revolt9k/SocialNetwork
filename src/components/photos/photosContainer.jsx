import React from "react";
import photos from "./photos";
import {connect} from "react-redux";
import {addPhoto, changeURL} from "../../Redux/photosReducer";


let mapStateToProps = (state) => {
    return {
        newPhotoURL: state.photosPage.newPhotoURL,
        photosList: state.photosPage.photosList,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        localAddPhoto: () => {
            dispatch(addPhoto())
        },
        onChange: (newUrl) => {
            dispatch(changeURL(newUrl))
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(photos)