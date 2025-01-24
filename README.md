# TON Taxable Jetton Contract

This repository contains a **TON smart contract** designed for **educational purposes**. It is an edited version of the original **TON Jetton Contract**, modified to implement a **taxation mechanism** for jetton transfers. Each transaction automatically sends a tax to a predefined wallet.

## Features
- Fully functional **Jetton contract** for the TON blockchain.
- Implements a **tax mechanism** where a percentage of every transaction is automatically sent to a specified tax wallet.
- Designed for **learning purposes**, showcasing how to manipulate and extend existing TON contracts.

## How It Works
1. **Jetton Transfers**:
   - Users can transfer jettons between wallets as with a standard jetton contract.
   
2. **Tax Mechanism**:
   - During each transfer, the contract calculates a predefined **tax percentage**.
   - The calculated tax amount is automatically sent to the **tax wallet**.

3. **Predefined Wallet**:
   - The tax wallet address is hardcoded or configurable within the contract.

## Use Cases
This project is intended to help developers:
- Understand and modify TON smart contracts.
- Learn how to integrate additional features like taxes into existing contracts.
- Explore advanced Jetton functionality.

## Deployment
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/taxable-jetton-contract.git
   cd taxable-jetton-contract
