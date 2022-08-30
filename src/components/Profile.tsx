import React from "react";
import st from './Profile.module.css';

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
            <div>
                my posts
                <div>new post</div>
                <div className={st.posts}>
                    <div className={st.item}>post 1</div>
                    <div className={st.item}>post 2</div>
                </div>

            </div>
        </div>
    )
}

export default Profile