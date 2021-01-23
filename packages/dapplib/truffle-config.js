require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food now radar soap under coral light army genre'; 
let testAccounts = [
"0x45e4fb368649f57ab4bc6b45cff8098d48e5b32a4b867954c6d951d48bd4688f",
"0x3b9a7d7ca7f051b1fe217cf0b0232eec0d2215a22fa0419d79cbce8ee615ef8e",
"0x57230e15ce8e3a48f05132290e9bfba6d60fe5b0f8055983b8141fa4d6938911",
"0xe29fb60f7a7099dcd27b30515132e7509bc853fbe27d11cde66db92d1669e524",
"0xead7f048739d5171fd4f18848483c8d42c08a42397630f2945c7a71af8c0f65d",
"0x2cffb45c6975363cb7ba4279e8a92e375315fdda1a5aebe0f76c4129ae17f153",
"0x5874faa43215fab5c981decbc2e6056afe19678008a175565564961c8b12f7fd",
"0xcaccee9ff924b6a106c40675c9f1b5d0a313ac0a88ea8ab862f69e72c9bccb0b",
"0x63d4c3cd8426c43db99d32f33628e522e0779cde1610bca15c3856eeafe6c5af",
"0x1a4cb4be72963ce8f057fce0b2158506c4f231c45550328eb89f662636a3c0ff"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
