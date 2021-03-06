import React from 'react';

const announcement = {
    imageSrc: 'https://www.americancampus.com/Acc/files/26/2629f7b3-4dd2-4969-b82f-9347f40cd45c.jpg',
    title: 'Title',
    description: 'Description text for announcement',
    url: '#'
}

const AnnouncementList = () => (
    <li className="col-12 col-md-6 col-lg-4">
    <div className="card">
        <a href={announcement.url}>
            <img className="card-img-top" src={announcement.imageSrc} alt=""/>
        </a>
        <div className="card-body">
            <a href={announcement.url}>
                <h4 className="card-title">{announcement.title.toUpperCase()}</h4>
                <p className="card-text text-body">{announcement.description}</p>
            </a>
        </div>
        {/* <div class="card-footer card-footer-borderless d-flex justify-content-between">
            <div class="text-small">
                <ul class="list-inline">
                    <li class="list-inline-item"><i class="icon-heart mr-1"></i> 373</li>
                    <li class="list-inline-item"><i class="icon-message mr-1"></i> 62</li>
                </ul>
            </div>
            <div class="dropup">
                <button class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="BenchButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="icon-dots-three-horizontal"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="BenchButton">
                    <a class="dropdown-item" href="">Save</a>
                    <a class="dropdown-item" href="">Share</a>
                    <a class="dropdown-item" href="">Comment</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="">Report</a>
                </div>
            </div>
        </div> */}
    </div>
</li>
)

export default AnnouncementList;