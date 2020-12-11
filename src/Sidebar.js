import { Button } from '@material-ui/core'
import { BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search, Twitter } from '@material-ui/icons'
import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'

function Sidebar() {
    return (
        <div className="sidebar">
            {/* twitter icon */}
            <Twitter className="sidebar__twitterIcon" />
            {/* options */}
            <SidebarOption active Icon={Home} text="Home"/>
            <SidebarOption Icon={Search} text="Explore"/>
            <SidebarOption Icon={NotificationsNone} text="Notifications"/>
            <SidebarOption Icon={MailOutline} text="Messages"/>
            <SidebarOption Icon={BookmarkBorder} text="Bookmarks"/>
            <SidebarOption Icon={ListAlt} text="Lists"/>
            <SidebarOption Icon={PermIdentity} text="Profile"/>
            <SidebarOption Icon={MoreHoriz} text="More"/>

            {/* button tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
