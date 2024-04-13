import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Aptos,
  AptosConfig,
  Network,
  Secp256k1PrivateKey,
  AccountAddress,
  Account,
} from "@aptos-labs/ts-sdk";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function ab() {
      const config = new AptosConfig({ network: Network.DEVNET });
      const aptosClient = new Aptos(config);
      const privateKey = new Secp256k1PrivateKey(
        "0xd44880bf8180e8b70cb116da16cdbe813262bca2f7f2ddfdb252cd69020c8c1f"
      );

      const CONTRACT_ADDRESS =
        "0xcbc8b8d91dcbd4b404d0627d249ce86fcff0991be851b53c7f69b940fefd6125";
      const MODULE = "splitrix";
      let method = "get_groups";
      const account = await Account.fromPrivateKey({ privateKey });

      const address = AccountAddress.from(
        "cbc8b8d91dcbd4b404d0627d249ce86fcff0991be851b53c7f69b940fefd6125"
      );

      console.log(address, privateKey);

      const response = await aptosClient.view({payload:{
        function: `${CONTRACT_ADDRESS}::${MODULE}::${method}`,
        functionArguments: [address],
      }});

    }
    ab();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
