<script context="module">
  export const title = 'Register'
</script>

<script>
  export let identity
  export let urrl

  console.log(identity, urrl)

  const register = () => {
    console.log('identityCommitment', identityCommitment)
  }
</script>

<div class="text-center flex-row">
  <h2 class="font-medium text-lg mb-6">Stake your NFT to claim membership</h2>
  <p />
  <button class="px-4 py-2 w-1/2 bg-accent rounded-md text-white" on:click={register}
    >Register</button
  >
</div>
