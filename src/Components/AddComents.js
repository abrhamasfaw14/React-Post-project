import React from "react";

class AddComents extends React.Component {
  state = {
    coment: "",
  };
  onChange = (e) => {
    this.setState({
      coment: e.target.value,
    });
    // console.log(e.target.value);
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.coment === "") {
      alert("please Add your Coment...");
    } else {
      this.props.handleAddComment(this.state.coment);
      this.setState({
        coment: "",
      });
    }
  };
  render() {
    return (
      <div>
        <form action="" className="input-form" onSubmit={this.onSubmit}>
          <label placeholder="comment">Comment</label>
          <input
            type="text"
            value={this.state.coment}
            placeholder="comment"
            className="input-text"
            handleAddComment={this.handleAddComment}
            onChange={this.onChange}
          />
          <span></span>
          <input
            type="submit"
            value="(+) add comment"
            className="input-button"
          />
        </form>
      </div>
    );
  }
}

export default AddComents;
