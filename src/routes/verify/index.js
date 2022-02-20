/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
  const body = await request.json()

  if (body) {
    console.log(body)
    return {
      body: { verified: true }
    }
  }

  return {
    status: 404
  }
}
