import Link from "next/link";
import Image from "next/image";

export const EventsCat = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Events in {pageName}</h1>

      <div className="content">
        {data.map((event) => (
          <Link
            className="card"
            legacyBehavior
            key={event.id}
            href={`/events/${event.city}/${event.id}`}
            passHref
          >
            <a>
              <Image
                src={event.image}
                alt={event.title}
                width={300}
                height={300}
              />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
