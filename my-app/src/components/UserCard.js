import React from 'react';


function UserCard (props) {
    return (
        <div className="user">
            <img src={props.userData.avatar_url} alt="User"></img>
                <div className="tab-content">
                    <h2>{props.userData.login}</h2>
                    <h3>{props.userData.location}</h3>
                    <h3>{props.userData.html_url}</h3>
                    <h3>Following: {props.userData.following}</h3>
                    <h3>Followers: {props.userData.followers}</h3>
                </div>
        </div>
                
    )
}



export default UserCard;