import { Dispatch, ReactNode, createContext, useState } from 'react';
import { EventProps } from '../types';
import { emptyEventObj } from '../functions/data/emptyEventObj';

interface GlobalContextProps {
  selectedEventPage: EventProps;

  setSelectedEventPage: Dispatch<EventProps>;
}

interface GlobalContextProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext<GlobalContextProps>({
  selectedEventPage: emptyEventObj,

  setSelectedEventPage: (eventPage: EventProps | null) => undefined,
});

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [selectedEventPage, setSelectedEventPage] = useState(emptyEventObj);

  return (
    <GlobalContext.Provider value={{ selectedEventPage, setSelectedEventPage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
