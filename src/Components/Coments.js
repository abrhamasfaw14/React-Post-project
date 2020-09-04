import React from "react";
import ComentListItem from "./ComentListItem";
import AddComents from "./AddComents";

function Coments(props) {
  return (
    <div>
      {props.coments.map((coment) => {
        return (
          <ComentListItem
            handleDelete={props.handleDelete}
            handleAddComment={props.handleAddComment}
            coment={coment}
          />
        );
      })}
    </div>
  );
}

export default Coments;
