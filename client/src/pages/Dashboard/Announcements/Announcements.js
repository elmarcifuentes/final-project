import React from 'react';
import AnnouncementList from './AnnouncementList';

const Announcements = () => (
    <div class="container">
    <ul class="row feature-list feature-list-sm">
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