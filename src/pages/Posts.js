import React from "react";
import { useParams } from "react-router-dom";
const Posts = () => {
  const params = useParams();
  const id = params.id;
  return <div>posts {id}</div>;
};

export default Posts;
