import React from 'react';
import { Web3Button } from './web3button';

export const Navigation = () => {
  return(
      <nav className="header">
        <div>
          <h1>UMA LSP</h1>
        </div>
        <div>
          <Web3Button />
        </div>
      </nav>
  );
};
