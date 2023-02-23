import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export const EventCard = ({ data }) => {
  const inputEmail = useRef();
  // console.log(inputEmail);
  const router = useRouter();
  // console.log(router)

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;
    // console.log(eventId)
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please introduce a correct email address");
    }

    try {
      const responce = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId: eventId }),
      });

      if (!responce.ok) {
        throw new Error(`Error: ${responce.status}`);
      }
      const data = await responce.json();
      setMessage(data.message);

      console.log("POST", data);
    } catch (e) {}
  };

  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image src={data.image} alt={data.title} width={800} height={600} />
      <p>{data.description}</p>
      <form className="email_registration" onSubmit={handleSubmit}>
        <label htmlFor="email">Register for this event:</label>
        <input
          ref={inputEmail}
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          name="email"
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Register Now
        </button>
      </form>
      <br/>
      <h6>{message}</h6>
    </div>
  );
};
