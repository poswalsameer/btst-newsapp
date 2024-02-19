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

      <h1 className="text-6xl text-[#ffffe4] drop-shadow-[0_1.2px_1.2px_rgba(92,38,124,20)] font-extrabold text-center my-10
      
      sm:text-6xl sm:text-[#ffffe4] sm:drop-shadow-[0_1.2px_1.2px_rgba(92,38,124,20)] sm:font-extrabold sm:text-center sm:my-10
      
      md:text-6xl md:text-[#ffffe4] md:drop-shadow-[0_1.2px_1.2px_rgba(92,38,124,20)] md:font-extrabold md:text-center md:my-10
      
      lg:text-7xl lg:text-[#ffffe4] lg:drop-shadow-[0_1.2px_1.2px_rgba(92,38,124,20)] lg:font-extrabold lg:text-center lg:my-10
      
      xl:text-8xl xl:text-[#ffffe4] xl:drop-shadow-[0_1.2px_1.2px_rgba(92,38,124,20)] xl:font-extrabold xl:text-center xl:my-10
      
      2xl:text-8xl 2xl:text-[#ffffe4] 2xl:drop-shadow-[0_1.2px_1.2px_rgba(92,38,124,20)] 2xl:font-extrabold 2xl:text-center 2xl:my-10">DAILY PULSE</h1>

      <div className="grid grid-cols- place-items-center items-center
      
      sm:grid sm:grid-cols-2 sm:place-items-center sm:items-center
      
      md:grid md:grid-cols-2 md:place-items-center md:items-center
      
      lg:grid lg:grid-cols-3 lg:place-items-center lg:items-center
      
      xl:grid xl:grid-cols-3 xl:place-items-center xl:items-center
      
      2xl:grid 2xl:grid-cols-3 2xl:place-items-center 2xl:items-center ">

        {blogArr.map( (blog) => (

          <BlogCard key={blog.url} blogUrl={blog.url ? blog.url : "/" } image={blog.urlToImage ? blog.urlToImage : "noImg.jpg" } title={blog.title ? blog.title : "No Title" } description={blog.description ? blog.description : "No description available" } author={blog.author ? blog.author : "Unknown author" } publishDate={blog.publishedAt ? blog.publishedAt : "Date unavailable" } />

        ) )}

      </div>

    </>
  );
}
