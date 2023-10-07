import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Search = () => {
  return (
    <div className='w-[100%] flex items-center'>
          <div>
          <SearchIcon className=''/>
          </div>
       <input type='search' className='p-2 bg-stone-300 ' />
       <div>
       <CloseIcon className=''/>
       </div>
    </div>
  )
}

export default Search