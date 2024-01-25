// var newsItem1 = {
//     headline: "Headline 1",
//     summary: "Lorem ipsum dolor sit amet."
// };

// var newsItem2 = {
//     headline: "Headline 2",
//     summary: "Lorem ipsum dolor sit amet."
// };

var news = [
    {
    headline: "Headline 1",
    summary: "Lorem ipsum dolor sit amet."
},
    {
    headline: "Headline 2",
    summary: "Lorem ipsum dolor sit amet."
}
];

console.log(news);

var newsContainer = document.querySelector(".news");

for(var i = 0; i < news.length; i++) {
    
    var item = news[i];
    console.log(item.headline);
    console.log(item.summary);

    newsContainer.innerHTML = newsContainer.innerHTML + "<h2>" + item.headline + "</h2>" + "<p>" + item.summary + "</p>";
}

