import { Search } from '@material-ui/icons'
import React from 'react'
import "./Widget.css"
import { TwitterTweetEmbed, TwitterShareButton, TwitterTimelineEmbed } from 'react-twitter-embed'

function Widget() {
    return (
        <div className="widget">
            <div className="widget__input">
                <Search className="widget__searchIcon" />
                <input type="text" placeholder="Search Twitter"/>
            </div>
            <div className="widget__widgetContainer">
                <h2>What's Happening</h2>

                <TwitterTweetEmbed tweetId={"1323980350373031937"} />
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="twf_thewebfreak"
                    options={{height:400}}
                />
            </div>
        </div>
    )
}

export default Widget
