import React from 'react'

function BlogCard(props) {
  return (
    <div className=' my-10 h-[30rem] w-80 flex flex-col'>

        <div className='h-[17rem] w-full flex justify-center items-center bg-gray-500 rounded-t-2xl'><img src={props.image} alt="" className='h-full w-full rounded-t-2xl' /></div>

        <div className='h-[13rem] w-full flex flex-col justify-center items-center bg-blue-500 rounded-b-2xl' >

            <h1 className='text-lg flex justify-center items-center  h-40 w-full'>{props.title.slice(0, 30)}...</h1>

            <p className='p-4 h-64 w-full text-sm flex justify-center items-center' >{ props.description && props.description.slice(0, 100)}...</p>

            <button className='h-24 w-24 bg-red-300 rounded-md text-sm ' >Read More</button>

            <div className=' w-full flex flex-row justify-around items-center my-3'>
              <h1 className='text-xs'>{props.author}</h1>
              <h1 className='text-xs'>{props.publishDate}</h1>
            </div>

        </div>

    </div>
  )
}

export default BlogCard
