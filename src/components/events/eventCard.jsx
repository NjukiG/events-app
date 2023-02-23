import Image from "next/image";

export const EventCard = ({ data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image src={data.image} alt={data.title} width={800} height={600} />
      <p>{data.description}</p>
      <form className="email_registration" onSubmit={handleSubmit}>
        <label htmlFor="email">Register for this event:</label>
        <input
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
    </div>
  );
};
