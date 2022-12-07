import Reply from "./Reply";

const ReplyContainer = ({
  commentData,
  updateScore,
  commentPostedTime,
  addReply,
  editComment,
  deleteComment,
  setDeleteModalState,
}) => {
  console.log("in container",commentData);
  return (
    <div>
      {commentData.map((data) => {
       return( <Reply
          key={data.id}
          commentData={data}
          updateScore={updateScore}
          commentPostedTime={commentPostedTime}
          addNewReply={addReply}
          editComment={editComment}
          deleteComment={deleteComment}
          setDeleteModalState={setDeleteModalState}
        />
      )})}
    </div>
  );
};

export default ReplyContainer;