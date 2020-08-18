import React from "react";
import classes from './post.module.css';


const Post = () => {
    return <div>
        <div className={classes.item}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/d/da/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg/210px-%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg" alt=""/>
            post #1</div>
        <div>like</div>
    </div>
}


export default Post