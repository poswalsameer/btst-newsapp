"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";


export default function Home() {

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

      <h1 className="lg:text-8xl lg:text-[#33eebc] lg:font-extrabold lg:text-center lg:my-10
      
      xl:text-9xl xl:text-[#33eebc] xl:font-extrabold xl:text-center xl:my-10
      
      2xl:text-9xl 2xl:text-[#33eebc] 2xl:font-extrabold 2xl:text-center 2xl:my-10">DAILY <span className="lg:text-blue-900 xl:text-blue-900 2xl:text-blue-900">PULSE</span></h1>

      <div className="lg:grid lg:grid-cols-3 lg:place-items-center lg:items-center
      
      xl:grid xl:grid-cols-3 xl:place-items-center xl:items-center
      
      2xl:grid 2xl:grid-cols-3 2xl:place-items-center 2xl:items-center ">

        {blogArr.map( (blog) => (

          <BlogCard key={blog.url} blogUrl={blog.url ? blog.url : "/" } image={blog.urlToImage ? blog.urlToImage : "noImg.jpg" } title={blog.title ? blog.title : "No Title" } description={blog.description ? blog.description : "No description available" } author={blog.author ? blog.author : "Unknown author" } publishDate={blog.publishedAt ? blog.publishedAt : "Date unavailable" } />

        ) )}

      </div>

    </>
  );
}
