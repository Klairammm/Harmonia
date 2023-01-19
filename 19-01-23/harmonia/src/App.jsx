import Header from "./components/header/index";
import Footer from "./components/footer/index";
import { useState } from "react";
import NewMessage from "./components/newMessage";
import MessagesList from "./components/messagesList";
import FriendsList from "./components/friendsList";
import Filter from "./components/filter";
import Button from "./components/button";
import Modal from "./components/modal";
import "./App.css";

function App() {
  const [filterState, setFilterState] = useState("");
  const [isModalEnabled, setModalEnabled] = useState(false);
  const [modalContent, setModalContent] = useState("NewMessage");

  const onHandleModal = () => {
    setModalEnabled((prev) => !prev);
    setModalContent("NewMessage");
  };
  return (
    <div className="App">
      <Header />
      <div className="App__body">
        <div className="friendsSection">
          <FriendsList
            setModalContent={setModalContent}
            setModalEnabled={setModalEnabled}
          />
        </div>
        <div className="MessagesListSection">
          <h2>Discover Messages</h2>
          {isModalEnabled && (
            <Modal>
              <NewMessage />
            </Modal>
          )}
          <MessagesList nPost={"full"} filterSearch={filterState} />
        </div>
        <div className="popularSection">
          <MessagesList nPost={5} />
        </div>
        <Button isModalEnabled={isModalEnabled} func={onHandleModal} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
