import Image from "next/image";

export const EventCard = ({ data }) => {
  return (
    <div>
      <Image src={data.image} alt={data.title} width={800} height={600} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <label>Register for this event:</label>
      <input type="email" /> <button>Submit</button>
    </div>
  );
};
