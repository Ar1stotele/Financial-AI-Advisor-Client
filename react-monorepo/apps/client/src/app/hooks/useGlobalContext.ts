import { useContext } from 'react';
import GlobalContext from '../store/GlobalStore';

export const useGlobalContext = () => useContext(GlobalContext);
