import { AminoMsg } from 'skud-client-base/lib/cosmjs/amino/signdoc';
import { StdFee } from 'skud-client-base/lib/cosmjs/stargate';

export type PubKeys = {
    activeCommitteeKey: string;
    activeCommitterKey: string;
};


export type Fees = {
    platform: {
        format: 'percent';
        Amount: number;
        Currency: string;
    };
    condition: {
        format: 'percent';
        Amount: number;
        Currency: string;
    };
};

export type SignArgs = {
    signerAddress: string;
    creatorAddress?: string;
    chainUrl: string;
    chainId: string;
    payload: readonly AminoMsg[];
    sigParams?: {
        fees?: StdFee;
        gas?: string;
        memo?: string;
    };
};
