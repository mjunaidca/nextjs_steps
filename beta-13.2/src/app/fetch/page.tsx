
async function getData() {
    const res = await fetch('https://api.quotable.io/random?tags=technology', { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function Home() {
    const quote = await getData();
    return (
        <main>
            <br />
            <div>{quote.content}</div>
        </main>
    )
};