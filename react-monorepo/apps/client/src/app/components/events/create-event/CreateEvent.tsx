import { useCallback, useState } from 'react';
import { EventCategory, MapProps } from '../../../types';
import { UserInput } from '../../ui';
import { CustomCheckbox } from '../../ui/CustomCheckbox';
import { GoogleMap } from '../../shared/GoogleMap';

export const CreateEvent = () => {
  const [eventCategory, setEventCategory] = useState(EventCategory.None);
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState<MapProps>({
    lat: 41.69411,
    lng: 44.83368,
  });
  const [eventName, setEventName] = useState('');
  const [eventCapacity, setEventCapacity] = useState('');
  const [eventPrice, setEventPrice] = useState('');

  const [isEventOffline, setIsEventOffline] = useState(true);
  const [isEventFree, setIsEventFree] = useState(true);

  const setEventNameHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEventName(event.target.value);
    },
    []
  );

  const setEventDescriptionHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEventDescription(event.target.value);
    },
    []
  );

  const setEventCapacityHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const regExp = /^[0-9]*[.]?[0-9]*$/;
      if (regExp.test(event.target.value)) {
        setEventCapacity(event.target.value);
      }
    },
    []
  );

  const setEventPriceHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const regExp = /^[0-9]*[.]?[0-9]*$/;
      if (regExp.test(event.target.value)) {
        setEventPrice(event.target.value);
      }
    },
    []
  );

  const setIsEventFreeHandler = useCallback(() => {
    setIsEventFree(!isEventFree);
  }, [isEventFree]);

  const setIsEventOfflineHandler = useCallback(() => {
    setIsEventOffline(!isEventOffline);
  }, [isEventOffline]);

  const setLocationOnMap = useCallback((position: MapProps) => {
    setLocationOnMap(position);
  }, []);

  return (
    <div className="border-[1px] border-black w-[90%] mx-[5%] flex flex-col justify-center items-center gap-y-4 py-4 mt-4">
      <UserInput
        value={eventName}
        onChangeHandler={setEventNameHandler}
        placeholder="Enter event name"
      />
      <UserInput
        value={eventDescription}
        onChangeHandler={setEventDescriptionHandler}
        placeholder="Enter event description"
      />
      <UserInput
        value={eventCapacity}
        onChangeHandler={setEventCapacityHandler}
        placeholder="Enter number of participants"
      />
      <CustomCheckbox
        checked={isEventOffline}
        setValueHandler={setIsEventOfflineHandler}
        name="is event offline"
      />
      {!isEventOffline && (
        // <UserInput
        //   value={event}
        //   onChangeHandler={setEventPriceHandler}
        //   placeholder="Enter event cost for guests ($)"
        // />
        <div className="h-screen w-full">
          <GoogleMap
            lat={eventLocation.lat}
            lng={eventLocation.lng}
            onPositionChange={setLocationOnMap}
          />{' '}
        </div>
      )}
      <CustomCheckbox
        checked={isEventFree}
        setValueHandler={setIsEventFreeHandler}
        name="is event free"
      />
      {!isEventFree && (
        <UserInput
          value={eventPrice}
          onChangeHandler={setEventPriceHandler}
          placeholder="Enter event cost for guests ($)"
        />
      )}
    </div>
  );
};
