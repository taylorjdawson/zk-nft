<script context="module">
  export const title = 'Mint'
</script>

<script>
  import { VIEWS } from '../constants'

  import { currentView$, stakingContract$, account$ } from '../state'

  const randomInt = (max, min) => Math.round(Math.random() * (max - min)) + min

  const mint = async () => {
    const res = await $stakingContract$.mint($account$.address, randomInt(50, 100000))
    console.log(res)
  }

  const back = () => {
    $currentView$ = VIEWS.HOME
  }
</script>

<div class="text-center flex-row">
  <h2 class="font-medium text-lg mb-6">Create your DAO identity NFT</h2>
  <p>Mint a new NFT that will be used to verify DOA membership</p>
  <div class="flex mt-10">
    <button
      class=" mr-4 px-4 py-2 w-1/2 bg-white border border-neutral-600 rounded-md text-black"
      on:click={back}>Back</button
    >
    <button class="px-4 py-2 w-1/2 bg-accent rounded-md text-white" on:click={mint}>Mint</button>
  </div>
</div>
