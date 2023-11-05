import React from 'react'
import SearchIcon from '@mui/icons-material/Search';


const Search = () => {
  return (
    <div className='w-[100%] flex items-center'>
          <div>
          <SearchIcon className='text-white'/>
          </div>
       <input type='search' placeholder='Search any music, playlist, album here...' className='p-2 bg-stone-600 w-[100%] text-white' />
    </div>
  )
}

export default Search