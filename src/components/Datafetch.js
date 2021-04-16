import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
// import PostData from "./components/PostData";
import { useHistory } from "react-router-dom";

function Datafetch() {
  const { data, isLoading } = useQuery("users", () => fetchUsers());

  const fetchUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  };

  const history = useHistory();

  if (isLoading) return null;

  return (
    <div>
      <ul>
        {data?.map((user, index) => (
          <li key={index}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ width: "20%", height: "5%" }}>
                <ul>
                  <li>{user?.id}</li>
                  <li>{user?.name}</li>
                  <li>{user?.email}</li>
                </ul>
              </div>
              <div style={{ width: "20%" }}>
                <button
                  type="button"
                  onClick={() => history.push(`/posts/${user.id}`)}
                >
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

export default Datafetch;
