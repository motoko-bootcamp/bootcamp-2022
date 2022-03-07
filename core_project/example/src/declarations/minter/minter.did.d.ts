import type { Principal } from '@dfinity/principal';
export interface DRC721 {
  'approve' : (arg_0: Principal, arg_1: TokenId) => Promise<undefined>,
  'balanceOf' : (arg_0: Principal) => Promise<[] | [bigint]>,
  'getApproved' : (arg_0: bigint) => Promise<Principal>,
  'isApprovedForAll' : (arg_0: Principal, arg_1: Principal) => Promise<boolean>,
  'mint' : (arg_0: string) => Promise<bigint>,
  'mint_principal' : (arg_0: string, arg_1: Principal) => Promise<bigint>,
  'name' : () => Promise<string>,
  'ownerOf' : (arg_0: TokenId) => Promise<[] | [Principal]>,
  'setApprovalForAll' : (arg_0: Principal, arg_1: boolean) => Promise<
      undefined
    >,
  'symbol' : () => Promise<string>,
  'tokenURI' : (arg_0: TokenId) => Promise<[] | [string]>,
  'transferFrom' : (
      arg_0: Principal,
      arg_1: Principal,
      arg_2: bigint,
    ) => Promise<undefined>,
}
export type TokenId = bigint;
export interface _SERVICE extends DRC721 {}
