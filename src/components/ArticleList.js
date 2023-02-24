import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList() {
    const posts = blogData.posts
    const ArticleElement = posts.map((post) => {
        return ( <Article key= {post.id} title= {post.title} date={post.date} preview= {post.preview}/>
            )
    })
    return (
        <main>
            {ArticleElement}
        </main>
    )
}
export default ArticleList;