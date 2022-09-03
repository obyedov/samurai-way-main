import React from "react";
import st from './Post.module.css';

type PostType = {
    message: string
}

const Post:React.FC<PostType> = (props) => {
    return (
        <div className={st.item}>
            <img src="https://assets.survivalinternational.org/pictures/489/4116455578-1f8d781f66-b_screen.jpg"
                 alt="avatar"/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post