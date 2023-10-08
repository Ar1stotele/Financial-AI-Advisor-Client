import axios from 'axios';
import { SERVER_ROUTES, SERVER_URL } from './api.config';

export const getRssFeed = async () =>
  (await axios.get(`${SERVER_URL}${SERVER_ROUTES.RSS_FEED}`)).data;
