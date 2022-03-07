export const idlFactory = ({ IDL }) => {
  const TokenId = IDL.Nat;
  const DRC721 = IDL.Service({
    'approve' : IDL.Func([IDL.Principal, TokenId], [], []),
    'balanceOf' : IDL.Func([IDL.Principal], [IDL.Opt(IDL.Nat)], []),
    'getApproved' : IDL.Func([IDL.Nat], [IDL.Principal], []),
    'isApprovedForAll' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Bool],
        [],
      ),
    'mint' : IDL.Func([IDL.Text], [IDL.Nat], []),
    'mint_principal' : IDL.Func([IDL.Text, IDL.Principal], [IDL.Nat], []),
    'name' : IDL.Func([], [IDL.Text], ['query']),
    'ownerOf' : IDL.Func([TokenId], [IDL.Opt(IDL.Principal)], []),
    'setApprovalForAll' : IDL.Func([IDL.Principal, IDL.Bool], [], ['oneway']),
    'symbol' : IDL.Func([], [IDL.Text], ['query']),
    'tokenURI' : IDL.Func([TokenId], [IDL.Opt(IDL.Text)], ['query']),
    'transferFrom' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat],
        [],
        ['oneway'],
      ),
  });
  return DRC721;
};
export const init = ({ IDL }) => { return [IDL.Text, IDL.Text]; };
