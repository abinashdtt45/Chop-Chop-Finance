import axios from "axios";

export const getBusinessNews = () => {
  const uri =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=<KEY>";
  axios
    .get(uri)
    .then((result) => {
      if (result.articles.length > 0) {
        return result.articles.map((article) => {
          return {
            source: article.source.name,
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
          };
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
