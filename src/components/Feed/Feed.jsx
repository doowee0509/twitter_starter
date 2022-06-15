import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  const tweets = props.tweets
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox userProfile={props.userProfile} setTweets={props.setTweets} tweetText={props.tweetText} setTweetText={props.setTweetText} setUserProfile={props.setUserProfile}/>

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {tweets.map((tweet) => {
          return <Tweet tweet={tweet} key={tweet.id}/>
        })}
      </div>
    </div>
  )
}
