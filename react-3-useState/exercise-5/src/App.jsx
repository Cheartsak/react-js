import usePost from "./hook/usePost";
import { getUser } from "./hook/me";
import "./App.css";
import { useState } from "react";

function App() {
  const { get, remove, update, create } = usePost();
  const posts = get();

  const createPost = (content, image) => {
    let id = `id-${Math.floor(Math.random() * 10000)}`; // generate id here by Math.random() (please use integer)
    let time = new Date().toDateString(); // generate timestamp here by (new Date().toDateString())
    const user = getUser();
    const data = {
      id: id,
      author: user.author,
      avatar: user.avatar,
      time: time,
      content: content,
      image: image,
    };
    create(data);
  };

  return (
    <div id="app">
      <PostContainer create={createPost} />
      <UpdateContainer update={update} />
      <FeedSection posts={posts} removeHandler={remove} />
    </div>
  );
}

const PostContainer = ({ create }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const createPostInPostContainer = () => {
    create(content, image);
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-avatar" src="avatar.jpg" alt="Your Avatar" />
        <div className="post-author">You</div>
      </div>
      <div className="post-content">
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
          onChange={(ev) => setContent(ev.target.value)}
        ></textarea>
        <input
          className="post-input"
          type="text"
          placeholder="image url"
          onChange={(ev) => setImage(ev.target.value)}
        />
      </div>
      <div className="post-actions">
        <button className="post-button" onClick={createPostInPostContainer}>
          Post
        </button>
      </div>
    </div>
  );
};

const UpdateContainer = ({ update }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");

  const updatePostInContainer = () => {
    let time = new Date().toDateString();
    let user = getUser();
    const data = { id, ...user, time, content, image };
    update(data);
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-avatar" src="avatar.jpg" alt="Your Avatar" />
        <div className="post-author">Update Post</div>
      </div>
      <div className="post-content">
        <input
          className="post-input"
          type="text"
          placeholder="provide id : ex. id-001"
          onChange={(ev) => setId(ev.target.value)}
        />
        <textarea
          className="post-input"
          placeholder="update text?"
          onChange={(ev) => setContent(ev.target.value)}
        ></textarea>
        <input
          className="post-input"
          type="text"
          placeholder="update image url"
          onChange={(ev) => setImage(ev.target.value)}
        />
      </div>
      <div className="post-actions">
        <button className="post-button" onClick={() => updatePostInContainer()}>
          Update
        </button>
      </div>
    </div>
  );
};

const FeedSection = ({ posts, removeHandler }) => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          author={post.author}
          avatar={post.avatar}
          time={post.time}
          content={post.content}
          image={post.image}
          removeHandler={removeHandler}
        />
      ))}
    </div>
  );
};

const Post = ({ id, author, avatar, time, content, image, removeHandler }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar" src={avatar} alt="User 3" />
        <div>
          <div className="post-author">{author}</div>
          <div className="post-time">{time}</div>
        </div>
      </div>
      <div className="post-content">{content}</div>
      <img className="post-image" src={image} alt="Post 3" />
      <button onClick={() => removeHandler(id)}>DELETE</button>
    </div>
  );
};

export default App;
