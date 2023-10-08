import { PageWrapper, TabWrapper } from '../components/ui';
import { useGlobalContext } from '../hooks/useGlobalContext';

export const EventPage = () => {
  const { selectedEventPage } = useGlobalContext();

  const googleMapsUrl = selectedEventPage.isEventOffline
    ? `https://maps.google.com/?q=${selectedEventPage.eventLocation?.lat},${selectedEventPage.eventLocation?.lng}`
    : '';

  return (
    <PageWrapper>
      Event Page
      <TabWrapper wrapperClassName="!pt-2">
        <h1>{selectedEventPage.eventName}</h1>
        <div className="flex flex-col text-base w-[90%] mx-[5%] mt-5">
          <div className="flex text-left gap-x-2">
            <span className="min-w-[150px] ">Event Description:</span>
            <span className="text-left">
              {selectedEventPage.eventDescription}
            </span>
          </div>
          <div className="flex text-left gap-x-2">
            <span className="min-w-[150px]">Event Category:</span>
            <span>{selectedEventPage.eventCategory}</span>
          </div>
          <div className="flex text-left gap-x-2">
            <span className="min-w-[150px]">Number of guests:</span>
            <span>{selectedEventPage.eventCapacity}</span>
          </div>
          {!selectedEventPage.isEventOffline && (
            <div className="flex text-left gap-x-2">
              <span className="min-w-[150px]">Meeting URL:</span>
              <a
                href={selectedEventPage.eventOnlineUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Go to the link
              </a>
            </div>
          )}
          {selectedEventPage.isEventOffline && (
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
          {!selectedEventPage.isEventFree && (
            <div className="flex text-left gap-x-2">
              <span className="min-w-[150px]">Event price:</span>
              <span>
                <span className="text-green-900">$</span>
                {selectedEventPage.eventPrice}
              </span>
            </div>
          )}
        </div>
      </TabWrapper>
    </PageWrapper>
  );
};
