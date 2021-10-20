import React from "react";

function Article(props) {
    const {article_id, naam, beschrijving, afbeelding, prijs} = props.article;
    return (
        <div className="c-article">
            <div className="c-article__image">
                <img src={afbeelding} alt={naam} />
            </div>
            <div className="c-article__info">
                <h1>{naam}</h1>
                <p className="c-article__description">{beschrijving}</p>
                <h2>&euro; {prijs}</h2>
                <button className="c-article__remove" onClick={() => props.deleteArticleProps(article_id)}>Verwijder</button>
            </div>
        </div>
    );
}

export default Article;
