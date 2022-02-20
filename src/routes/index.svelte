<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ fetch }) {
    const { identity } = await fetch(`/identity`).then((response) => response.json())

    return {
      props: {
        identity
      }
    }
  }
</script>

<script>
  import Connect, { title as connectTitle } from '../views/Connect.svelte'
  import Approve, { title as approveTitle } from '../views/Approve.svelte'
  import Mint, { title as mintTitle } from '../views/Mint.svelte'
  import Stake from '../views/Stake.svelte'
  import Verify from '../views/Verify.svelte'
  import Home from '../views/Home.svelte'
  import Register, { title as registerTitle } from '../views/Register.svelte'
  import Wallet from '../components/Wallet.svelte'

  import { VIEWS } from '../constants'
  import { currentView$, wallets$, identity$ } from '../state'

  export let identity

  $identity$ = identity

  $: if ($wallets$) {
    $currentView$ = VIEWS.APPROVE
  } else {
    $currentView$ = VIEWS.CONNECT
  }

  $: currentView = {
    [VIEWS.APPROVE]: { component: Approve, title: approveTitle },
    [VIEWS.CONNECT]: { component: Connect, title: connectTitle },
    [VIEWS.MINT]: { component: Mint, title: mintTitle },
    [VIEWS.REGISTER]: { component: Register, title: registerTitle },
    [VIEWS.STAKE]: { component: Stake, title: 'Tokens' },
    [VIEWS.HOME]: { component: Home, title: 'Home' },
    [VIEWS.VERIFY]: { component: Verify, title: 'Verify' }
  }[$currentView$]

  let wallet
  let account
  $: if ($wallets$) {
    ;[wallet] = $wallets$
    ;[account] = wallet.accounts
  }
</script>

<main class="flex justify-center h-full pt-40">
  <div class="rounded-xl shadow-xl w-1/2 h-1/2">
    <!-- Header -->
    <div class="p-8 border-neutral-400 border-b flex items-center justify-between">
      <h1 class="text-3xl font-bold">ZK NFT</h1>
      <Wallet address={account?.address || ''} />
    </div>
    <!-- Header -->
    <div class="p-8">
      <svelte:component this={currentView.component} />
    </div>
  </div>
</main>
