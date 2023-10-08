import { useState } from 'react';
import { SearchBar } from '../../ui';
import { EventCategory, EventProps } from '../../../types';
import { EventEntry } from './EventEntry';

export const AllEvents = () => {
  const [searchString, setSearchString] = useState('');

  const data: EventProps[] = [
    {
      eventName:
        'Discover the Future of AR Social Media at Token 2049 Singapore',
      eventDescription:
        'Are you ready to witness the future of AR and social media unfold before your eyes? The countdown to Token 2049 in Singapore has begun, and its the event you would not want to miss! On September 13th and 14th, 2023, join us at Token 2049, Singapores premier crypto and blockchain event. Connect with us to learn more about the exciting world of Mark:MetaEarth.',
      eventCategory: EventCategory.Educational,
      isEventFree: true,
      isEventOffline: false,
      eventOnlineUrl: 'https://meet.google.com/?authuser=0',
      eventCapacity: '100',
    },
    {
      eventName: 'Octoberfest In Georgia',
      eventDescription:
        'If you find yourself in the north Georgia mountains we have Octoberfest running in Helen Georgia... ',
      eventCategory: EventCategory.Entertainment,
      isEventFree: false,
      eventPrice: '20',
      isEventOffline: true,
      eventLocation: {
        lat: 41.7095428,
        lng: 44.8029969,
      },
      eventCapacity: '30',
    },
  ];
  return (
    <div className="w-[90%] mx-[5%] flex flex-col justify-center text-base">
      <SearchBar
        searchString={searchString}
        setSearchString={setSearchString}
        wrapperStyles="!mt-5 !w-full"
        placeholder="Search for the event by name"
      />

      <div className="flex flex-col gap-y-5 mt-5">
        {data &&
          data
            .filter((e) => {
              return e.eventName
                .toLowerCase()
                .includes(searchString.toLowerCase());
            })
            .map((entry: EventProps) => <EventEntry event={entry} />)}
      </div>
    </div>
  );
};
