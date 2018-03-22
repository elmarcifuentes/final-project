import React from 'react';
import UserAvatar from './UserAvatar';
import UpdateLogin from './UpdateLogin';
import UpdateContact from './UpdateContact';

const Profile = () => (
    <div className="container">
        <UserAvatar />
        <hr/>
        <UpdateLogin />
        <hr/>
        <UpdateContact />
    </div>
)

export default Profile;