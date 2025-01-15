/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

type Event = {
  id: number;
  name: string;
  title: string;
  datetime: string;
  end_datetime: string;
  event_url: string;
}[];

export default async function getEvents() {
  const eventsResponse = await fetch("https://meetup-bot.marpo60.xyz/json");
  const { meetups: allEvents } = await eventsResponse.json();

  const events = allEvents
    .filter((event: { datetime: string }) => {
      const eventDate = new Date(event.datetime);
      const today = new Date();
      const thirtyDaysFromNow = new Date();
      thirtyDaysFromNow.setDate(today.getDate() + 30);
      return eventDate >= today && eventDate <= thirtyDaysFromNow;
    })
    .sort((a: { datetime: string }, b: { datetime: string }) => {
      return new Date(a.datetime).getTime() - new Date(b.datetime).getTime();
    });

  return events as unknown as Event;
}
