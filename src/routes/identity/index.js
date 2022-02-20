import { ZkIdentity } from '@zk-kit/identity'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
  const identity = new ZkIdentity()
  const identityCommitment = identity.genIdentityCommitment()

  if (identityCommitment) {
    return {
      body: { identity: identityCommitment.toString() }
    }
  }

  return {
    status: 404
  }
}
