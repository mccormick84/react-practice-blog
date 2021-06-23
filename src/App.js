/* eslint-disable */
//eslint 사용하지 않음

import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  // let posts = "강남 고기 맛집";
  const [posts, setPosts] = useState([
    "게시글 1번",
    "게시글 2번",
    "게시글 3번",
  ]);

  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(0);
  const [input, setInput] = useState("");

  function handleIncrementClick() {
    setCount(count + 1);
  }

  function handleModalClick() {
    setModal(!modal);
  }

  // function handleChangeClick() {
  //   const newArray = [...post];
  //   newArray[0] = "여자 코트 추천";
  //   setPost(newArray);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>Development Blog</div>
      </div>

      {posts.map((post, index) => (
        <div className="list" key={index}>
          <h3
            onClick={() => {
              setSelected(index);
            }}
          >
            {`${index + 1}. ${post}`}
            <span>{` 👍 `}</span>
            <span>0</span>
          </h3>
          <p>작성일 : 2월 17일</p>
          <hr />
        </div>
      ))}

      <div className="publish">
        <input
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setPosts([...posts, input]);
          }}
        >
          Submit
        </button>
      </div>

      {/* <input
        className="input-save"
        onChange={(event) => {
          setInput(event.target.value);
          console.log(input);
        }}
      /> */}

      <button onClick={handleModalClick}>모달 여닫기</button>
      {modal === true ? <Modal posts={posts} selected={selected} /> : null}
      {/* <Modal posts={posts} selected={selected}></Modal> */}
    </div>
  );
}

export default App;
