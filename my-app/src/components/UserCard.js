import React from 'react';


function UserCard (props) {
    return (
        <div className="user">
            <img src={props.userData.avatar_url} alt="User Image"></img>
            <h1>{props.userData.login}</h1>
            <h3>{props.userData.location}</h3>
            <h3>{props.userData.html_url}</h3>
            <h3>Following: {props.userData.following}</h3>
            <h3>Followers: {props.userData.followers}</h3>
        </div>
    )
}



export default UserCard;