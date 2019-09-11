import React from 'react';
import '../../styles/styles.scss'
import profilePic from '../../images/profilePic.jpg';
import PostsPage from "./postPage/posts-page";

const Profile = () =>{
    return(
        <div className="main-container">
            <div className="profile">
                <div className="profile--info">
                    <div className="personal--info">
                        <div className="profile--photo">
                            <img src={profilePic} alt=""/>  
                        </div>
                        <h3>Sose Cruiz</h3>
                        <p>Creative Director</p>
                    </div>
                     <div className="follow-info">
                        <p>2.359 people following her</p>
                        <button className="main-btn">Add Friends</button>
                    </div>
                </div>
            </div>
            <PostsPage/>
        </div>
    )
}

export default Profile;