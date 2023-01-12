// Write your JS code here
// import {Component} from 'react'
import './index.css'

const BlogItem = props => {
  const {BlogItemDetails} = props
  const {title, imageUrl, avatarUrl, author, content, topic} = BlogItemDetails

  return (
    <li className="">
      <img src={imageUrl} alt="image" />
      <div className="">
        <p className="">{topic}</p>
        <h1>{title}</h1>
        <div className="">
          <img src={avatarUrl} alt="avatar" />
          <p>{author}</p>
        </div>
      </div>
    </li>
  )
}

export default BlogItem
