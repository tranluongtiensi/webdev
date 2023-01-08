import React from 'react'
import './Post.css'
import Avatar  from '@mui/icons-material/AccountCircle';

const Post = ({username, caption, imageUrl}) => {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar
                className='post__avatar'
                alt={username}
                src="https://res.cloudinary.com/dcwka06ph/image/upload/v1670594546/z3943605853192_68e4ef53c7ec4992410a1f20e1549276_sb7zeh.jpg"
             />
            <h3>{username}</h3>
        </div>
        <img className='post__image' src={imageUrl} alt="React" />
        <p className='post_text'><strong>{username}</strong>{caption}</p>
    </div>
  )
}

export default Post