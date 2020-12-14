import React from "react";

const CommentsRespond = () => (
  <div id="respond" className="comment-respond">
    <h2 id="reply-title" className="comment-reply-title">
      Post a comment
    </h2>
    <form method="post" id="form-comments" className="comment-form">
      <div className="form-group">
        <textarea
          name="comment"
          id="comment-field"
          className="form-control"
          placeholder="Comment"
          rows="5"
        ></textarea>
      </div>
      <div className="row-form row">
        <div className="col-form col-md-6">
          <div className="form-group">
            <input
              name="author"
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="col-form col-md-6">
          <div className="form-group">
            <input
              name="email"
              type="text"
              className="form-control"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
      <p className="form-submit">
        <input
          name="submit"
          type="submit"
          id="submit-btn"
          className="btn btn-color btn-square"
          value="Post Comment"
        />
        <input type="hidden" name="comment_post_ID" />
        <input
          type="hidden"
          name="comment_parent"
          id="comment_parent"
          value="0"
        />
      </p>
    </form>
  </div>
);

export default CommentsRespond;
