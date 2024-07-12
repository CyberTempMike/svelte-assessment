export const load = async ({ fetch }) => {
	try {
		const response = await fetch(
			'https://serpapi.com/search.json?engine=google_hotels&q=Amsterdam&check_in_date=2024-07-13&check_out_date=2024-07-14&currency=EUR&gl=nl&hl=nl&api_key=d825a510282748d47e8056ee217e73d95c58aea9bed8eea630f4076e27e76c10',
			{
				method: 'GET'
			}
		)
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`)
		}
		const hotelResults = await response.json()
		return { hotelResults };
	} catch (error) {
		console.error(error)
		return { error: 'Unable to fetch list of hotels.' }
	}
}