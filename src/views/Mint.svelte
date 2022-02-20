<script context="module">
  export const title = 'Mint'
</script>

<script>
  import { SEMAPHORE_STAKING_CONTRACT_ADDRESS } from '../constants'

  import { currentView$, stakingContract$, account$ } from '../state'
  let i = 10
  const mint = async () => {
    const res = await $stakingContract$.mint($account$.address, i++)
    console.log(res)
  }
</script>

<div class="text-center flex-row">
  <h2 class="font-medium text-lg mb-6">Create your DAO identity NFT</h2>
  <p>Mint a new NFT that will be used to verify DOA membership</p>
  <button class="px-4 py-2 w-1/2 bg-accent rounded-md text-white" on:click={mint}>Mint</button>
  <button
    class="px-4 py-2 w-1/2 bg-white border border-neutral-100 rounded-md text-white"
    on:click={mint}>Back</button
  >
</div>
