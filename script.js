const container = document.getElementById('news-container');
async function getNews() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		const news = await response.json();
		news.forEach(article => {
			const card = document.createElement('article');
			card.className = 'news-card';
			card.innerHTML = `
				<img src="https://picsum.photos/300/200?random=${article.id}" alt="News image">
				<h2>${article.title}</h2>
				<p>${article.body}</p>
			`;
			container.appendChild(card);
		});
	} catch (error) {
		console.log(error);
	}
}

getNews();
