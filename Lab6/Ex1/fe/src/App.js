import './App.css';
import Post from './components/Post';
import React, {useState, useEffect} from 'react';
import {makeStyles} from '@mui/styles'
import Modal from '@mui/material/Modal';
import {Button, Input} from '@mui/material';
import {auth} from './firebase';
import ImageUpload from './components/ImageUpload';
import axios from 'axios';
import Pusher from 'pusher-js';

const pusher = new Pusher('fb53aa797214644cdbdc', {
  cluster: 'ap2'
}); 

function getModalStyle() {
  const top = 50;
  const left = 50;

  return{
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    border: '2px solid #000',
  }
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [openSignIn, setOpenSignIn] = useState(false);
  const [posts, setPosts] = useState([]);

  console.log(posts)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    })
    return () => {
      unsubscribe()
    }
  }, [user, username])

  const fetchPosts = async () =>{
    await axios.get('http://localhost:9000/sync').then(response => setPosts(response.data))
  }

  useEffect(() => {
    const channel = pusher.subscribe('my-channel');
    channel.bind('inserted', (data) => {
      fetchPosts();
    });
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [])

  const signUp = async(e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => authUser.user.updateProfile({displayName: username}))
        .catch(error => alert(error.message))
    setOpen(false)
  }

  const signIn = async(e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
        .catch(error => alert(error.message))
    setOpenSignIn(false)
  }

  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className='app__signup'>
            <center>
              <img className='app__headerImage' src='' alt='Header'/>
            </center>
            <Input placeholder='username'
                   type='text'
                   value={username}
                   onChange={e => setUsername(e.target.value)}
            />
            <Input placeholder='email'
                   type='text'
                   value={email}
                   onChange={e => setEmail(e.target.value)}
            />
            <Input placeholder='password'
                   type='password'
                   value={password}
                   onChange={e => setPassword(e.target.value)}
            />
            <Button type='submit' onClick={signUp}>Sign Up</Button>
          </form>
        </div>
      </Modal>
      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className = "app__signup">
            <center>
              <img className='app__headerImage'
                   src=''
                   alt='Header'
              />
            </center>
            <center>
              <Input placeholder='email'
                     type='text'
                     value={email}
                     onChange={e => setEmail(e.target.value)}
              />
              <Input placeholder='password'
                     type='password'
                     value={password}
                     onChange={e => setPassword(e.target.value)}
              />
              <Button type='submit' onClick={signIn}>Sign In</Button>
            </center>
          </form>
        </div>
      </Modal>
      <div className='app__header'>
        <img className='app__headerImage' src='https://res.cloudinary.com/dcwka06ph/image/upload/v1669344948/Website_project/logo_mwaet4.jpg' alt='Header'/>
        {user ? <Button onClick={() => auth.signOut()}>Logout</Button> : (
            <div className='app__loginContainer'>
              <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
              <Button onClick={() => setOpen(true)}>Sign Up</Button>
            </div>
        )}
      </div>
      <div>
        <div className='app__posts'>
          {
            posts.map(post => (
              <Post
                  key={post._id}
                  username={post.user}
                  caption={post.caption}
                  imageUrl={post.image}
              />
            ))
          }
        </div>
      </div>
      {user?.displayName ? <ImageUpload username={user.displayName}/> : <h3 className='app__notLogin'>Need to login to upload</h3>}
    </div>
  );
}

export default App;