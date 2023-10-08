import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
        },
      },
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      accounts: [
        {
          privateKey: process.env?.["ACCOUNT_ONE_PRIVATE_KEY"],
          balance: "10000000000000000000000",
        },
      ],
      forking: {
        url: process.env?.["INFURA_API_KEY"],
        blockNumber: 18304231,
      },
    },
  },
};

export default config;
