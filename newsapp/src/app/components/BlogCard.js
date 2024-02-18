import React from 'react'

function BlogCard(props) {
  return (
    <div className='lg:my-10 lg:h-[28rem] lg:w-[18rem] lg:flex lg:flex-col
    
    xl:my-10 xl:h-[30rem] xl:w-[22rem] xl:flex xl:flex-col
    
    2xl:my-10 2xl:h-[30rem] 2xl:w-[22rem] 2xl:flex 2xl:flex-col'>

        <div className='lg:h-[17rem] lg:w-[18rem] lg:flex lg:justify-center lg:items-center lg:bg-gray-500 lg:rounded-t-2xl lg:border-2 lg:border-b-0 lg:border-blue-300
        
        xl:h-[17rem] xl:w-full xl:flex xl:justify-center xl:items-center xl:bg-gray-500 xl:rounded-t-2xl xl:border-2 xl:border-b-0 xl:border-blue-300
        
        2xl:h-[17rem] 2xl:w-full 2xl:flex 2xl:justify-center 2xl:items-center 2xl:bg-gray-500 2xl:rounded-t-2xl 2xl:border-2 2xl:border-b-0 2xl:border-blue-300'>

          <img src={props.image} alt="" className='lg:h-[17rem] lg:w-[18rem] lg:rounded-t-2xl
          
          xl:h-full xl:w-full xl:rounded-t-2xl
          
          2xl:h-full 2xl:w-full 2xl:rounded-t-2xl' />

        </div>

        <div className='lg:h-[13rem] lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:bg-[#023047] lg:rounded-b-2xl lg:border-2 lg:border-t-0 lg:border-blue-300 lg:shadow-2xl
        
        xl:h-[13rem] xl:w-full xl:flex xl:flex-col xl:justify-center xl:items-center xl:bg-[#023047] xl:rounded-b-2xl xl:border-2 xl:border-t-0 xl:border-blue-300 xl:shadow-2xl
        
        2xl:h-[13rem] 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:bg-[#023047] 2xl:rounded-b-2xl 2xl:border-2 2xl:border-t-0 2xl:border-blue-300 2xl:shadow-2xl' >

            <h1 className='lg:mt-3 lg:text-[#06d6a0] lg:text-base lg:font-bold lg:flex lg:justify-center lg:items-center  lg:h-40 lg:w-full
            
            xl:mt-1 xl:text-[#06d6a0] xl:text-lg xl:font-bold xl:flex xl:justify-center xl:items-center  xl:h-40 xl:w-full
            
            2xl:mt-1 2xl:text-[#06d6a0] 2xl:text-lg 2xl:font-bold 2xl:flex 2xl:justify-center 2xl:items-center  2xl:h-40 2xl:w-full'>{props.title.slice(0, 30)}...</h1>

            <p className='lg:p-4 lg:h-64 lg:w-full lg:text-blue-300 lg:font-bold lg:text-center lg:text-sm lg:flex lg:justify-center lg:items-center
            
            xl:p-4 xl:h-64 xl:w-full xl:text-blue-300 xl:font-bold xl:text-center xl:text-sm xl:flex xl:justify-center xl:items-center
            
            2xl:p-4 2xl:h-64 2xl:w-full 2xl:text-blue-300 2xl:font-bold 2xl:text-center 2xl:text-sm 2xl:flex 2xl:justify-center 2xl:items-center' >{ props.description && props.description.slice(0, 90) + '...'}</p>

            <button className='lg:my-2 lg:h-28 lg:w-20 lg:bg-blue-300 lg:text-blue-900 lg:font-bold lg:border-2 lg:border-blue-900 lg:rounded-md lg:text-xs lg:hover:border-2 lg:hover:border-blue-300 lg:hover:bg-blue-900 lg:hover:text-blue-300
            
            xl:my-2 xl:h-28 xl:w-20 xl:bg-blue-300 xl:text-blue-900 xl:font-bold xl:border-2 xl:border-blue-900 xl:rounded-md xl:text-xs xl:hover:border-2 xl:hover:border-blue-300 xl:hover:bg-blue-900 xl:hover:text-blue-300
            
            2xl:my-2 2xl:h-28 2xl:w-20 2xl:bg-blue-300 2xl:text-blue-900 2xl:font-bold 2xl:border-2 2xl:border-blue-900 2xl:rounded-md 2xl:text-xs 2xl:hover:border-2 2xl:hover:border-blue-300 2xl:hover:bg-blue-900 2xl:hover:text-blue-300 ' >
              <a href={props.blogUrl} target='_blank'>Read More</a>
            </button>

            <div className='lg:w-full lg:flex lg:flex-row lg:justify-between lg:items-center lg:my-3
            
            xl:w-full xl:flex xl:flex-row xl:justify-between xl:items-center xl:my-3
            
            2xl:w-full 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-center 2xl:my-3'>

              <h1 className='lg:text-xs lg:mx-3 lg:text-[#06d6a0]
              
              xl:text-xs xl:mx-4 xl:text-[#06d6a0]
              
              2xl:text-xs 2xl:mx-4 2xl:text-[#06d6a0]'>{props.author}</h1>

              <h1 className='lg:text-xs lg:mx-3 lg:text-[#06d6a0]
              
              xl:text-xs xl:mx-4 xl:text-[#06d6a0]
              
              2xl:text-xs 2xl:mx-4 2xl:text-[#06d6a0]'>{props.publishDate}</h1>

            </div>

        </div>

    </div>
  )
}

export default BlogCard
