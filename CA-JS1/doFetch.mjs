export async function doFetch(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log('Error', error);
        throw new Error(error);
    } finally {

    }
}