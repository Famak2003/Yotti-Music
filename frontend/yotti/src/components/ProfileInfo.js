
import Person2Icon from '@mui/icons-material/Person2';
import BadgeIcon from '@mui/icons-material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RoomIcon from '@mui/icons-material/Room';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';  
import InstagramIcon from '@mui/icons-material/Instagram';
import LockIcon from '@mui/icons-material/Lock';

export const info =[
          {
            id:"1",
             type:"text",
             placeholder:"Ucious",
             icon: <Person2Icon /> ,
          },
          {
            id:"2",
            type:"text",
            placeholder:"Uzochuckwu Chinemerem Joshua",
            icon: <BadgeIcon />,
          },
          {
            id:"3",
            type:"email",
            placeholder:"uzochukwuchinemeremjosh@gmail.com",
            icon: <EmailIcon />,
          },
          {
            id:"4",
            type:"number",
            placeholder:"+2348133856783",
            icon: <LocalPhoneIcon />,
          },
          {
            id:"5",
            type:"date",
            placeholder:"14/04/1999",
            icon: <CalendarMonthIcon /> ,
          },

];


export const Location=[
    {
        id:"1",
        type:"text",
        placeholder:"Country",
        icon: <RoomIcon /> ,
      },
         
];

export const Links=[
       
    {
        id:"1",
        type:"text",
        placeholder:"Instagram(optional)",
        icon: <InstagramIcon /> ,
      },
      {
        id:"2",
        type:"text",
        placeholder:"Facebook(optional)",
        icon: <FacebookIcon /> ,
      },
      {
        id:"3",
        type:"text",
        placeholder:"Twitter(Optional)",
        icon: <TwitterIcon /> ,
      },
];

export const Security =[
    {
        id:"1",
        type:"text",
        placeholder:"Change password",
        icon: <LockIcon  /> ,
      },
      {
        id:"3",
        type:"text",
        placeholder:"Re - enter new password",
        icon: <LockIcon /> ,
      },
]