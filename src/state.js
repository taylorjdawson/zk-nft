import { derived, writable } from 'svelte/store'
import { ethers } from 'ethers'

import { VIEWS, STAKING_CONTRACT_ADDRESS, SEMAPHORE_STAKING_CONTRACT_ADDRESS } from './constants'
import stakingTokenAbi from './stakingToken'
import zkStakeAbi from './zkStake'

export const currentView$ = writable()

export const wallets$ = writable()

export const account$ = derived(wallets$, ([wallet]) => {
  const provider = new ethers.providers.Web3Provider(wallet.provider, 'any')
  const signer = provider.getSigner()
  return {
    ...wallet?.accounts?.[0],
    signer
  }
})

export const stakingContract$ = derived(account$, (account) => {
  const contract = new ethers.Contract(STAKING_CONTRACT_ADDRESS, stakingTokenAbi, account.signer)
  return contract
})

export const zkStakeContract$ = derived(account$, (account) => {
  const contract = new ethers.Contract(
    SEMAPHORE_STAKING_CONTRACT_ADDRESS,
    zkStakeAbi,
    account.signer
  )
  return contract
})

// export const identity$ = derived(account$, (account) => {
//   if (!window.localStorage.getItem('identity')) {
//     window.localStorage.setItem('identity', {
//       [account]: identity
//     })
//   }

//   console.log(window.localStorage.getItem('identity'))

//   console.log(account)
// })

export const tokens$ = derived([stakingContract$, account$], ([stakingContract, account], set) => {
  stakingContract.balanceOf(account.address).then(async (balance) => {
    const tokens = []
    for (let i = 0; i < balance; i++) {
      const token = await stakingContract.tokenOfOwnerByIndex(account.address, i)
      tokens.push(token.toString())
    }
    set(tokens)
  })
})

export const identity$ = writable()

// ---------------- DEBUG ONLY -----------------
export const viewToName = {
  [VIEWS.CONNECT]: 'CONNECT',
  [VIEWS.APPROVE]: 'APPROVE',
  [VIEWS.MINT]: 'Mint',
  [VIEWS.REGISTER]: 'REGISTER',
  [VIEWS.STAKE]: 'Stake',
  [VIEWS.VERIFY]: 'Verify'
}

currentView$.subscribe((currentView) => {
  console.log('currentView updated: ', viewToName[currentView])
})
