import "./post.css";
import { MoreVert } from "@mui/icons-material";
import {Users} from "../../dummyData";

/*export default function Post({post}) {
 
  return (
    <div className="post">
        <div className="postWrapper">
        <div className="postTop">
        <div className="postTopLeft">
        <img className="postProfileImg" 
        src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
        alt=""/>
        <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
        <span className="postData">{Post.date}</span>

    </div>
    <div className="postTopright"></div>
    <MoreVert/>
    </div>
    <div className="postCenter">
    <span className="postText">{Post?.desc}</span>
    <img className="postImg" src="{post.photo}" alt=""/>
    </div>
    

    <div className="postBottom">
        <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt=""/>
            <img className="likeIcon" src="assets/pic like.jpg" alt=""/>
            <span className="postLikeCounter">{post.like} people like  it</span>
        </div>
        
        <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
        </div>
        
    </div>
    </div>
    </div>
    
  )
}*/
export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="assets/person/images 5.jpeg"
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postData">{post.date}</span>
          </div>
          <div className="postTopRight">
            {/* Add your MoreVert component here */}
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src="assets/post/dog.avif" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/pic like.jpg" alt="" />
            <span className="postLikeCounter">{post.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
