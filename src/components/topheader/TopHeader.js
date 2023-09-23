import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React from 'react'
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookShareButton,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    TwitterShareButton,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WhatsappShareButton,
    WorkplaceIcon
} from "react-share";
import { Grid ,Item} from '@mui/material';

const top100Films = [
    { label: 'Science' },
    { label: 'Algebra' },
    { label: 'computer'},
    
  ];

function TopHeader() {
  return (
    <Grid container spacing={2} >
  <Grid item xs={4} md={6}>
    {/* <Item> */}
    <div>Logo</div>
    {/* </Item> */}
  </Grid>
  <Grid item xs={4} md={4} >
    {/* <Item> */}
 
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="search cources" />}
      size="small"
    />
   
   
    
    
    {/* </Item> */}
  </Grid>
  <Grid item xs={4} md={2}>
  <FacebookShareButton url="https://www.facebook.com/">
        <FacebookIcon size={20} round={true} />
    </FacebookShareButton>
    <EmailShareButton url="https://mail.google.com/">
        <EmailIcon size={20} round={true} />
    </EmailShareButton>
    <TwitterShareButton url="https://twitter.com/">
        <TwitterIcon size={20} round={true} />
    </TwitterShareButton>
    <WhatsappShareButton url="https://web.whatsapp.com/" >
        <WhatsappIcon  size={20} round={true} />
    </WhatsappShareButton>
  </Grid>
</Grid>
)
}

{/* <div className='d-flex justify-content-around align-items-center w-100' style={{padding:"10px",height:"3%"}}>
    <div className='w-50'>Logo</div>
     <div className='d-flex justify-content-around align-items-center w-50' >
    <div>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="search cources" />}
      size="small"
    />
    </div>
    <div>
    
    <FacebookShareButton url="https://www.facebook.com/">
        <FacebookIcon size={20} round={true} />
    </FacebookShareButton>
    <EmailShareButton url="https://mail.google.com/">
        <EmailIcon size={20} round={true} />
    </EmailShareButton>
    <TwitterShareButton url="https://twitter.com/">
        <TwitterIcon size={20} round={true} />
    </TwitterShareButton>
    <WhatsappShareButton url="https://web.whatsapp.com/" >
        <WhatsappIcon  size={20} round={true} />
    </WhatsappShareButton>
    
</div>
    </div>
    
</div> */}
  


export default TopHeader