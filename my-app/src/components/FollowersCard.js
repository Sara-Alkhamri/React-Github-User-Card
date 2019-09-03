import React from 'react';

function FollowersCard (props) {
    return (
        <div>
            {props.followersData.map(followers => {
                return (
                    <div>
                        <img src={followers.avatar_url} alt="Followers Images"></img>
                        <h3>{followers.login}</h3>
                        <h3>{followers.html_url}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard;