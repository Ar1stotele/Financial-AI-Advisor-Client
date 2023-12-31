import { EventProps } from '../../../types';

interface EventEntryProps {
  event: EventProps;
}

export const EventEntry = ({ event }: EventEntryProps) => {
  const googleMapsUrl = event.isEventOffline
    ? `https://maps.google.com/?q=${event.eventLocation?.lat},${event.eventLocation?.lng}`
    : '';

  return (
    <div className="border-[1px] border-black border-solid p-2">
      <div className="flex text-left gap-x-2">
        <span className="min-w-[150px]">Event Name:</span>
        <span>{event.eventName}</span>
      </div>
      <div className="flex text-left gap-x-2">
        <span className="min-w-[150px] ">Event Description:</span>
        <span className="text-left">{event.eventDescription}</span>
      </div>
      <div className="flex text-left gap-x-2">
        <span className="min-w-[150px]">Event Category:</span>
        <span>{event.eventCategory}</span>
      </div>
      <div className="flex text-left gap-x-2">
        <span className="min-w-[150px]">Number of guests:</span>
        <span>{event.eventCapacity}</span>
      </div>
      {!event.isEventOffline && (
        <div className="flex text-left gap-x-2">
          <span className="min-w-[150px]">Meeting URL:</span>
          <a
            href={event.eventOnlineUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Go to the link
          </a>
        </div>
      )}
      {event.isEventOffline && (
        <div className="flex text-left gap-x-2">
          <span className="min-w-[150px]">Google maps URL:</span>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Go to the link
          </a>
        </div>
      )}
      {!event.isEventFree && (
        <div className="flex text-left gap-x-2">
          <span className="min-w-[150px]">Event price:</span>
          <span>
            <span className="text-green-900">$</span>
            {event.eventPrice}
          </span>
        </div>
      )}
    </div>
  );
};
