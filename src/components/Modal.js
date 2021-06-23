import React from "react";

export default function Modal(props) {
  return (
    <>
      <div className="modal">
        <h2>{props.posts[props.selected]}</h2>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
    </>
  );
}
