//=========Mock API start==========//

function getRandomBool(n) {
  var maxRandomCoeff = 1000;

  if (n > maxRandomCoeff) n = maxRandomCoeff;

  return Math.floor(Math.random() * maxRandomCoeff) % n === 0;
}

//api to fetch a single article

export function getArticle(articleId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getRandomBool(10)) {
        reject(`Failed article ${articleId}`);
      } else {
        resolve(`Resolved article ${articleId}`);

        console.log("resolving article", articleId);
      }
    }, Math.random() * 1000);
  });
}

export function getArticleIds(page) {
  let ids = [];

  const pageSize = 10;

  for (let i = 0; i < pageSize; i++) {
    ids.push(page * pageSize + i);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ids);
    }, Math.random() * 1000);
  });
}

//============Mock API end=========//
