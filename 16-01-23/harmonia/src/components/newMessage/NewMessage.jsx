import { useState } from "react";
import "./index.css";

const NewMessage = () => {
  const [inputs, setInputs] = useState({});

  //Per accedere ai campi nel gestore eventi utilizzare
  //event.target.namee .event.target.value
  //Per aggiornare lo stato, utilizzare le parentesi quadre
  // attorno al nome della proprietà.

  const onHandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="NewMessage">
      <h1 className="NewMessage__title">Hello User!</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={onHandleInput}
          placeholder="@username"
        />
        <input
          type="text"
          name="title"
          value={inputs.title || ""}
          onChange={onHandleInput}
          placeholder="title idea"
        />
        <input
          type="text"
          name="body"
          value={inputs.body || ""}
          onChange={onHandleInput}
          placeholder="your idea"
        />
        <input className="NewMessage__button" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default NewMessage;
