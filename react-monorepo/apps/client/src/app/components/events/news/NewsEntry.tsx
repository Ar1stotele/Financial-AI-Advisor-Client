import { RssFeedResponse } from '../../../types';

interface NewsEntryProps {
  newsData: RssFeedResponse;
}

export const NewsEntry = ({ newsData }: NewsEntryProps) => {
  return (
    <div className="text-base border-[1px] border-black border-solid p-2">
      <div className="flex gap-x-2">
        <span className="min-w-[150px]">Title:</span>
        <span>{newsData.title}</span>
      </div>
      <div className="flex gap-x-2">
        <span className="min-w-[150px]">Summary:</span>
        <span>{newsData.summary}</span>
      </div>
      {newsData?.author && newsData?.author.toLowerCase() !== 'unknown' && (
        <div className="flex gap-x-2">
          <span className="min-w-[150px]">Author:</span>
          <span>{newsData.author}</span>
        </div>
      )}
      <div className="flex gap-x-2">
        <span className="min-w-[150px]">Source link:</span>
        <a
          href={newsData.link}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Go to the link
        </a>
      </div>
    </div>
  );
};
