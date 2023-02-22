import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => {
  return (
    <div className="home_body">
      {data?.map((event) => (
        <Link
          key={event.id}
          href={`/events/${event.id}`}
          passHref
          legacyBehavior
        >
          <a className="card" href={`/events/${event.id}`}>
            <div className="image">
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={400}
              />
            </div>
            <div className="content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};
