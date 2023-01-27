import CommentBtn from "./CommentBtn";
import "./Style/Comment.scss";

const CommentHeader = ({ commentData, setReplying, setDeleting, setDeleteModalState, setEditing, time }) =>
{
  console.log(commentData.user);
  return (
    <div className="comment--header">
      <div className={`profile-pic ${commentData.user.username}`}></div>
      <div className="username">{commentData.user.username}</div>
      {commentData.currentUser ? <div className="you-tag">you</div> : ""}
      <div className="comment-posted-time">{`${time} ago`}</div>
      <CommentBtn
        commentData={commentData}
        setReplying={setReplying}
        setDeleting={setDeleting}
        setDeleteModalState={setDeleteModalState}
        setEditing={setEditing}
      />
    </div>
  );
};

export default CommentHeader;
