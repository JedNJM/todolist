import React from "react";

const tasks = (props) => {
  return (
    <>
      <div><h1>{props.task}</h1>
      <p>{props.description}</p>
      <h3>{(props.done) ? <h2>Done</h2> : <h2>Not Done Yet</h2>}</h3></div>
    </>
  );
};

export default tasks;
