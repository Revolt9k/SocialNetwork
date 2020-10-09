import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import {addPost, removePost} from "../../../Redux/profileReducer";
import MyPosts from "./myPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
            dispatch(addPost(post))
        },
        removeLastPost: () => {
            dispatch(removePost())
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer