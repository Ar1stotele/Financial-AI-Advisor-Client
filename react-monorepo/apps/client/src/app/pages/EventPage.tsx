import { useCallback, useState } from 'react';
import { ConnectWalletAndTransact } from '../components/metamask/ConnectWalletAndTransact';
import { PageWrapper, TabWrapper } from '../components/ui';
import { useGlobalContext } from '../hooks/useGlobalContext';
import { GetTicket } from '../components/events/ticket/GetTicket';

export const EventPage = () => {
  const { selectedEventPage } = useGlobalContext();

  const [isTxFinished, setIsTxFinished] = useState(false);
  const [isPaymentSuccessfull, setIsPaymentSuccessfull] = useState<
    undefined | boolean
  >(false);
  const [isRegisteredOnEvent, setIsRegisteredOnEvent] = useState(false);

  const googleMapsUrl = selectedEventPage.isEventOffline
    ? `https://maps.google.com/?q=${selectedEventPage.eventLocation?.lat},${selectedEventPage.eventLocation?.lng}`
    : '';

  const txResultHandler = useCallback(
    (data: { hash: string } | undefined, isSuccess: boolean) => {
      if (data?.hash && data?.hash?.length !== 0 && isSuccess) {
        setIsPaymentSuccessfull(true);
        setIsTxFinished(true);
      } else if (data?.hash && data?.hash?.length !== 0 && !isSuccess) {
        setIsTxFinished(true);
      }
    },
    []
  );

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
        <div>
          {!isTxFinished && !selectedEventPage.isEventFree && (
            <ConnectWalletAndTransact
              ethAmount="1"
              receiverAddress="0x1668C5F8df7c202654F6b21829eaA1E57bC1fA5f"
              getResult={txResultHandler}
            />
          )}
          {isPaymentSuccessfull && (
            <GetTicket value={selectedEventPage.eventName} />
          )}
          {selectedEventPage.isEventFree && (
            <GetTicket value={selectedEventPage.eventName} />
          )}
        </div>
      </TabWrapper>
    </PageWrapper>
  );
};
