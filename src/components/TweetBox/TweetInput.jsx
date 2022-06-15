import * as React from "react"
import AvatarIcon from "../AvatarIcon/AvatarIcon"

export default function TweetInput(props) {
  return (
    <div className="tweet-textarea">
      <AvatarIcon />

      <textarea className={props.expand ? "expanded" : ""} name="new-tweet-input" type="text" placeholder="What's Happening?" onChange={props.handleOnChange} value={props.value} onFocus={(e) => props.setFocus(true)} onBlur={(e) => props.setFocus(false)}>{props.value} </textarea>

      {props.expand ? <SmileIcon /> : <ImageIcon />}
    </div>
  )
}

export const SmileIcon = () => <i className="fas fa-smile"></i>
export const ImageIcon = () => <i className="fas fa-image"></i>
