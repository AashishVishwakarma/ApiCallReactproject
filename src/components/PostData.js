import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams, useHistory } from "react-router-dom";

function PostData() {
  const { userId } = useParams();

  const history = useHistory();
  const { data, isLoading } = useQuery(`user/${userId}`, () =>
    fetchUserData(userId)
  );
  const fetchUserData = async (userId) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
    return data;
  };

  if (isLoading) return null;

  return (
    <div>
      <ul>
        {data?.map((post, index) => (
          <li key={index}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ width: "50%", height: "5%" }}>
                <ul>
                  <li>{post.id}</li>

                  <li>{post.title}</li>
                </ul>
              </div>
              <div style={{ width: "50%" }}>
                <button onClick={() => history.push(`/post/${post.id}`)}>
                  {" "}
                  post
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostData;
