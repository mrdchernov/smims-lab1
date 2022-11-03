export default async function fetchDogs() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/dog`, {method: 'GET'});
    return res.json()
}