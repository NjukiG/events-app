import Image from "next/image";
import Link from "next/link";

const EventsCatPage = ({ data, pageName }) => {
  return (
    <div>
      <h1>Events in {pageName}</h1>

      {data.map((event) => (
        <Link
          legacyBehavior
          key={event.id}
          href={`/events/${event.city}/${event.id}`}
          passHref
        >
          <a>
            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={300}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");

  const allPaths = events_categories.map((event) => {
    return {
      params: {
        cat: event.id.toString(),
      },
    };
  });

  console.log(allPaths);

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat;
  // console.log(id)
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((event) => event.city === id);
  // console.log(data)
  return { props: { data, pageName: id } };
}
