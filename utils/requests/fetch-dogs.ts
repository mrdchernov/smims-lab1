export default async function fetchDogs() {
    const res = await fetch('/api/dog', {method: 'GET'});
    return res.json()
}