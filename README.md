# ERC-20-Transfer-Events
A function that returns transfer events from ERC-20 token smart contracts without the need of third party API. Straight from the blockchain!

<img src="https://raw.githubusercontent.com/net2devcrypto/misc/main/erc-20-events.png" width="980" height="560">

> [!NOTE]  
> THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY.
> NOT FINANCIAL ADVICE
> USE IT AT YOUR OWN RISK, I'M NOT RESPONSIBLE FOR ANY USE, ISSUES.


<h4>Instructions</h4>

1- Download Repo folder "erc20-transfer-events", extract, open events.js and modify as you need:

```shell
//Replace with values, save and run!
const rpcaddress = "https://eth.llamarpc.com" //RPC ADDRESS, Example ETH Mainnet RPC Address.
const tokenaddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; // TOKEN ADDRESS, Example USDT Address on Ethereum Mainnet.
const lastNumberOfBlocks = 5; //Most recent amount of blocks to Get Event Info. You might have limitations going above 100.
const converted = "mwei"; // Value conversion wei 18, mwei 6, gwei 10, Verify with token contract decimals.
```
Save file CTRL + S;

2- Install dependencies then run!

```shell
cd erc20-transfer-events
npm i
node events.js
```

ENJOY!!

A BIG FAVOR, IF YOU FIND THIS REPO USEFULL, PLEASE GIVE IT A STAR, FOLLOW ME ON GITHUB AND Subscribe to my YouTube Channel @NET2DEV!!
