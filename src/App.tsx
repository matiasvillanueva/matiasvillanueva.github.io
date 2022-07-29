import { useClaimedNFTSupply, useContractMetadata, useNFTDrop, useUnclaimedNFTSupply, useAddress, useMetamask, useClaimConditions, useClaimIneligibilityReasons, ChainId } from "@thirdweb-dev/react";

const contractAddress =  "0x7273EC3092b7F52BcBD84AcC58668Da456c07d26";

function App() {

  const contract = useNFTDrop(contractAddress);

  const address = useAddress();
  const connectMetamask = useMetamask();

  const { data : contractMetadata } = useContractMetadata(contractAddress);
  const { data: mintSupply } = useClaimedNFTSupply(contract);
  const { data: unMintSupply } = useUnclaimedNFTSupply(contract);
  // Not implemented. But this is how you can get the claim conditions.
  //const { data: claimConditions } = useClaimConditions(contract);
  //const { data: claimIneligibilityReasons } = useClaimIneligibilityReasons(contract, {quantity: 1, walletAddress: address});

  const mint =async () => {
    try {
      await contract?.claim(1);
      alert("Successfully minted 1 NFT");
    } catch (error) {
      alert("Error minting NFT. Can not mint more than one NFT per day or more than one than supply");
    } 
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col p-6 md:p-12">
      <header className="flex flex-col items-center justify-center p-6 md:p-12">
        <h1 className="text-2xl font-bold text-secondary">
            {contractMetadata?.name}
        </h1>
      </header>
      <main className="grid gap-6 rounded-md bg-black/20 p-6 md:grid-cols-2 md:p-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <p className="text-center leading-relaxed">
            {contractMetadata?.description}
          </p>
          <p className="text-center leading-relaxed">
            Contract address 0x7273EC3092b7F52BcBD84AcC58668Da456c07d26
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex w-full max-w-sm flex-col space-y-4">
            <div className="aspect-square w-full overflow-hidden rounded-md">
              <img className="aspect-square object-cover" src={contractMetadata?.image} />
            </div>

            <div className="flex max-w-sm justify-between">
              <p>Total Minted</p>
              <p>{mintSupply?.toNumber()} / {(unMintSupply?.toNumber() || 0) + (mintSupply?.toNumber() || 0 )}</p>
            </div>
            { address && (
              <div className="flex justify-center">
                <button className="rounded-full bg-primary px-6 py-2 text-white hover:bg-opacity-75" onClick={mint}>
                  Mint
                </button>
              </div>
            )}
            { !address && (
              <div className="flex justify-center">
                <button className="rounded-full bg-primary px-6 py-2 text-white hover:bg-opacity-75" onClick={connectMetamask}>
                  Connect Wallet
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center space-x-2 p-6">
        <p className="text-sm"></p>
      </footer>
    </div>
  );
}

export default App;
