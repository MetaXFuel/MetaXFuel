# MetaXFuel (MXF) Project

MetaXFuel (MXF) is a gasless transaction system built for Ethereum using **ERC-20 tokens** to pay for transaction fees instead of ETH. This project leverages **EIP-4337** (Account Abstraction) to allow users to make transactions without needing ETH for gas, utilizing the **MetaXFuel (MXF)** token instead.

## Features

- Pay for gas using **MetaXFuel (MXF)** token, eliminating the need for ETH.
- Built with **EIP-4337** for gasless transactions and account abstraction.
- Compatible with Ethereum mainnet and testnets (e.g., Ropsten, Rinkeby).
- **ERC-20** standard for MetaXFuel (MXF) token.

## Requirements

- **Node.js** (>=14.x)
- **Hardhat** (for smart contract development and deployment)
- **TypeScript** (optional, if you want better developer experience)
- **Infura** or other Ethereum RPC provider (for deployment and interaction with the network)

## Installation

Follow the steps below to set up the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/meta-x-fuel.git
    cd meta-x-fuel
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Copy `.env.example` to `.env`:
      ```bash
      cp .env.example .env
      ```
    - Replace the placeholders in the `.env` file with your actual values (e.g., Infura API key, private key, etc.).

4. Compile the smart contracts:
    ```bash
    npx hardhat compile
    ```

5. Deploy the MetaXFuel (MXF) Token contract:
    ```bash
    npx hardhat run scripts/deployToken.ts --network ropsten
    ```

6. Deploy the EntryPoint contract (if using gasless transactions via EIP-4337):
    ```bash
    npx hardhat run scripts/deployEntryPoint.ts --network ropsten
    ```

## How It Works

MetaXFuel (MXF) is an ERC-20 token that can be used as a replacement for ETH when paying for transaction gas fees. By integrating **EIP-4337** and leveraging **account abstraction**, users can interact with Ethereum smart contracts and pay the associated gas fees in MXF, without the need to hold any ETH.

- **MXF Token**: The MetaXFuel token is the ERC-20 token that users can hold and use to pay for gas fees.
- **EntryPoint Contract**: A special contract that facilitates gasless transactions by allowing users to interact with the blockchain using MXF tokens.

## Usage

After deploying the smart contracts, users can interact with your DApp or backend services to make transactions using the MetaXFuel (MXF) token.

- **Users**: Simply send their MXF tokens to cover gas fees instead of holding ETH.
- **DApp**: Interact with the deployed contracts and integrate the gasless features.

To send gasless transactions in your application:
1. Ensure users have MXF tokens in their wallets.
2. Set up smart contract interactions where MXF is used for gas payments.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or contributions, feel free to reach out to [Your Name or Email].

---

### **Example Transaction (Using MetaXFuel)**

To make a transaction using MetaXFuel (MXF) tokens instead of ETH, follow these steps:

1. Ensure the user has MXF tokens in their wallet.
2. Interact with the smart contract, passing the MXF token as the gas payment.
3. The system will handle the transaction as normal, but the gas fees will be paid in MXF tokens rather than ETH.

## Contributing

We welcome contributions to improve MetaXFuel (MXF) and expand its features! Here’s how you can help:

1. Fork the repository and clone it locally.
2. Create a new branch for your feature or bug fix.
3. Make your changes and add tests if needed.
4. Submit a pull request for review.

---

This **MetaXFuel (MXF)** project provides a novel approach to gasless transactions and opens up new possibilities for Ethereum-based applications. We hope this framework makes Ethereum transactions more accessible by removing the need for ETH to cover gas costs.

Thank you for your interest in the MetaXFuel project!

