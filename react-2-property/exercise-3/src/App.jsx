import usePost from "./hook/usePost";
import "./App.css";

function App() {
  const { get, remove } = usePost();
  const postData = get();
  // console.log(postData);
  return (
    <div id="app">
      <PostContainer />
      <FeedSection postData={postData} remove={remove} />
    </div>
  );
}

const PostContainer = () => {
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
        ></textarea>
      </div>
      <div className="post-actions">
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

const FeedSection = ({ postData, remove }) => {
  return (
    <div className="feed">
      {postData.map((data) => {
        const { id, avatar, author, content, time, image } = data;
        return (
          <Post
            id={id}
            avatar={avatar}
            author={author}
            content={content}
            time={time}
            image={image}
            remove={remove}
          />
        );
      })}
    </div>
  );
};

const Post = ({ id, avatar, author, content, time, image, remove }) => {
  return (
    <>
      <div className="post">
        <div className="post-header">
          <img className="post-avatar" src={avatar} alt={author} />
          <div>
            <div className="post-author">{author}</div>
            <div className="post-time">{time}</div>
          </div>
        </div>
        <div className="post-content">{content}</div>
        <img className="post-image" src={image} alt={author} />
        <button onClick={() => remove(id)}>DELETE</button>
      </div>
    </>
  );
};

export default App;
