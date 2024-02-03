import { useState } from "react";

import Header from "../header/Header";

const Demo = () => {
  //   let name = "Jagdish";
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [subscription, setSubscription] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    console.log("Form Submitted! ");
    
    let formData = {
      name: name,
      email: email,
      subcription: subscription
    }

    console.log(formData);

    // Reset Form
    setName('');
    setEmail('');
    setSubscription(false);
  };

  const nameChangedHandler = (event) => {
    console.log("Name Changed!");
    setName(event.target.value);
  };

  const emailChangedHandler = (event) => {
    setEmail(event.target.value);
  }

  const subscriptionChangedHandler = (event) => {
    console.log("Checked: ", event.target.checked);
    setSubscription(event.target.checked);
  }

  return (
    <div>
      <Header title="Event Handling Demo" />
      <h3>Newsletter Subscription</h3>

      <form onSubmit={submitHandler}>
        <p>
          <label htmlFor="name">Your Name: </label>
          <input id="name" type="text" value={name} onChange={nameChangedHandler} />
        </p>

        <p>
          <label htmlFor="email">Your Email: </label>
          <input id="email" type="email" value={email} onChange={emailChangedHandler} />
        </p>

        <p>
          <input id="subscription" type="checkbox" checked={subscription} onChange={subscriptionChangedHandler} />
          <label htmlFor="subscription">Newsletter Subscription</label>
        </p>

        <button type="submit">Submit</button>
      </form>

      {/* <h1> {name} </h1> */}
    </div>
  );
};

export default Demo;
