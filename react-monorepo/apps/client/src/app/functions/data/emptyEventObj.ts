import { EventCategory, EventProps } from '../../types';

export const emptyEventObj: EventProps = {
  eventName: '',
  eventDescription: '',
  eventCapacity: '0',
  eventCategory: EventCategory.None,
  isEventFree: true,
  isEventOffline: false,
};
