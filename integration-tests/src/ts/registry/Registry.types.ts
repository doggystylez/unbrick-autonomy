/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.17.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export type AssetInfo =
  | {
      token: {
        contract_addr: Addr;
        [k: string]: unknown;
      };
    }
  | {
      native_token: {
        denom: string;
        [k: string]: unknown;
      };
    };
export type Addr = string;
export type Uint128 = string;
export interface Config {
  auto: AssetInfo;
  blocks_in_epoch: number;
  fee_amount: Uint128;
  fee_denom: string;
  owner: Addr;
  stake_amount: Uint128;
  [k: string]: unknown;
}
export interface CreateOrUpdateConfig {
  auto?: AssetInfo | null;
  blocks_in_epoch?: number | null;
  fee_amount?: Uint128 | null;
  fee_denom?: string | null;
  owner?: string | null;
  stake_amount?: Uint128 | null;
  [k: string]: unknown;
}
export type Binary = string;
export interface CreateRequestInfo {
  input_asset: Asset;
  msg: Binary;
  target: string;
  [k: string]: unknown;
}
export interface Asset {
  amount: Uint128;
  info: AssetInfo;
  [k: string]: unknown;
}
export interface EpochInfoResponse {
  cur_epoch: number;
  executor: string;
  last_epoch: number;
  [k: string]: unknown;
}
export type ExecuteMsg =
  | {
      update_config: {
        config: CreateOrUpdateConfig;
        [k: string]: unknown;
      };
    }
  | {
      create_request: {
        request_info: CreateRequestInfo;
        [k: string]: unknown;
      };
    }
  | {
      cancel_request: {
        id: number;
        [k: string]: unknown;
      };
    }
  | {
      execute_request: {
        id: number;
        [k: string]: unknown;
      };
    }
  | {
      receive: Cw20ReceiveMsg;
    }
  | {
      stake_denom: {
        num_stakes: number;
        [k: string]: unknown;
      };
    }
  | {
      unstake: {
        idxs: number[];
        [k: string]: unknown;
      };
    }
  | {
      update_executor: {
        [k: string]: unknown;
      };
    };
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
}
export interface InstantiateMsg {
  config: CreateOrUpdateConfig;
  [k: string]: unknown;
}
export type QueryMsg =
  | {
      config: {
        [k: string]: unknown;
      };
    }
  | {
      state: {
        [k: string]: unknown;
      };
    }
  | {
      request_info: {
        id: number;
        [k: string]: unknown;
      };
    }
  | {
      requests: {
        limit?: number | null;
        order_by?: OrderBy | null;
        start_after?: number | null;
        [k: string]: unknown;
      };
    }
  | {
      epoch_info: {
        [k: string]: unknown;
      };
    }
  | {
      stake_amount: {
        user: string;
        [k: string]: unknown;
      };
    }
  | {
      stakes: {
        limit: number;
        start: number;
        [k: string]: unknown;
      };
    };
export type OrderBy = "asc" | "desc";
export interface RequestInfoResponse {
  id: number;
  request: Request;
  [k: string]: unknown;
}
export interface Request {
  created_at: number;
  executor: string;
  input_asset: Asset;
  msg: Binary;
  target: string;
  user: string;
  [k: string]: unknown;
}
export interface RequestsResponse {
  requests: RequestInfoResponse[];
  [k: string]: unknown;
}
export interface StakeAmountResponse {
  amount: Uint128;
  [k: string]: unknown;
}
export interface StakesResponse {
  stakes: string[];
  [k: string]: unknown;
}
export interface StateResponse {
  curr_executing_request_id: number;
  next_request_id: number;
  stakes_len: number;
  total_requests: number;
  total_stake_amount: Uint128;
  [k: string]: unknown;
}
export interface State {
  curr_executing_request_id: number;
  executor: string;
  last_epoch: number;
  next_request_id: number;
  stakes: string[];
  total_requests: number;
  total_staked: Uint128;
  [k: string]: unknown;
}
