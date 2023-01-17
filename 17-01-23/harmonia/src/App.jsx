import "./App.css";
import NewMessage from "./components/newMessage/index";
import MessagesList from "./components/messageList/index";
import FriendsList from "./components/friendsList/index";
import QuotesList from "./components/quoteList/QuotesList";

function App() {
  return (
    <div className="App">
      <div className="friendsSection">
        <FriendsList />
      </div>
      <div className="mainSection">
        <NewMessage />
        <MessagesList />
      </div>
      <div className="quotesSection">
        <QuotesList />
      </div>
    </div>
  );
}

export default App;
