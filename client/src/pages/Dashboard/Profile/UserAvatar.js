import React from 'react';
import AvatarImg from '../../../assets/img/sammy.jpeg';

const UserAvatar = () => (
    <div className="row">
    <div className="col-12">
        <div className="media flex-wrap mb-0 align-items-center">
            <img alt="" src={AvatarImg} className="avatar avatar-lg mb-3 mb-md-0" />
            <div className="media-body">
                <form>
                    <label className="custom-file mb-2" for="file2">
                        <input type="file" id="file2" className="custom-file-input height-0" />
                        <span className="btn btn-primary"><i className="icon-upload-to-cloud">&nbsp;</i>Upload</span>
                    </label>
                    <div>
                        <small>For best results, use an image at least 256px by 256px in either .jpg or .png format</small>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
)

export default UserAvatar;