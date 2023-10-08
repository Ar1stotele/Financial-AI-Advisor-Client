import { useEffect, useState } from 'react';
import { RssFeedResponse } from '../../../types';
import { NewsEntry } from './NewsEntry';
import { getRssFeed } from '../../../api/getRssFeed';

export const News = () => {
  const [newsData, setNewsData] = useState<RssFeedResponse[]>([]);

  useEffect(() => {
    const run = async () => {
      const response = await getRssFeed();
      setNewsData(response.payload.feedItems);
    };

    run();
  }, []);

  return (
    <div className="w-[90%] mx-[5%] flex flex-col gap-y-4 py-4 mt-4">
      {newsData.length > 0 &&
        newsData.map((newsEntryData: RssFeedResponse) => {
          return <NewsEntry key={newsEntryData.id} newsData={newsEntryData} />;
        })}
    </div>
  );
};
