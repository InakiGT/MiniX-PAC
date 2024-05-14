const trendsContainer = document.getElementById('trends');

const getTrends = async () => {
    const trendApi = new Api('http://localhost:3000/posts/trends');
    const { data: { data: trends } } = await trendApi.Get();

    trends.forEach((trend) => {
        trendsContainer.innerHTML += `
        <div class="trend">
        <div>
          <span>Tendencia en México</span>
          <p>${ trend._id }</p>
          <span>${ trend.count } posts</span>
        </div>
        <img src='https://static.thenounproject.com/png/658625-200.png' />
      </div>
        `;
    });
}

getTrends();