import { useState } from 'react';
import { PageWrapper, TabWrapper, ToggleBtn } from '../components/ui';
import { EventsOptions } from '../types';
import { AllEvents } from '../components/events/all-events/AllEvents';
import { CreateEvent } from '../components/events/create-event/CreateEvent';

export const Events = () => {
  const [selectedEventsTab, setSelectedEventTab] = useState(
    EventsOptions.AllEvents
  );

  return (
    <PageWrapper>
      Events
      <TabWrapper wrapperClassName="!pt-2">
        <div>
          <ToggleBtn
            selectedOption={selectedEventsTab}
            setSelectedOption={setSelectedEventTab}
            toggleOptions={EventsOptions}
          />
        </div>
        {selectedEventsTab === EventsOptions.AllEvents && <AllEvents />}
        {selectedEventsTab === EventsOptions.CreateEvent && <CreateEvent />}
      </TabWrapper>
    </PageWrapper>
  );
};
