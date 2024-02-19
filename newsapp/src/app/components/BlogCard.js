import React from 'react'

function BlogCard(props) {
  return (
    <div className='my-10 h-[30rem] w-[18rem] flex flex-col drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:cursor-pointer transition-transform ease-in hover:scale-105
    
    sm:my-10 sm:h-[30rem] sm:w-[18rem] sm:flex sm:flex-col sm:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:hover:cursor-pointer sm:transition-transform sm:ease-in sm:hover:scale-105
    
    md:my-10 md:h-[30rem] md:w-[20rem] md:flex md:flex-col md:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:hover:cursor-pointer md:transition-transform md:ease-in md:hover:scale-105
    
    lg:my-10 lg:h-[28rem] lg:w-[18rem] lg:flex lg:flex-col lg:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] lg:hover:cursor-pointer lg:transition-transform lg:ease-in lg:hover:scale-105
    
    xl:my-10 xl:h-[30rem] xl:w-[22rem] xl:flex xl:flex-col xl:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] xl:hover:cursor-pointer xl:transition-transform xl:ease-in xl:hover:scale-105
    
    2xl:my-10 2xl:h-[30rem] 2xl:w-[22rem] 2xl:flex 2xl:flex-col 2xl:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] 2xl:hover:cursor-pointer 2xl:transition-transform 2xl:ease-in 2xl:hover:scale-105'>

        <div className='h-[16rem] w-[18rem] flex justify-center items-center bg-gray-500 rounded-t-2xl 
        
        sm:h-[16rem] sm:w-[18rem] sm:flex sm:justify-center sm:items-center sm:bg-gray-500 sm:rounded-t-2xl 

        md:h-[17rem] md:w-[20rem] md:flex md:justify-center md:items-center md:bg-gray-500 md:rounded-t-2xl 
        
        lg:h-[17rem] lg:w-[18rem] lg:flex lg:justify-center lg:items-center lg:bg-gray-500 lg:rounded-t-2xl 
        
        xl:h-[17rem] xl:w-full xl:flex xl:justify-center xl:items-center xl:bg-gray-500 xl:rounded-t-2xl 
        
        2xl:h-[17rem] 2xl:w-full 2xl:flex 2xl:justify-center 2xl:items-center 2xl:bg-gray-500 2xl:rounded-t-2xl '>

          <img src={props.image} alt="" className='h-full w-full rounded-t-2xl
          
          sm:h-full sm:w-full sm:rounded-t-2xl
          
          md:h-full md:w-full md:rounded-t-2xl
          
          lg:h-[17rem] lg:w-[18rem] lg:rounded-t-2xl
          
          xl:h-full xl:w-full xl:rounded-t-2xl
          
          2xl:h-full 2xl:w-full 2xl:rounded-t-2xl' />

        </div>

        <div className='h-[13rem] w-full flex flex-col justify-center items-center bg-[#351346] rounded-b-2xl shadow-2xl
        
        sm:h-[13rem] sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center sm:bg-[#351346] sm:rounded-b-2xl sm:shadow-2xl
        
        md:h-[13rem] md:w-full md:flex md:flex-col md:justify-center md:items-center md:bg-[#351346] md:rounded-b-2xl md:shadow-2xl
        
        lg:h-[13rem] lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:bg-[#351346] lg:rounded-b-2xl lg:shadow-2xl
        
        xl:h-[13rem] xl:w-full xl:flex xl:flex-col xl:justify-center xl:items-center xl:bg-[#351346] xl:rounded-b-2xl xl:shadow-2xl
        
        2xl:h-[13rem] 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:bg-[#351346] 2xl:rounded-b-2xl  2xl:shadow-2xl' >

            <h1 className='mt-3 px-4 text-[#ffffe4] text-base font-bold flex justify-center items-center h-40 w-full
            
            sm:mt-3 sm:text-[#ffffe4] sm:text-base sm:font-bold sm:flex sm:justify-center sm:items-center  sm:h-40 sm:w-full
            
            md:mt-3 md:text-[#ffffe4] md:text-base md:font-bold md:flex md:justify-center md:items-center  md:h-40 md:w-full
            
            lg:mt-3 lg:text-[#ffffe4] lg:text-base lg:font-bold lg:flex lg:justify-center lg:items-center  lg:h-40 lg:w-full
            
            xl:mt-1 xl:text-[#ffffe4] xl:text-lg xl:font-bold xl:flex xl:justify-center xl:items-center  xl:h-40 xl:w-full
            
            2xl:mt-1 2xl:text-[#ffffe4] 2xl:text-lg 2xl:font-bold 2xl:flex 2xl:justify-center 2xl:items-center  2xl:h-40 2xl:w-full'>{props.title.slice(0, 30)}...</h1>

            <p className='p-2 h-64 w-full text-[#c48df8] font-bold text-center text-sm flex justify-center items-center
            
            sm:p-4 sm:h-64 sm:w-full sm:text-[#c48df8] sm:font-bold sm:text-center sm:text-sm sm:flex sm:justify-center sm:items-center
            
            md:p-4 md:h-64 md:w-full md:text-[#c48df8] md:font-bold md:text-center md:text-sm md:flex md:justify-center md:items-center
            
            lg:p-4 lg:h-64 lg:w-full lg:text-[#c48df8] lg:font-bold lg:text-center lg:text-sm lg:flex lg:justify-center lg:items-center
            
            xl:p-4 xl:h-64 xl:w-full xl:text-[#c48df8] xl:font-bold xl:text-center xl:text-sm xl:flex xl:justify-center xl:items-center
            
            2xl:p-4 2xl:h-64 2xl:w-full 2xl:text-[#c48df8] 2xl:font-bold 2xl:text-center 2xl:text-sm 2xl:flex 2xl:justify-center 2xl:items-center' >{ props.description && props.description.slice(0, 90) + '...'}</p>

            <button className='my-2 h-28 w-20 bg-[#bb7ff4] text-[#351346] font-bold border-2 border-[#351346] rounded-md text-xs hover:border-2 hover:border-[#bb7ff4] hover:bg-[#351346] hover:text-[#bb7ff4]
            
            sm:my-2 sm:h-28 sm:w-20 sm:bg-[#bb7ff4] sm:text-[#351346] sm:font-bold sm:border-2 sm:border-[#351346] sm:rounded-md sm:text-xs sm:hover:border-2 sm:hover:border-[#bb7ff4] sm:hover:bg-[#351346] sm:hover:text-[#bb7ff4]
            
            md:my-2 md:h-28 md:w-20 md:bg-[#bb7ff4] md:text-[#351346] md:font-bold md:border-2 md:border-[#351346] md:rounded-md md:text-xs md:hover:border-2 md:hover:border-[#bb7ff4] md:hover:bg-[#351346] md:hover:text-[#bb7ff4]
            
            lg:my-2 lg:h-28 lg:w-20 lg:bg-[#bb7ff4] lg:text-[#351346] lg:font-bold lg:border-2 lg:border-[#351346] lg:rounded-md lg:text-xs lg:hover:border-2 lg:hover:border-[#bb7ff4] lg:hover:bg-[#351346] lg:hover:text-[#bb7ff4]
            
            xl:my-2 xl:h-28 xl:w-20 xl:bg-[#bb7ff4] xl:text-[#351346] xl:font-bold xl:border-2 xl:border-[#351346] xl:rounded-md xl:text-xs xl:hover:border-2 xl:hover:border-[#bb7ff4] xl:hover:bg-[#351346] xl:hover:text-[#bb7ff4]
            
            2xl:my-2 2xl:h-28 2xl:w-20 2xl:bg-[#bb7ff4] 2xl:text-[#351346] 2xl:font-bold 2xl:border-2 2xl:border-[#351346] 2xl:rounded-md 2xl:text-xs 2xl:hover:border-2 2xl:hover:border-[#bb7ff4] 2xl:hover:bg-[#351346] 2xl:hover:text-[#bb7ff4] ' >
              <a href={props.blogUrl} target='_blank'>Read More</a>
            </button>

            <div className='w-full flex flex-row justify-between items-center my-3
            
            sm:w-full sm:flex sm:flex-row sm:justify-between sm:items-center sm:my-3
            
            md:w-full md:flex md:flex-row md:justify-between md:items-center md:my-3
            
            lg:w-full lg:flex lg:flex-row lg:justify-between lg:items-center lg:my-3
            
            xl:w-full xl:flex xl:flex-row xl:justify-between xl:items-center xl:my-3
            
            2xl:w-full 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-center 2xl:my-3'>

              <h1 className='text-xs mx-2 text-[#bb7ff4]
              
              sm:text-xs sm:mx-3 sm:text-[#bb7ff4]
              
              md:text-xs md:mx-3 md:text-[#bb7ff4]
              
              lg:text-xs lg:mx-3 lg:text-[#bb7ff4]
              
              xl:text-xs xl:mx-4 xl:text-[#bb7ff4]
              
              2xl:text-xs 2xl:mx-4 2xl:text-[#bb7ff4]'>{props.author}</h1>

              <h1 className='text-xs mx-2 text-[#bb7ff4]
              
              sm:text-xs sm:mx-3 sm:text-[#bb7ff4]
              
              md:text-xs md:mx-3 md:text-[#bb7ff4]
              
              lg:text-xs lg:mx-3 lg:text-[#bb7ff4]
              
              xl:text-xs xl:mx-4 xl:text-[#bb7ff4]
              
              2xl:text-xs 2xl:mx-4 2xl:text-[#bb7ff4]'>{props.publishDate}</h1>

            </div>

        </div>

    </div>
  )
}

export default BlogCard
