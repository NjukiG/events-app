import Image from "next/image";
import Link from "next/link";

function EventsPage({ data }) {
  // console.log(data)
  return (
    <div>
      <h1>Events Page</h1>

      {data.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`}>
          <Image src={event.image} alt={event.title} width={400} height={300} />
          <h2>{event.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  // console.log(events_categories)

  return {
    props: {
      data: events_categories,
    },
  };
}
