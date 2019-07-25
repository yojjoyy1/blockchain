const Blockchain = require('./Blockchain');

const chain = new Blockchain()
const bc1 = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1563988677422,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1563988690503,
    "transactions": [],
    "nonce": 18140,
    "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1563988781160,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "fb0226c0ae3611e981989dfad16e7796",
    "transactionId": "02d50520ae3711e981989dfad16e7796"
    },
    {
    "amount": 5000,
    "sender": "gdfg",
    "recipient": "asgdsgd"
    }
    ],
    "nonce": 73092,
    "hash": "00003d36fb6743b11655c14409e6d2c067bd1fa24ba65be046b475532e68fef3",
    "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    "index": 4,
    "timestamp": 1563988900307,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "fb0226c0ae3611e981989dfad16e7796",
    "transactionId": "38d83ac0ae3711e981989dfad16e7796"
    },
    {
    "amount": 10,
    "sender": "gdddd",
    "recipient": "vvvvv"
    },
    {
    "amount": 1065,
    "sender": "gdsssddd",
    "recipient": "vsvvvv"
    }
    ],
    "nonce": 73344,
    "hash": "0000c15fe39e579277ee6a8456341cb98762f3205e8757f04fcb956ad581b7f5",
    "previousBlockHash": "00003d36fb6743b11655c14409e6d2c067bd1fa24ba65be046b475532e68fef3"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "fb0226c0ae3611e981989dfad16e7796",
    "transactionId": "7fdc9e70ae3711e981989dfad16e7796"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    };
console.log("Valid: " + chain.chainIsValid(bc1.chain));