import { Address, toNano } from '@ton/core';
import { SampleJetton } from '../wrappers/SampleJetton';
import { NetworkProvider } from '@ton/blueprint';
import { buildOnchainMetadata } from '../utils/jetton-helpers';

export async function run(provider: NetworkProvider) {
    const jettonParams = {
        name: "Tax 1.0",
        description: "Tax Token that taxes every transaction on Ton from adam",
        symbol: "TaxToken V1",
        image: "https://i.postimg.cc/SQD3Mr61/taxes-g302c33369-640.jpg",
    };

    // Create content Cell
    let content = buildOnchainMetadata(jettonParams);
    // set Tax address here 
    let taxAdress = Address.parse("UQDJAyNR0YwP-ewuhqJ7wFDUNrvCNANvD7ZrqJlcGLFpQuQr")

    const sampleJetton = provider.open(await SampleJetton.fromInit(provider.sender().address as Address, content, 1000000000000000000n, taxAdress as Address));

    await sampleJetton.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Mint',
            amount: 100000000000000000n,
            receiver: provider.sender().address as Address
        }
    );

    await provider.waitForDeploy(sampleJetton.address);

    // run methods on `sampleJetton`
}
