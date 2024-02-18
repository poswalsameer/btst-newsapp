import React from 'react'

function BlogCard(props) {
  return (
    <div className=' my-10 h-[30rem] w-96 flex flex-col'>

        <div className='h-[17rem] w-full flex justify-center items-center bg-gray-500 rounded-t-2xl border-2 border-b-0 border-blue-300'><img src={props.image} alt="" className='h-full w-full rounded-t-2xl' /></div>

        <div className='h-[13rem] w-full flex flex-col justify-center items-center bg-[#023047] rounded-b-2xl border-2 border-t-0 border-blue-300 shadow-2xl' >

            <h1 className='mt-1 text-[#06d6a0] text-lg font-bold flex justify-center items-center  h-40 w-full'>{props.title.slice(0, 30)}...</h1>

            <p className='p-4 h-64 w-full text-blue-300 font-bold text-center text-sm flex justify-center items-center' >{ props.description && props.description.slice(0, 100) + '...'}</p>

            <button className='my-2 h-28 w-20 bg-blue-300 text-blue-900 font-bold border-2 border-blue-900 rounded-md text-xs hover:border-2 hover:border-blue-300 hover:bg-blue-900 hover:text-blue-300 ' >
              <a href={props.blogUrl} target='_blank'>Read More</a>
            </button>

            <div className=' w-full flex flex-row justify-between items-center my-3'>
              <h1 className='text-xs mx-4 text-[#06d6a0]'>{props.author}</h1>
              <h1 className='text-xs mx-4 text-[#06d6a0]'>{props.publishDate}</h1>
            </div>

        </div>

    </div>
  )
}

export default BlogCard
