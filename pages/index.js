import Layout from "../components/Layout";
import { API_URL } from "../config/index";
import EventItem from "../components/EventItem";
import Link from "next/link";
export default function HomePage({ events }) {
  console.log(events)
  return (
    <Layout>
      <h1>Up Coming Events</h1>
      {events.length === 0 && <h3>No Events to Show</h3>}
      
     

     
       {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
     {events.length > 0 && (
      <Link href='/events'>
        <a className='btn-secondary'>View All Events</a>
      </Link> 
    )} 
    </Layout>
  );
}

// export async function getServerSideProps() {
//   // const res = await fetch(`${API_URL}/api/events?_sort=date:ASC&_limit=3`);
//   const res = await fetch(`http://localhost:3000/api/events`)
//   const events = await res.json();

//   return {
//     props: { events:
//       events.data
//     },
//   };
// }
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events:events.slice(0, 3) },
  };
}