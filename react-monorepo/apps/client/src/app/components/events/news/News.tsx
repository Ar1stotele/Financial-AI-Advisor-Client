import { RssFeedResponse } from '../../../types';
import { NewsEntry } from './NewsEntry';

export const News = () => {
  const newsData: RssFeedResponse[] = [
    {
      id: '1',
      link: '1',
      title: '1',
      summary: '1',
      author: '1',
      publishedId: 0,
    },
    {
      id: '2',
      link: 'https://www.wikipedia.org/',
      title: 'Wikipedia',
      summary:
        'Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other projects.',
    },
    {
      id: '2',
      link: 'https://meet.google.com/?authuser=0',
      title: 'Google meet',
      summary:
        'Initially, this product was created as a secure video conferencing service for business. ',
    },
    {
      id: '3',
      link: 'dummy',
      title: 'Dummy',
      summary:
        'Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other projects.',
      author: 'Dummy',
    },
  ];
  return (
    <div className="w-[90%] mx-[5%] flex flex-col gap-y-4 py-4 mt-4">
      {newsData.length > 0 &&
        newsData.map((newsEntryData: RssFeedResponse) => {
          return <NewsEntry key={newsEntryData.id} newsData={newsEntryData} />;
        })}
    </div>
  );
};
