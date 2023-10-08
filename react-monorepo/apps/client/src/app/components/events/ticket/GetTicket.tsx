import { useState } from 'react';
import QRCode from 'react-qr-code';
import { SubmitBtn } from '../../ui';

interface GetTicketProps {
  value: string;
}

export const GetTicket = ({ value }: GetTicketProps) => {
  const [showQrCode, setShowQrCode] = useState(false);
  return (
    <div className="w-full bg-blue-400 flex">
      {!showQrCode && (
        <SubmitBtn
          btnClassName="!w-[100%] flex-1"
          btnName="Show QR code"
          btnAction={() => {
            setShowQrCode(true);
          }}
        />
      )}
      {showQrCode && (
        <div
          style={{
            height: 'auto',
            margin: '0 auto',
            maxWidth: 64,
            width: '100%',
          }}
        >
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={value}
            viewBox={`0 0 256 256`}
          />
        </div>
      )}
    </div>
  );
};
