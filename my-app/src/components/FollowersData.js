import React from 'react';

import FollowersCard from './FollowersCard';

function FollowersData (props) {
    return (
        <div>
            <FollowersCard followersData={props.followersProps}/>
        </div>
    )
}

export default FollowersData;