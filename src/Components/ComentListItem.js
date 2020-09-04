import React from "react";

const ComentListItem = (props) => {
  return (
    <div class="image">
      <h2>
        <button
          class="destroy-image"
          onClick={() => {
            return props.handleDelete(props.coment.id);
          }}
        >
          x
        </button>
        {props.coment.title}
      </h2>
      <ul id="image- data-id=">
        <img src={props.coment.url}></img>
        <ul id="">
          <li></li>
        </ul>

        <form id="add-comment" class="add-comment" method="post">
          <label for="comment-description">Comment: </label>
          <input
            type="text"
            class="user-text"
            name="comment-description"
            placeholder="comment"
            onChange={props.onChange}
          />
          <input type="submit" value="(+) add comment" />
        </form>
      </ul>
    </div>
  );
};
export default ComentListItem;
