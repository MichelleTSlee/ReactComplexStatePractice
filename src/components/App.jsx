import React, { useState } from "react";

function App() {
  const [name, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target; //Destructing the event

    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {name.firstName} {name.lastName}
      </h1>
      <p>{name.email}</p>

      <input
        name="firstName"
        onChange={handleChange}
        type="text"
        placeholder="First Name"
        value={name.firstName}
      ></input>
      <br />

      <input
        name="lastName"
        onChange={handleChange}
        type="text"
        placeholder="Last Name"
        value={name.lastName}
      ></input>

      <br />

      <input
        name="email"
        onChange={handleChange}
        type="text"
        placeholder="Email"
        value={name.email}
      ></input>

      <button>Submit</button>
    </div>
  );
}

export default App;
