import { useCallback, useState } from 'react';
import { EventCategory, Point } from '../../../types';
import { CustomDropdown, SubmitBtn, UserInput } from '../../ui';
import { CustomCheckbox } from '../../ui/CustomCheckbox';

import { GoogleMap } from '../../shared/GoogleMap';

export const CreateEvent = () => {
  const [eventCategory, setEventCategory] = useState(EventCategory.None); // TODO check if none
  const [eventDescription, setEventDescription] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventCapacity, setEventCapacity] = useState('');
  const [eventPrice, setEventPrice] = useState('');
  const [eventOnlineUrl, setEventOnlineUrl] = useState('');

  const [lat, setLat] = useState(41.716667);
  const [lng, setLng] = useState(44.783333);

  const [isEventOffline, setIsEventOffline] = useState(true);
  const [isEventFree, setIsEventFree] = useState(true);

  const dropdownOptions = Object.values(EventCategory);

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

  const positionChangeHandler = useCallback((position: Point) => {
    console.log({ position });
    setLat(position.lat);
    setLng(position.lng);
  }, []);

  const setEventUrlHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEventOnlineUrl(event.target.value);
    },
    []
  );

  const createEventHandler = useCallback(() => {
    console.log('TODO --> create event');
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
      <div className="w-[35%] flex gap-10 justify-items-start items-center">
        <span className="text-base">Select Category:</span>
        <CustomDropdown
          dropdownOptions={dropdownOptions}
          selectedOption={eventCategory}
          setSelectedOption={setEventCategory}
        />
      </div>
      <div className="w-[35%] flex items-center justify-between">
        <CustomCheckbox
          checked={isEventFree}
          setValueHandler={setIsEventFreeHandler}
          name="is event free"
        />
        <UserInput
          value={eventPrice}
          onChangeHandler={setEventPriceHandler}
          inputClassName="!w-[70%]"
          placeholder="Enter event cost for guests ($)"
        />
      </div>

      <CustomCheckbox
        checked={isEventOffline}
        setValueHandler={setIsEventOfflineHandler}
        name="is event offline"
      />
      {isEventOffline && (
        <div className="h-[50vh] w-1/2">
          <GoogleMap
            lat={lat}
            lng={lng}
            positionChangeHandler={positionChangeHandler}
          />
        </div>
      )}
      {!isEventOffline && (
        <UserInput
          value={eventOnlineUrl}
          onChangeHandler={setEventUrlHandler}
          placeholder="Enter event URL"
          inputClassName="!mt-2"
        />
      )}
      <SubmitBtn btnName="Create Event" btnAction={createEventHandler} />
    </div>
  );
};
