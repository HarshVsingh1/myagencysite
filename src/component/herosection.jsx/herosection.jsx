import uiIcon from '../../assets/ui-ux.png'
import webd from '../../assets/webd.png'
import designicon from '../../assets/design.png'
import gameicon from '../../assets/game-console.png'
import product from '../../assets/pen-tablet.png'
import mobileicon from '../../assets/mobile-app.png'
import {easeIn, easeInOut, easeOut, motion, useInView} from 'framer-motion'
import { useRef } from 'react'
export default function HeroSection() {
       const ref = useRef(null)
       const inView = useInView(ref,{once : false})
       const variant = {
              visible : {opacity : 1 , y : 0 , transition : {ease : easeOut , duration : 1 }},
              hidden : {opacity : 0 , y : 100}
       }
    return <div> 
        <div className='flex items-center justify-center flex-col bg-black' >
             
        <motion.div ref={ref} variants={variant} initial='hidden' animate={inView?'visible':''} className="text-8xl cinzel-bold-header bg-black text-white"  > <span className="text-sky-400" >Designing</span> What You Imagine</motion.div>
         <motion.div ref={ref} variants={variant} initial='hidden' animate={inView?'visible':''} className="text-8xl cinzel-bold-header bg-black text-white" >Building <span className="text-sky-400" >What</span> You Need</motion.div>
        
        </div>
            
             <div className="text-white bg-black font-[aghartibold] py-24" >
             
                <div className='flex items-center justify-evenly py-10' >
               
                      <div className='flex items-center justify-center gap-5 w-1/2 ' > 
                               <div>
                                      <img className='h-24' src={webd} />
                               </div>
                        <div className='flex gap-4 flex-col' >
                                <div className="text-5xl" >
                                     WEB DEVELOPMENT
                                </div>
                                 <div className="text-xl font-[Abel]" >
                                                   Crafting responsive, high-performance websites tailored to your business needs. We build <br />
                                                   with the latest technologies to ensure your online presence is fast, secure, and scalable
                                </div>
                        </div>
                        
                         
                      </div>
                      <div className='flex items-center justify-center gap-5 w-1/2' > 
                               <div>
                                      <img className='h-24' src={uiIcon} />
                               </div>
                        <div className='flex gap-4 flex-col' >
                                <div className="text-5xl" >
                                     UI/UX
                                </div>
                                 <div className="text-xl font-[Abel]" >
                                                   Designing user-centric interfaces that are not only visually appealing but also intuitive and <br />
                                                    seamless. Elevate your user experience with our expert design solutions.
                                </div>
                        </div>
                        
                         
                      </div>
                </div> 
                <br></br>
                <svg width="100%" height="1" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" stroke-width="0.5" />
                </svg>

                <br></br>
                <div className='flex items-center justify-evenly py-10' >
               
                      <div className='flex items-center justify-center gap-5 w-1/2' > 
                               <div>
                                      <img className='h-24' src={designicon} />
                               </div>
                        <div className='flex gap-4 flex-col' >
                                <div className="text-5xl" >
                                     GRAPHIC DESIGN
                                </div>
                                 <div className="text-xl font-[Abel]" >
                                                   Creating visually compelling designs that resonate with your brand identity. From logos to <br />
                                 packaging, our designs communicate your message with impact      
                                 </div>
                        </div>
                        
                         
                      </div>
                      <div className='flex items-center justify-center gap-5 w-1/2' > 
                               <div>
                                      <img className='h-24' src={gameicon} />
                               </div>
                        <div className='flex gap-4 flex-col' >
                                <div className="text-5xl" >
                                    GAME DEVELOPMENT
                                </div>
                                 <div className="text-xl font-[Abel]" >
                                                   Bringing your game concepts to life with immersive gameplay, stunning graphics, and smooth <br />
                                                   performance.We create engaging experiences across various platforms
                                 </div>
                        </div>
                        
                         
                      </div>
                </div> 
                <br></br>
                <div className='px-20' >
                <svg width="100%" height="1" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" stroke-width="0.5" />
                </svg>
                </div>
                <br></br>
                <div className='flex items-center justify-evenly py-10' >
               
                      <div className='flex items-center justify-center gap-5 w-1/2' > 
                               <div>
                                      <img className='h-24' src={mobileicon} />
                               </div>
                        <div className='flex gap-4 flex-col' >
                                <div className="text-5xl" >
                                     APP DEVELOPMENT
                                </div>
                                 <div className="text-xl font-[Abel]" >
                                                   From concept to launch, we develop apps that are feature-rich, reliable, and optimized for  <br />
                                                   both Android and iOS. Let's turn your ideas into a fully functional app.           
                                </div>
                        </div>
                        
                         
                      </div>
                      <div className='flex items-center justify-center gap-5 w-1/2 ' > 
                               <div>
                                      <img className='h-24' src={product} />
                               </div>
                        <div className='flex gap-4 flex-col' >
                                <div className="text-5xl" >
                                PACKAGING & PRINT DESIGN
                                </div>
                                 <div className="text-xl font-[Abel]" >
                                                   Designing standout packaging and print materials that captivate and communicate your brand's<br />
                                                   message effectively. From packaging to posters, we create visuals that make an impact.
                               </div>
                        </div>
                        
                         
                      </div>
                </div> 
                
                
             </div>
            
             
    </div>
}