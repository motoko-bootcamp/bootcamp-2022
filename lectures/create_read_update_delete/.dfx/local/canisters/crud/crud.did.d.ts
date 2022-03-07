import type { Principal } from '@dfinity/principal';
export interface Profile {
  'age' : bigint,
  'registration_date' : Time,
  'premium' : boolean,
  'name' : string,
}
export type Result = { 'ok' : string } |
  { 'err' : string };
export type Result_1 = { 'ok' : null } |
  { 'err' : string };
export type Time = bigint;
export interface _SERVICE {
  'create_profile' : (arg_0: Profile) => Promise<undefined>,
  'delete_profile' : (arg_0: Principal) => Promise<Result_1>,
  'read_profile' : (arg_0: Principal) => Promise<[] | [Profile]>,
  'test' : () => Promise<string>,
  'update_profile' : (arg_0: Profile) => Promise<Result>,
}
