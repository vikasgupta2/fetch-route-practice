// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'


class BlogList extends Component {
    state: {UserData: [], isLoading: true}

  componentDidMount() {
    this.getUserData()
  }

  getUserData = async () => {
    const UserData1 = await fetch('https://apis.ccbp.in/blogs')
    const responseData = await UserData1.json()

    const formattedData = responseData.map(eachUser=>{
        id: eachUser.id,
        title: eachUser.title,
        imageUrl: eachUser.image_url,
        avatarUrl: eachUser.avatar_url,
        author: eachUser.author,
        topic: eachUser.topic,
        content: eachUser.content
    })
    this.setState({UserData: formattedData, isLoading: false})
  }


  render() {
      const {UserData, isLoading} = this.state
    return (
    <div>{ isLoading ? (<Loader type="TailSpin" color="#00BFFF" height={50} width={50} />) :
      (<ul className="">
        {UserData.map(eachUser => (
          <BlogItem BlogItemDetails={UserDetails} />
        ))}
      </ul>)}
    </div>
    )
  }
}

export default BlogList
