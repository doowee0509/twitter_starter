import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  const [focus, setFocus] = React.useState(false)
  
  const handleOnTweetTextChange = (e) => {
    props.setTweetText(e.target.value)
  }

  const handleOnSubmit = () => {
    const newTweet = {
      name: props.userProfile ? props.userProfile.name : "",
      handle: props.userProfile ? props.userProfile.handle : "",
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
    }

    props.setTweets((prevTweets) => {
      const tweetsArray =  [...prevTweets, { ...newTweet, id: prevTweets.length}]
      return tweetsArray
    })

    props.setTweetText("")
  }
  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange} expand={focus || props.tweetText.length} setFocus={setFocus}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText}/>
        <TweetSubmitButton disabled={props.tweetText.length === 0 || props.tweetText.length > 140} handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  // console.log(props.tweetText)
  var charLeft = 140 - props.tweetText.length
  return <span>{charLeft === 140 ? null : charLeft}</span>
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" disabled={props.disabled} onClick={props.handleOnSubmit}>Tweet</button>
    </div>
  )
}
