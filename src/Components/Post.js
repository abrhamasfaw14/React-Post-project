import React from 'react'

class Post extends React.Component {
    fetchAllPosts();
    fetchAllCategories();
    

    render() {
        return (
            <div>
                 {props.coments.map((com) => {
        return (
          <AddComents handleAddComment={props.handleAddComment} com={com} />
        );
      })}
            </div>
        )
    }
}

export default Post
