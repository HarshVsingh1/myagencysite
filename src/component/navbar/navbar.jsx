import { Button } from '@mui/material'
import primarylogo from '../../assets/primarylogo.png'
export  default function Navbar() {
    return <div className='flex justify-between items-center bg-black text-white p-7' >
                  <div>
                     <img className='h-7' src={primarylogo} />
                  </div>
                  <div className='flex justify-between items-center gap-10 ' >
                         <div>
                         About
                         </div>
                         <div>
                         Services
                         </div>
                         <div>
                         Products
                         </div>
                         <div>
                         schedule meeting
                         </div>
                        
                  </div>
                  <div>
                  <Button sx={{color : 'white'}} variant="outlined">Contact Us</Button>
                  </div>
    </div>
}