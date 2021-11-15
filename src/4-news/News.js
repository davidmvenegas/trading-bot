import React from 'react'
import './news.css'
// import Article from './Article'

function News() {

    // const getNewsData = () => {
    //     fetch("https://cryptopanic.com/api/v1/posts")
    // }

    return (
        <div>
            <div className="article-container">
                <div className="article">
                    <div className="article-text">
                        <div className="article-text-box-1">
                            <h1 className="article-title">ARTICLE_TITLE</h1>
                            <p className="article-decription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, non!</p>
                        </div>
                        <div className="article-text-box-2">
                            <p className="news">NEWS_SOURCE</p>
                            <p className="article-time">ARTICLE_TIME</p>
                        </div>
                    </div>
                    <div className="article-image-container">
                        <img className="article-image" src="https://image.cnbcfm.com/api/v1/image/106962967-1634709558798-gettyimages-1235570383-porzycki-cryptocu210928_npbUe.jpeg?v=1635185551&w=929&h=523" alt="article-pic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
