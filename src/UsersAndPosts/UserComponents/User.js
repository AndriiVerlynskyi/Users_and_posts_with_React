import React from 'react';


// export default function CreateNewUser ({user}) {
//     return (
//         <div onMouseEnter={this.mouseIsOnUserCard} className="user-card-container shadow-sm p-3 mb-5 bg-white rounded col col-xl-4 col-xxl-4">
//             <img className="user-photo" src="http://simpleicon.com/wp-content/uploads/user1.png"/>
//             <h3 className="username">{user.username}</h3>
//             <h4 className="name">{user.name}</h4>
//             <div className="email-info-container">
//                 <h4 className="email-text">email:</h4>
//                 <a>{user.email}</a>
//             </div>
//             <div className="company-name-container">
//                 <h4 className="company-key">company:</h4>
//                 <h4 className="company-name">{user.company.name}</h4>
//             </div>
//         </div>
//     )
// }

class UserCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            user: props.user,
            viewProfileStyles: {
                companyContainerClasses: "company-name-container",
                companyCatchPhrase: "catch-phrase",
                viewProfileBtnBlockClasses: "view-profile-button-block view-profile-button-block-display-none" 
            }
        }
        this.mouseIsOnUserCard = this.mouseIsOnUserCard.bind(this)
        this.mouseIsOutOfUserCard = this.mouseIsOutOfUserCard.bind(this)
    }

    mouseIsOnUserCard () {
        this.setState({
            viewProfileStyles:{
                companyContainerClasses: "company-name-container company-name-container-display-none",
                companyCatchPhrase: "catch-phrase catch-phrase-display-none",
                viewProfileBtnBlockClasses: "view-profile-button-block"
            }
        })
    }

    mouseIsOutOfUserCard () {
        this.setState({
            viewProfileStyles:{
                companyContainerClasses: "company-name-container",
                companyCatchPhrase: "catch-phrase",
                viewProfileBtnBlockClasses: "view-profile-button-block view-profile-button-block-display-none"
            }
        })
    }

    render () {
        return (
        <div onMouseEnter={this.mouseIsOnUserCard} onMouseLeave={this.mouseIsOutOfUserCard} className="user-card-container shadow-sm p-3 mb-5 bg-white rounded col col-xl-4 col-xxl-4">
            <img className="user-photo" src="http://simpleicon.com/wp-content/uploads/user1.png"/>
            <h3 className="username">{this.state.user.username}</h3>
            <h4 className="name">{this.state.user.name}</h4>
            <div className="email-info-container">
                <h4 className="email-text">email:</h4>
                <a>{this.state.user.email}</a>
            </div>
            <div className={this.state.viewProfileStyles.companyContainerClasses}>
                <h4 className="company-key">company:</h4>
                <h4 className="company-name">{this.state.user.company.name}</h4>
            </div>
            <h4 className={this.state.viewProfileStyles.companyCatchPhrase}>{this.state.user.company.catchPhrase}</h4>
            <div className={this.state.viewProfileStyles.viewProfileBtnBlockClasses}>
                <div className="dividing-container"></div>
                <button className="view-profile-button">View Profile</button>
            </div>
        </div>
        )
    }
}

export default UserCard
