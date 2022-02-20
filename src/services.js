import Onboard from '@bn-onboard/core'
import injectedModule from '@bn-onboard/injected-wallets'

const MAINNET_RPC_URL = 'https://api.s0.b.hmny.io'

const injected = injectedModule()

export const onboard = Onboard({
  wallets: [injected],
  chains: [
    {
      id: '1666700000',
      token: 'ONE',
      label: 'Harmony Testnet',
      rpcUrl: MAINNET_RPC_URL
    }
  ],
  appMetadata: {
    name: 'My App',
    icon: '<SVG_ICON_STRING>',
    description: 'My app using Onboard'
  }
})
