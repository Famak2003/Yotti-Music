import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';
import { info,Location,Links,Security } from '../ProfileInfo';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Profile = () => {
      
    const [file, setFile] = useState("");

  return (
    <div className='w-full h-auto '>
        <div className='w-[100%] flex items-center justify-between'>
            <div>
            <h1 className="text-[30px]">Profile</h1>
            </div>

            <div className='flex items-center gap-6 mr-2 '>
               <div className='flex'>
               <SettingsIcon />
               <p>Settings</p>
               </div>
                    <div>
                     <button className='border-[1px] border-green-600 p-2 rounded-lg flex items-center gap-1 bg-stone-600 hover:bg-green-600'> <DoneIcon  /> Save Changes</button>
                    </div>
            </div>
        </div>

        <div className='w-[100%] h-full flex sm:flex-row flex-col '>

      <div className='w-[100%] flex flex-col items-center '>
        <h1>Picture</h1>

        <div className='w-fit h-fit border-[1px] border-white flex flex-col items-center justify-center p-4'>
       <div className='w-[150px] h-[150px] flex flex-col items-center justify-center'>
        <img  src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              } 
              alt="" className='w-[100%] rounded-full' />

        </div>
        <div className='w-auto h-auto'>
            <form action="" >
                <div className='flex flex-col justify-center items-center gap-2 mt-10'>
                <label className='border-[1px]'>View Profile Picture</label>
                <label htmlFor="file" className='border-[1px] border-white'>
                  Change Profile picture <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <label className='border-[1px]'>Remove Profile Picture</label>
                </div>


            </form>
        </div>
       </div>
      </div>


      <div className='w-[100%] mt-10 sm:mt-0 '>

      <div className='w-[100%] h-[100%] flex flex-col justify-center '>
      
     <div className='w-[100%]'>
     <div className='ml-24 '>
                    <h1 className="text-[24px]">Personal Info</h1>
                    </div>
                    
           <div className='w-[100%] h-fit  flex flex-col items-center  gap-3'>
           {info.map((info)=>(
            <div key={info.id} className='flex w-[50%]  rounded-lg p-1 border-[1px] border-white'>
                   <div>
                    {info.icon}
                   </div>
                <input type={info.type} placeholder={info.placeholder} className='w-[100%] bg-transparent' readOnly/>
            </div>
           ))} 
           </div>
     </div>

     <div className='w-[100%]'>
     <div className='ml-24'>
                    <h1 className="text-[24px]">Location</h1>
                    </div>
                    
           <div className='w-[100%] h-fit  flex flex-col items-center  gap-3'>
           {Location.map((location)=>(
            <div key={location.id} className='flex w-[50%]  rounded-lg p-1 border-[1px] border-white'>
                   <div>
                    {location.icon}
                   </div>
                <input type={location.type} placeholder={location.placeholder} className='w-[100%] bg-transparent' readOnly/>
            </div>
           ))} 
           </div>
     </div>


     <div className='w-[100%]'>
     <div className='ml-24'>
                    <h1 className="text-[24px]">Links</h1>
                    </div>
                    
           <div className='w-[100%] h-fit  flex flex-col items-center  gap-3'>
           {Links.map((link)=>(
            <div key={link.id} className='flex w-[50%]  rounded-lg p-1 border-[1px] border-white'>
                   <div>
                    {link.icon}
                   </div>
                <input type={link.type} placeholder={link.placeholder} className='w-[100%] bg-transparent' readOnly/>
            </div>
           ))} 
           </div>
     </div>


     <div className='w-[100%]'>
     <div className='ml-24'>
                    <h1 className="text-[24px]">Security</h1>
                    </div>
                    
           <div className='w-[100%] h-fit  flex flex-col items-center  gap-3'>
           {Security.map((security)=>(
            <div key={security.id} className='flex w-[50%]  rounded-lg p-1 border-[1px] border-white'>
                   <div>
                    {security.icon}
                   </div>
                <input type={security.type} placeholder={security.placeholder} className='w-[100%] bg-transparent' readOnly/>
            </div>
           ))} 
           </div>
     </div>

      </div>
      </div>

        </div>
    </div>
  )
}

export default Profile