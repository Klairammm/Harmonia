import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Friend from "../friend";
import Filter from "../filter";
import "./index.css";

const FriendsList = ({ setModalContent, setModalEnabled }) => {
  const [filterState, setFilterState] = useState("");
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    // GET("users").then(({ users }) => setFriendsList(users));
    GET("users").then((data) => setFriendsList(data.users));
  }, []);

  return (
    <div className="FriendsList">
      <h2>Friends</h2>
      <Filter setFilterState={setFilterState} />
      {friendsList
        .filter((friend) => friend.firstName.includes(filterState))
        .map((friend) => (
          <Friend
            data={friend}
            setModalContent={setModalContent}
            setModalEnabled={setModalEnabled}
            key={friend.id}
          />
        ))}
    </div>
  );
};

export default FriendsList;
