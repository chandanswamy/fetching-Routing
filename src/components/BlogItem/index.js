// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogItem} = this.props
    const {id, title, imageUrl, avatarUrl, author, topic} = blogItem

    return (
      <Link to={`/blogs/${id}`} className="blog-item">
        <img src={imageUrl} alt={`item ${id}`} className="image-url" />
        <div className="blog-details">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt={`avatar ${id}`} className="avatar-url" />
            <p className="author">{author}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem
