import { Point } from './google-maps.types';

export enum EventsOptions {
  AllEvents = 'All Events',
  CreateEvent = 'Create Event',
  News = 'News',
}

export enum EventCategory {
  None = 'None',
  Educational = 'Educational',
  Entertainment = 'Entertainment',
}

export interface EventProps {
  eventName: string;
  eventDescription: string;
  eventCategory: EventCategory;
  eventCapacity: string;
  isEventOffline: boolean;
  isEventFree: boolean;
  eventPrice?: string;
  eventLocation?: Point;
  eventOnlineUrl?: string;
}
