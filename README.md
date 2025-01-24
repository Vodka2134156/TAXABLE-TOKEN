# TON Taxable Jetton Contract

This repository contains a **TON smart contract** designed for **educational purposes**. It is an edited version of the original **TON Jetton Contract**, specifically modifying the **Jetton Wallet** to include a taxation mechanism for jetton transactions. Each transaction automatically sends a tax to a predefined wallet.

## Features
- Fully functional **Jetton contract** for the TON blockchain.
- Edited **Jetton Wallet** to implement a **tax mechanism**:
  - A percentage of every transfer is automatically sent to a predefined tax wallet.
- Designed for **learning purposes**, showcasing how to manipulate and extend existing TON contracts.

## How It Works
1. **Jetton Transfers**:
   - Users can transfer jettons between wallets as with the standard Jetton contract.

2. **Modified Jetton Wallet**:
   - The **Jetton Wallet** contract has been edited to calculate a **tax percentage** during each transfer.
   - The calculated tax amount is automatically sent to the **tax wallet**.

3. **Transaction Example**:
   - Here's an example of a transaction demonstrating the functionality:  
     [Transaction on TonViewer](https://tonviewer.com/transaction/61d1dcffabf51452e9ac882bcac4447db7079f9379ce970549771c976dc44a62)

4. **Predefined Wallet**:
   - The tax wallet address is either hardcoded or configurable within the contract.

## Use Cases
This project is intended to help developers:
- Understand and modify TON smart contracts.
- Learn how to implement custom functionality in **Jetton Wallets**.
- Explore advanced Jetton functionality, including tax mechanisms.

## Deployment
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/taxable-jetton-contract.git
   cd taxable-jetton-contract
