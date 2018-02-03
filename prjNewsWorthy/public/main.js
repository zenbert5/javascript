// Page Elements
const engadget = document.getElementById('engadget');
const recode = document.getElementById('recode');
const nextWeb = document.getElementById('nextWeb');
const main = document.getElementsByTagName('main')[0];

// News API Data

const apiKey = '&apiKey=';
const engadgetUrl = 'https://newsapi.org/v2/top-headlines?sources=engadget';
const recodeUrl = 'https://newsapi.org/v2/top-headlines?sources=recode';
const nextWebUrl = 'https://newsapi.org/v2/top-headlines?sources=the-next-web';

// Request News Function

async function getNews(url) {
  const urlToFetch = url + apiKey;
  let response = await fetch(urlToFetch);
  let jsonResponse = await response.json();
//  console.log(jsonResponse);
  let articleArray = jsonResponse.articles.slice(0, 5);
  console.log(articleArray);
  return articleArray;
}

// Render Function

function renderNews(articles) {
  articles.map((article, index) => {
    let articleRow =
      '<div class="articlerow">' +
      ' <div class="article">' +
      '   <h2 class="title">' + articles[index].title + '</h2>' +
      '   <h3>By ' + articles[index].author + '</h3>' +
      '   <p> ' + articles[index].description + '</p>' +
      '   <a href="' + articles[index].url + '" target="_blank" class="readmore"><p>Read More</p></a>' +
      ' </div>' +
      ' <div class="share">' +
      '   <img class="storyimage" src="' + articles[index].urlToImage + '" />' +
      '   <a href="https://twitter.com/ShawnChen347" target="_blank"><button type="button" class="tweet" id="tweet ' + index + '">' +
      '   <i class="fa fa-twitter" aria-hidden="true"></i>Tweet This</button></a>' +
      ' </div>' +
      '</div>';

    main.innerHTML += articleRow;
  });
  return articles;
}

// Post Tweet Function

function sendTweets(newsObjects) {
  let tweetButtons = document.getElementsByClassName('tweet');
  for (let i = 0; i < tweetButtons.length; i++) {
    tweetButtons[i].addEventListener('click', function() {
      // Call Post Status function here
      tweetButtons[i].innerHTML = "Tweeted";
    }, false);
  }
}

// Button Event Listeners

engadget.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(engadgetUrl).then(articles => renderNews(articles));
}, false);

recode.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(recodeUrl).then(articles => renderNews(articles));
}, false);

nextWeb.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(nextWebUrl).then(articles => renderNews(articles));
}, false);
