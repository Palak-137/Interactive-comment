import { ReactComponent as IconReply} from "../Assests/images/icon-reply.svg";
import { ReactComponent as IconDelete} from "../Assests/images/icon-delete.svg";
import { ReactComponent as IconEdit} from "../Assests/images/icon-edit.svg";

const CommentBtn = ({commentData, setReplying, setDeleting, setDeleteModalState, setEditing}) => {
    // adding reply
  
    // console.log(setReplying, setDeleting, se)
  
    let counter = false;
    const showAddComment = () => {
      counter ? setReplying(false) : setReplying(true);
      counter = true;
    };
  
    // delete comment
    const showDeleteModal = () => {
      setDeleting(true);
      setDeleteModalState(true);
    };
  
  console.log("commentdata.currentuser",commentData.currentUser )
    // edit comment
    const showEditComment = () => {
      setEditing(true);
    };
  
    return (
      <div className="comment--btn">
        <button
          className={`reply-btn ${
          !commentData.currentUser ? "" : "display--none"
          }`}
          onClick={showAddComment}
        >
          <IconReply /> Reply
        </button>
        <button
          className={`delete-btn ${
            commentData.currentUser ? "" : "display--none"
          }`}
          onClick={showDeleteModal}
        >
          <IconDelete /> Delete
        </button>
        <button
          className={`edit-btn ${commentData.currentUser ? "" : "display--none"}`}
          onClick={showEditComment}
        >
          <IconEdit /> Edit
        </button>
      </div>
    );
  };
  
  export default CommentBtn;