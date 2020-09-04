import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Components/Header";
import AddComents from "./Components/AddComents";
import Coments from "./Components/Coments";
class App extends React.Component {
  state = {
    coments: [
      {
        id: 1,
        coment: [],
        title: "The Perfect Date",
        url: "https://s3.amazonaws.com/learn-verified/perfectDate.png",
      },
      {
        id: 2,
        coment: [],
        title: "Back-end v. Front-end",
        url: "https://s3.amazonaws.com/learn-verified/backVFront.jpg",
      },
      {
        id: 3,
        coment: [],
        title: "Good Programmer",
        url: "https://s3.amazonaws.com/learn-verified/goodProgrammer.png",
      },
      {
        id: 4,
        coment: [],
        title: "Need Snek",
        url: "https://s3.amazonaws.com/learn-verified/needSnekToRun.jpeg",
      },
      {
        id: 5,
        coment: [],
        title: "Risky Captcha",
        url: "https://s3.amazonaws.com/learn-verified/hopeThisDoesntDoDmg.jpg",
      },
      {
        id: 6,
        coment: [],
        title: "Amazon Sync Loader",
        url: "https://s3.amazonaws.com/learn-verified/syncingByAmazon.gif",
      },
      {
        id: 7,
        coment: [],
        title: "Just Kidding",
        url: "https://s3.amazonaws.com/learn-verified/woopsNevermind.png",
      },
      {
        id: 8,
        coment: [],
        title: "Assembly v. The World",
        url: "https://s3.amazonaws.com/learn-verified/divideBy10.png",
      },
      {
        id: 9,
        coment: [],
        title: "WaffleBoard",
        url: "https://s3.amazonaws.com/learn-verified/waffleBoard.png",
      },
      {
        id: 10,
        coment: [],
        title: "The Bat Strikes Again",
        url: "https://s3.amazonaws.com/learn-verified/NaNx10Batman.png",
      },
    ],
  };
  handleAddComment = (id, coment) => {
    const newComent = {
      id: uuidv4(),
      coment: "",
      title: "",

      url: <img src="" alt="" />,
    };
    this.setState({
      coments: this.state.comments.map((post) => {
        if (post.id === id) {
          post.coment.pus(newComent);
        }
        return post;
      }),
    });

    this.setState({
      coments: [...this.state.coments, newComent],
    });
  };
  handleDelete = (id) => {
    this.setState({
      coments: [
        ...this.state.coments.filter((coment) => {
          return coment.id !== id;
        }),
      ],
    });
  };

  render() {
    return (
      <div>
        <Header />
        <AddComents
          coments={this.state.coments}
          handleAddComment={this.handleAddComment}
        />
        <Coments
          handleDelete={this.handleDelete}
          coments={this.state.coments}
          handleAddComment={this.handleAddComment}
        />
      </div>
    );
  }
}

export default App;
