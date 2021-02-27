/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function header() {
    
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
            </div>
            <div className="header_input">
                <input  placeholder="Search" type="text" />
                <SearchIcon className="header_inputButton"/>
            </div>
            <div className="header_icons">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <Avatar alt="Rakim Hussain" src="https://lh3.googleusercontent.com/ogw/ADGmqu-Y1E9vJ2PVARro013h62V3SdnkQQ_GH_-rw7a8rw=s83-c-mo" 
                />
            </div>
        </div>
    )
}

export default header
