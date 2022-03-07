# Motoko bootcamp : NFT minter. 

Basic NFT minter inspired by the DIP 721 standard (implementation not guarantee, consider this example as an educational ressource. For a production project with DIP721, please take a look at the official DIP721 repo).

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Install dependencies
npm run start

# Starts the replica
dfx start 

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:8000?canisterId={asset_canister_id}`.
Additionally, if you are making frontend changes, you can start a development server with
```bash
npm start
```


Thanks to https://github.com/torates/testMinter for the inspiration.
