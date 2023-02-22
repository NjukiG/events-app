import Link from "next/link";
import Image from "next/image";

export const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((event) => (
        <Link className="card" key={event.id} href={`/events/${event.id}`}>
          <Image src={event.image} alt={event.title} width={450} height={400} />
          <h2>{event.title}</h2>
        </Link>
      ))}
    </div>
  );
};
