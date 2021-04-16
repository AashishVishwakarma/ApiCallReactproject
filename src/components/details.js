import axios from "axios";

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import React from "react";

const Details = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery(`post/${id}`, () => fetchPostData(id));
  const fetchPostData = async (id) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
  };
  if (isLoading) return null;

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "40%", height: "5%" }}>
          <ul>
            <li>{data.title}</li>
            <li>{data.body}</li>
          </ul>
        </div>
        <div style={{ width: "10%" }}></div>
      </div>
    </div>
  );
};

export default Details;
