import { MAINNET_PROGRAM_ID, PublicKeyish } from '@raydium-io/raydium-sdk'

import { create } from 'zustand'

import toPubString from '@/functions/format/toMintString'
import { Numberish } from '@/types/constants'

import { SplToken } from '../token/type'

export type CreateMarket = {
  programId: string
  baseToken?: SplToken
  quoteToken?: SplToken
  minimumOrderSize: Numberish
  tickSize: Numberish

  newCreatedMarketId?: PublicKeyish
}
console.log(MAINNET_PROGRAM_ID.OPENBOOK_MARKET);
console.log(toPubString(MAINNET_PROGRAM_ID.OPENBOOK_MARKET));
export const useCreateMarket = create<CreateMarket>((set) => ({
  programId: "9oRqkMriwmroDNXZSBucmKN9futCedU6aHkxNaiYMtTW",
  minimumOrderSize: 1,
  tickSize: 0.01
}))
