import Image from "next/image";
import { EventCard } from "@/components/events/eventCard";
function EventPage({data}) {
  console.log(data)
  return (
   <EventCard data={data} />
  )
}

export default EventPage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");
  const eventData = allEvents.find((event) => id === event.id);

  return {
    props: { data: eventData },
  };
}
