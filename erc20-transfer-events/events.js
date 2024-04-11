process.removeAllListeners('warning');
const ABI = require('./abi.json');
const { Web3 } = require('web3');
const { ethers } = require('ethers');
let banner = `
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▀█ ▄▄█▄ ▄█ ▄ █ ▄▀█ ▄▄█▀███▀
█ ██ █ ▄▄██ ███▀▄█ █ █ ▄▄██ ▀ █
█▄██▄█▄▄▄██▄██ ▀▀█▄▄██▄▄▄███▄██
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
`
/*
Follow/Subscribe Youtube + Github
for more amazing content!!
@Net2Dev
███╗░░██╗███████╗████████╗██████╗░██████╗░███████╗██╗░░░██╗
████╗░██║██╔════╝╚══██╔══╝╚════██╗██╔══██╗██╔════╝██║░░░██║
██╔██╗██║█████╗░░░░░██║░░░░░███╔═╝██║░░██║█████╗░░╚██╗░██╔╝
██║╚████║██╔══╝░░░░░██║░░░██╔══╝░░██║░░██║██╔══╝░░░╚████╔╝░
██║░╚███║███████╗░░░██║░░░███████╗██████╔╝███████╗░░╚██╔╝░░
╚═╝░░╚══╝╚══════╝░░░╚═╝░░░╚══════╝╚═════╝░╚══════╝░░░╚═╝░░░
Fetch ERC-20 Token Transfers!
*/

//Replace with values, save and run!
const rpcaddress = "https://eth.llamarpc.com" //RPC ADDRESS 
const tokenaddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; // TOKEN ADDRESS
const lastNumberOfBlocks = 5; //Last Number of Blocks to Get Event Info
const converted = "mwei"; // Value conversion wei 18, mwei 6, gwei 10

const web3 = new Web3(rpcaddress);
const getFaucetEvents = async () => {
    let current = Number(((await web3.eth.getBlockNumber()).toString()).replace('n', ''));
    const contract = new web3.eth.Contract(ABI, tokenaddress);
    const from = current - lastNumberOfBlocks;
    let events = await contract.getPastEvents('Transfer', {
        //filter: {from: account},
        fromBlock: from,
        toBlock: 'latest'
    }).then(function (events) {
        return events;
    }).catch(function (error) {
    console.error(error)});
    let eventArray = [];
    for (let i = 0; i < events.length; i++){
        let blocknum = ((events[i].blockNumber).toString()).replace('n', '');
        let value = ((events[i].returnValues.value).toString()).replace('n', '');
        let data = {
            block: blocknum,
            from: events[i].returnValues.from,
            to: events[i].returnValues.to,
            value: value
        }
        eventArray.push(data);
    }
    let arrayOut = eventArray.reverse();
    console.log('');
    console.log(banner);
    console.log(` FROM                                        TO                                          QUANTITY `)
    console.log(` -------------------------------------------------------------------------------------------------`)
    for (let i = 0; i < arrayOut.length; i++){
        let value;
        if (converted == 'wei'){
            value = ethers.utils.formatEther(arrayOut[i].value);
        }
        else if (converted == 'mwei'){
            value = ethers.utils.formatUnits(Number(arrayOut[i].value), converted);
        }
        console.log(` ${arrayOut[i].from}  ${arrayOut[i].to}  ${value} `)
    }
    console.log('')
}



getFaucetEvents()