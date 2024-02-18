"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";


export default function Home() {

  // const [jsonData, setJsonData] = useState([]);
  let jsonData;

  const [blogArr, setBlogArr] = useState([]);
  
  useEffect( () => {

      const getBlogData = async () => {

        let blogURL = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=746cb39f1bce49cba5078e76def5e243';
  
        let blogData = await fetch(blogURL);
    
        if(!blogData.ok){
          console.log("error while fetching");
        }
    
        jsonData = await blogData.json();
        // setJsonData(jsonData.articles);
        console.log(jsonData);

        setBlogArr(jsonData.articles);
        console.log(blogArr);

      }

      getBlogData();

  }, []);

  
  

  return (
    <>

      <h1 className="text-4xl font-extrabold text-white text-center my-20">NEWS APP</h1>

      <div className="grid grid-cols-3 place-items-center items-center ">

        {blogArr.map( (blog) => (

          <BlogCard key={blog.url} image={blog.urlToImage} title={blog.title} description={blog.description} author={blog.author} publishDate={blog.publishedAt} />

        ) )}

      </div>

    </>
  );
}
