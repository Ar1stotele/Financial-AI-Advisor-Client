import { useEffect } from 'react';
import { parseEther } from 'viem';
import { useAccount, useConnect, useEnsName, useSendTransaction } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

interface ConnectWalletAndTransactProps {
  ethAmount: string;
  receiverAddress: string;
  getResult: (data: { hash: string } | undefined, isSuccess: boolean) => void;
}

export const ConnectWalletAndTransact = ({
  ethAmount,
  receiverAddress,
  getResult,
}: ConnectWalletAndTransactProps) => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    to: receiverAddress,
    value: parseEther(ethAmount),
  });


  useEffect(() => {
    getResult(data, isSuccess);
  }, [isSuccess, data, getResult]);

  if (isConnected)
    return (
      <div>
        <div className="text-base bg-blue-500 p-5 rounded-lg mt-5">
          Connected to {ensName ?? address}
        </div>

        <div>
          {!isLoading && !isSuccess && (
            <button
              className="bg-blue-500 p-5 rounded-lg mt-5"
              onClick={() => sendTransaction()}
            >
              Send Transaction
            </button>
          )}
          {isLoading && (
            <div className="bg-blue-500 p-5 rounded-lg mt-5">Check Wallet</div>
          )}
          {isSuccess && (
            <div className="bg-blue-500 p-5 rounded-lg mt-5">
              Transaction: {JSON.stringify(data)}
            </div>
          )}
        </div>
      </div>
    );
  return (
    <button
      className="bg-blue-500 p-5 rounded-lg mt-5"
      onClick={() => connect()}
    >
      Connect Wallet
    </button>
  );
};
