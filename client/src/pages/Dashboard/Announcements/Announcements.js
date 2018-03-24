import React from 'react';
import AnnouncementList from './AnnouncementList';

const Announcements = () => (
    <div className="container">
    <ul className="row feature-list feature-list-sm">
        <AnnouncementList />
        <AnnouncementList />
        <AnnouncementList />
        <AnnouncementList />
        <AnnouncementList />
        <AnnouncementList />
    </ul>
</div>
)

export default Announcements;