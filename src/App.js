import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CustomLink from './components/CustomLink/CustomLink';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Post from './components/Post/Post';
import Posts from './components/Posts/Posts';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        {/* DYNAMIC routing */}
        <Route path="/friend/:id" element={<FriendDetails></FriendDetails>}></Route>

        <Route path="/posts" element={<Posts></Posts>}>
          {/* Nested Routing */}
          <Route path=":postId" element={<Post></Post>}></Route>
        </Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/custom" element={<CustomLink></CustomLink>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
