// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const formattedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      content: data.content,
    }

    this.setState({blogData: formattedData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderBlogData = () => {
    const {blogData} = this.state
    const {id, title, imageUrl, avatarUrl, author, content} = blogData
    return (
      <div className="blog-data-container">
        <h1 className="blog-title">{title}</h1>
        <div className="author-container">
          <img src={avatarUrl} alt={`avatar ${id}`} className="avatar-url" />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-image-url" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-list">
        {isLoading ? this.renderLoader() : this.renderBlogData()}
      </div>
    )
  }
}

export default BlogItemDetails
