import React from "react";
import st from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={st.content}>
            <div>
                <img src="https://wc.wallpaperuse.com/wallp/97-975933_s.jpg" alt="img content"/>
            </div>
            <div>
                <img
                    src="https://www.cure-naturali.it/.imaging/default/dam/cure-naturali/enciclopedia-naturale/animali/gatto-persiano.jpg/jcr:content.jpg"
                    alt="avatar"/>
                + desriptions
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile