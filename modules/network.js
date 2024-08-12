// Network functions

export async function getResponseFromGetRequest(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
