import axios from 'axios';
import { SERVER_ROUTES, SERVER_URL } from './api.config';

interface RequestObjectProps {
  userName: string;
  email: string;
  password: string;
}

export const loginUser = async (requestObject: RequestObjectProps) =>
  (await axios.post(`${SERVER_URL}${SERVER_ROUTES.LOGIN}`, requestObject)).data;
