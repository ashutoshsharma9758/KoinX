KoinX Crypto Transactions API

This project is a server-side application built using Node.js that allows users to fetch their Ethereum transactions and calculate their total expenses. The application also fetches the current price of Ethereum every 10 minutes and stores it in the database.

Technologies Used
Node.js: Backend framework.
Express: Web framework for building APIs.
MongoDB: Database to store transactions and Ethereum prices.
Cron Jobs: For scheduling tasks (fetching Ethereum prices every 10 minutes).
Etherscan API: To fetch Ethereum transactions.
CoinGecko API: To fetch the current Ethereum price.

Features
Fetch Crypto Transactions: Use the Etherscan API to fetch normal transactions for a given Ethereum address.
Calculate Total Expenses: Calculates the total expenses based on gas fees for all transactions made from an Ethereum address.
Fetch Ethereum Price: Periodically fetches Ethereum price every 10 minutes using the CoinGecko API.
MongoDB Integration: Stores Ethereum prices and transactions in MongoDB.
RESTful API: Expose API endpoints to interact with the server.

Installation and Setup
Prerequisites
Node.js (>=14.x)
MongoDB (Local or MongoDB Atlas)
Etherscan API Key (you can generate one here)
CoinGecko API (used directly in the project, no API key required)

Steps to Setup

Clone the repository:
git clone https://github.com/ashutoshsharma9758/KoinX.git
cd KoinX

Install dependencies:
npm install

Run the project:
node app.js

The server will start on http://localhost:8080.

API Endpoints
1. Fetch Ethereum Transactions
Endpoint: /api/transactions/:address
Method: GET
Description: Fetches a list of Ethereum transactions for a given address.
Example:
GET /api/transactions/0xce94e5621a5f7068253c42558c147480f38b5e0d

3. Get Total Expenses and Ethereum Price
Endpoint: /api/expenses/:address
Method: GET
Description: Fetches the total gas expenses for a given address and returns the latest Ethereum price.
Example:
GET /api/expenses/0xce94e5621a5f7068253c42558c147480f38b5e0d

5. Fetch Latest Ethereum Price (Every 10 Minutes)
Cron Job: Runs every 10 minutes to fetch the latest Ethereum price from the CoinGecko API and stores it in the database.

Acknowledgements
Thank you for taking the time to review my code. Happy coding!
