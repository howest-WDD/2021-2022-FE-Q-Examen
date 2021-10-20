import React, { useState, useEffect } from "react";
import ArticlesList from "./ArticlesList";
import Header from "./Header";
import Footer from "./Footer";

function ShopApp() {
    const [articles, setArticles] = useState([]);

    function delArticle(id) {
        setArticles(
            articles.filter(article => {
                return article.article_id !== id;
            })
        )
    }

    useEffect(() => {
        fetch("articles.json")
            .then((res) => res.json())
            .then(setArticles)
            .catch(console.error);
    }, []);

    return (
        <div className="o-container">
            <main>
                <Header />
                <ArticlesList articles={articles} deleteArticleProps={delArticle} />
                <Footer />
            </main>
        </div>
    );
}

export default ShopApp;
