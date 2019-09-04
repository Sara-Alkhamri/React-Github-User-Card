import React from 'react';

function FollowersCard (props) {
    return (
        <div>
            {props.followersData.map(followers => {
                return (
                    <div className="followers">
                        <img src={followers.avatar_url} alt="Followers"></img>
                        <h2>{followers.login}</h2>
                        <h3>{followers.html_url}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard;