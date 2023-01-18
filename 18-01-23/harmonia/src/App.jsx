import { useState } from "react";
import NewMessage from "./components/newMessage/index";
import MessagesList from "./components/messageList/index";
import FriendsList from "./components/friendsList/index";
// import QuotesList from "./components/quoteList/index";
import Button from "./components/button/index";
import Modal from "./components/modal/index";
import Filter from "./components/filter/index";
import "./App.css";

function App() {
  const [isModalEnabled, setModalEnabled] = useState(false);
  const [filterState, setFilterState] = useState("");

  const onHandleModal = () => setModalEnabled((prev) => !prev);
  return (
    <div className="App">
      <div className="friendsSection">
        <FriendsList />
      </div>
      <div className="mainSection">
        {isModalEnabled && (
          <Modal>
            <NewMessage />
          </Modal>
        )}
        <Filter setFilterState={setFilterState} />
        {/* full perchè voglio che i post siano tutti */}
        <MessagesList nPost={"full"} filterSearch={filterState} />
      </div>
      <div className="popularSection">
        <MessagesList nPost={3} />
      </div>
      {/* <div className="quotesSection">
        <QuotesList />
      </div> */}
      <Button isModalEnabled={isModalEnabled} func={onHandleModal} />
    </div>
  );
}

export default App;
