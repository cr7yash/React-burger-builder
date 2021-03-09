import "./styles.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { getArticle, getArticleIds } from "./api.js";
import Card from "./Component/Card";

export default function App() {
  const [pageNo, setPageNo] = useState();
  const [articleId, setArticleId] = useState();
  const [articleToShow, setArticleToShow] = useState([]);

  useEffect(() => {
    Axios.get(
      getArticleIds(setPageNo).then((res) => {
        const response = res;
        console.log(response);
        setArticleToShow(response);
      })
    );
  }, [pageNo]);

  const fetchArticle = (setArticleId) => {
    Axios.get(getArticle(setArticleId)).then((res) => {
      const response = res;
      console.log(response);
    });
  };

  const searchPageNo = (e) => {
    e.preventDefault();
    articleId(e);
    console.log(e);
  };

  const searchArticle = (e) => {
    e.preventDefault();
    setArticleId(e);
    console.log(e);
  };

  return (
    <div className="App">
      <h1>Article by Page No. </h1>
      <form onSubmit={searchPageNo}>
        <label>Enter page No.</label>
        <input type="search" onChange={(e) => setPageNo(e.target.value)} />
        <button label="submit" type="submit">
          Submit{" "}
        </button>
      </form>
      <div className="cards">
        <Card />
      </div>
      <h2>Article By Id</h2>
      <form onSubmit={searchArticle}>
        <label>Enter Article Id</label>
        <input type="search" onChange={(e) => setArticleId(e.target.value)} />
        <button label="submit" type="submit">
          Submit{" "}
        </button>
      </form>
      {/* {articleToShow.map((article, id) => {
        return <Card key={id} article={article} />;
      })} */}
    </div>
  );
}
