export async function get(url) {
        const dataResp = await fetch(url);
        const data = await dataResp.json();
        return data;
}