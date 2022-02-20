<script>
  import { tokens$, zkStakeContract$, identity$ } from '../state'

  import { ENTITY_ID } from '../constants'

  let selectedToken

  let saveButtonText = 'Stake'

  const stake = async () => {
    saveButtonText = '<span style="color: green;">✓</span>'
    const res = await $zkStakeContract$.addDAOIdentity(ENTITY_ID, $identity$, selectedToken)

    setTimeout(() => {
      saveButtonText = 'Stake'
    }, 1000)
  }
</script>

<div class="text-center">
  <div class="flex items-center justify-center">
    <h2 class="font-medium text-lg">Select your NFT to stake</h2>
    {#if $tokens$}
      <select
        bind:value={selectedToken}
        class="ml-4 rounded px-3 py-1.5 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out"
        name=""
        id=""
      >
        <option value={null} selected>Select token</option>
        {#each $tokens$ as token}
          <option value={token}>Token: {token}</option>
        {/each}
      </select>
    {/if}
  </div>

  <button
    class="mt-14 px-4 py-2 w-1/2 bg-accent rounded-md text-white disabled:opacity-50"
    disabled={!selectedToken}
    on:click={stake}>{@html saveButtonText}</button
  >
</div>
