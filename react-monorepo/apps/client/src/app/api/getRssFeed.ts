import axios from 'axios';
import { SERVER_ROUTES, SERVER_URL } from './api.config';
import { RssFeedResponse } from '../types';

export const getRssFeed = async (): Promise<RssFeedResponse> =>
  (await axios.get(`${SERVER_URL}${SERVER_ROUTES.RSS_FEED}`)).data;
