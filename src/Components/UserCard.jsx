import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const UserCard = function CreateUserCard ({user}) {
    const [onMouseEventProfileClasses, setOnMouseEventProfileClasses] = useState(
        {
            companyNameContainer: "company-name-container",
            catchPhrase: "catch-phrase",
            viewProfileButtonBlock: "view-profile-button-block view-profile-button-block-display-none"
        }
    )

    const mouseIsOutUser = function mouseIsOutUser () {
        setOnMouseEventProfileClasses({
            companyNameContainer: "company-name-container",
            catchPhrase: "catch-phrase",
            viewProfileButtonBlock: "view-profile-button-block view-profile-button-block-display-none"
        })
    }
    const mouseIsOnUser = function MouseIsOnUser () {
        setOnMouseEventProfileClasses({
            companyNameContainer: "company-name-container company-name-container-display-none",
            catchPhrase: "catch-phrase catch-phrase-display-none",
            viewProfileButtonBlock: "view-profile-button-block"
        })
    }

    return (
        <div onMouseOver={mouseIsOnUser} onMouseLeave={mouseIsOutUser} className="user-card-container shadow-sm p-3 mb-5 bg-white rounded col col-xl-4 col-xxl-4">
            <img className="user-photo" src="http://simpleicon.com/wp-content/uploads/user1.png" alt=""/>
            <h3 className="username">{user.username}</h3>
            <h4 className="name">{user.name}</h4>
            <div className="email-info-container">
                <h4 className="email-text">email:</h4>
                <a>{user.email}</a>
            </div>
            <div className={onMouseEventProfileClasses.companyNameContainer}>
                <h4 className="company-key">company:</h4>
                <h4 className="company-name">{user.company.name}</h4>
            </div>
            <h4 className={onMouseEventProfileClasses.catchPhrase}>{user.company.catchPhrase}</h4>
            <Link to={"/user/"+user.id}>
                <div className={onMouseEventProfileClasses.viewProfileButtonBlock}>
                    <div className="dividing-container"></div>
                    <button className="view-profile-button">View Profile</button>
                </div>
            </Link>
        </div>
    )
}

export default UserCard