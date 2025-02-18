import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData.posts);

function App() {
  return (
    <div className="App">
      <Header name= {blogData.about}/>
      <About image= {blogData.image} about={blogData.about}/>
      <ArticleList/>
    </div>
  );
}

export default App;
