import { expect, test } from 'vitest'
import * as exports from './index'

test('exports', () => {
  expect(Object.keys(exports)).toMatchInlineSnapshot(`
    [
      "Coin",
      "ChainId",
      "SWAP_ADDRESS",
      "SWAP_ADDRESS_MODULE",
      "PAIR_RESERVE_TYPE_TAG",
      "PAIR_LP_TYPE_TAG",
      "ZERO_PERCENT",
      "ONE_HUNDRED_PERCENT",
      "Router",
      "Pair",
      "Route",
      "inputOutputComparator",
      "tradeComparator",
      "Trade",
      "AptosCoin",
      "BaseCurrency",
      "CurrencyAmount",
      "FIVE",
      "Fraction",
      "InsufficientInputAmountError",
      "InsufficientReservesError",
      "MINIMUM_LIQUIDITY",
      "MaxUint256",
      "NativeCurrency",
      "ONE",
      "Percent",
      "Price",
      "Rounding",
      "TEN",
      "THREE",
      "TWO",
      "Token",
      "TradeType",
      "VMType",
      "VM_TYPE_MAXIMA",
      "ZERO",
      "_100",
      "_10000",
      "_9975",
      "computePriceImpact",
      "getTokenComparator",
      "sortedInsert",
      "sqrt",
      "validateVMTypeInstance",
    ]
  `)
})
