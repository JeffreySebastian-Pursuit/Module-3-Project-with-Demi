import React, { useState, useEffect } from "react";
import './CommentForm.css'

let uuid = 1;
const CommentForm = () => {
  const [input, setInput] = useState("");
  const [lists, setList] = useState([]);
  const [inputComment, setInputComment] = useState("");

  useEffect(() => {});
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInput(e.target.value);
    } else {
      setInputComment(e.target.value);
    }
  };

  const addComment = (comment) => {
    setList((prevComment) => [...prevComment, comment]);
  };
  const addName = (name) => {
    setList((prevList) => [...prevList, name]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // window.localStorage.getItem("name", input, e.target.value);
    // window.localStorage.setItem("comment", inputComment, e.target.value);
    const newList = { id: uuid++, type: input };
    const newComment = { id: uuid++, type: inputComment };
    addName(newList);
    addComment(newComment);
    setInput("");
    setInputComment("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          placeholder="your name"
          type="text"
          value={input}
          name="name"
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="comment">Comment: </label>
        <input
          id="comment"
          type="type"
          placeholder="your comment"
          onChange={handleChange}
          name="comment"
          value={inputComment}
        />
        <input type="submit" />
      </form>
      <ul className='commentForm'>
        {lists.map((list) => {
          return <li key={list.id}>{list.type}</li>;
        })}
      </ul>
    </div>
  );
};

export default CommentForm;
