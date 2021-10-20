import React from "react";
import Article from "./Article";

function ArticlesList(props) {
    return (
        <>
            <h2 className="c-winkelmandje">Winkelmandje</h2>
            {props.articles.map((article) => (
                <Article key={article.article_id} article={article} deleteArticleProps={props.deleteArticleProps} />
            ))}
        </>
    );
}

export default ArticlesList;
