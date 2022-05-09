const workerpool = require('workerpool');
const { Wallet } = require('ethers');

function brute() {
    let loops = 0;

    const cTs = new Date();

    let phrase;
    let address;
    while (true) {
        loops++;

        phrase = Wallet.createRandom().mnemonic.phrase;
        address = Wallet.fromMnemonic(phrase).address;

        // Start adding conditions here

        if (address.startsWith('0x0')) break;
    }

    return {
        phrase,
        address,

        loops,
        seconds: (new Date() - cTs) / 1000,
    }
}

workerpool.worker({
    brute
});