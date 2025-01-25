"use client";

import '../css/style.css';
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import black from '../../public/black.png'
import {motion, useInView, useScroll} from 'framer-motion';
import ProgressBar from '@ramonak/react-progress-bar';
import php from '../../public/php.png';
import python from '../../public/python.png';
import java from '../../public/java.png';
import js from '../../public/js.png';
import html from '../../public/html.png';
import css from '../../public/css.png';
import express from '../../public/express-js.png';
import nodejs from '../../public/nnode.png';
import laravel from '../../public/laravel.png';
import bootstrap from '../../public/bootstrap.png';
import mysql from '../../public/mysql.png';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


const About = () => {
  const text = "Apriansyah Wahyudi Putra"
  const view = useRef(null)
  const scrollView = useInView(view, {
    margin : '-100px 0px'
  })
  const quotes = "I'm not coding, I'm just having a conversation with the computer. Although it often doesn't understand!"

  return (
    <motion.div  className="h-full" initial={{y: "-200vh"}}
    animate={{y:"0%"}} transition={{duration:0.7, delay : 0.2}}>
    <div className="aboutContainer mx-8 lg:mx-60 md:flex md:gap-16 ">
      
    <div className="hidden md:block mt-12 md:w-1/2">
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }} 
    animate={{ opacity: 1, scale: 1, transition: { delay: 0.85, duration: 1.2 }}}
    className="md:mx-10 md:w-51 md:h-51 lg:mx-0 xl:w-[40%] xl:h-[40%] mb-16 lg:mb-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl animate-spin-slow shadow-lg"
  >
  </motion.div>
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }} 
    animate={{ opacity: 1, scale: 1, transition: { delay: 1, duration: 1.2 }}}
    className="md:mx-24 md:w-51 md:h-51 xl:ml-40 xl:w-[40%] xl:h-[40%] bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-2xl animate-spin-slow text-slate-500 px-1 shadow-lg"
  >
  </motion.div>
</div>




        <div className='md:w-1/3 lg:w-1/2'>
          <motion.h1 initial={{x:50, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1.2}} className='text-2xl font-extrabold'>Holla i am {text.split("").map((kata,i) => <motion.span key={i} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3,repeat:Infinity,delay:i * 0.03}}>{kata}</motion.span>)}</motion.h1>
          <motion.p initial={{x:50, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1.5}} className='my-6 font-semibold'>As a programmer with a passion for crafting innovative and efficient digital solutions, I specialize in web development, focusing on delivering user-friendly, scalable results. Let&apos;s collaborate and create something extraordinary together!</motion.p>
          <motion.i initial={{x:50,opacity:0}} animate={{x:0,opacity:1}}>{quotes.split("").map((text,i) => <motion.span key={i} initial={{opacity:0}} animate={{opacity:1,transition:{delay:i * 0.07}}} transition={{repeat:0}} >{text}</motion.span>)}</motion.i>

          <motion.h1 initial={{x:50,opacity:0}} animate={{x:0, opacity:1, transition:{delay:1.8}}} className='mt-8 text-2xl font-extrabold mb-6'>Programming Language and etc.</motion.h1>
          
          {/* programing language */}
          <div className='grid grid-cols-3 md:grid-cols-2 text-[10px] sm:text-xs xl:grid-cols-4 gap-2'>
            {/* skill icon and text */}

            {/* JavaScript */}
            <motion.div initial={{scale : 0}} animate={{scale : 1, transition:{delay:2}}} className='border p-1 rounded border-slate-700'>
              <div className='flex items-center gap-1'>
                <Image src={js} alt='js' className='w-6 h-6 lg:w-4 lg:h-4' />
                <span className='font-bold text-sm' >JavaScript</span>
              </div>
            </motion.div>

           

            {/* PHP */}
            <motion.div initial={{scale:0}} animate={{scale : 1, transition:{delay:2.2}}} className='border p-1 rounded border-slate-700'>
              <div className='flex items-center gap-1'>
                <Image src={php} alt='' className='w-6 h-6 lg:w-8 lg:h-8' />
                <span className='font-bold'>PHP</span>
              </div>
            </motion.div>

            {/* Pyhton */}
          

             {/* Java */}
            <motion.div initial={{scale : 0}} animate={{scale : 1, transition:{delay:2.4}}} className='border p-1 rounded border-slate-700'>
              <div className='flex items-center gap-1'>
                <Image src={java} alt='' className='w-6 h-6 lg:w-8 lg:h-8' />
                <span className='font-bold'>Java</span>
              </div>
            </motion.div>

            {/* HTML */}
            <motion.div initial={{scale : 0}} animate={{scale : 1, transition:{delay:2.5}}} className='border p-1 rounded border-slate-700'>
              <div className='flex items-center gap-1'>
                <Image src={html} alt='' className='w-6 h-6 lg:w-8 lg:h-8' />
                <span className='font-bold'>HTML</span>
              </div>
            </motion.div>

            {/* CSS */}
            <motion.div initial={{scale : 0}} animate={{scale : 1, transition:{delay:2.6}}} className='border p-1 rounded border-slate-700'>
              <div className='flex items-center gap-1'>
                <Image src={css} alt='' className='w-6 h-6 lg:w-8 lg:h-8' />
                <span className='font-bold'>CSS</span>
              </div>
            </motion.div>

            {/* NextJS */}
            <motion.div initial={{scale : 0}} animate={{scale : 1, transition : {delay : 2.7}}} className='border p-1 rounded border-slate-700'>
                <div className='flex items-center gap-1'>
                  <svg className='w-6 h-6 lg:w-8 lg:h-8' fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_950_641)"><path d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z" fill="black"/></g><defs><clipPath id="clip0_950_641"><rect fill="white" height="24" width="24"/></clipPath></defs></svg>
                  <span className='font-bold'>NextJS</span>
                </div>
              </motion.div>

              {/* ReactJs */}
              <motion.div initial={{scale : 0}} animate={{scale : 1, transition : {delay : 2.8}}} className='border p-1 rounded border-slate-700'>
                <div className='flex items-center gap-1'>
                  <svg  className='fill-sky-400 w-6 h-6 lg:w-8 lg:h-8' role="img" viewBox="0 0 24 24" width={30} height={30} xmlns="http://www.w3.org/2000/svg"><title/><path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"/></svg>
                  <span className='font-bold'>ReactJS</span>
                </div>
              </motion.div>        

              {/* Laravel */}
              <motion.div initial={{scale : 0}} animate={{scale : 1, transition : {delay : 3.2}}} className='border p-1 rounded border-slate-700'>
                <div className='flex items-center gap-1'>
                  <Image src={laravel} alt='laravel' className='w-6 h-6 lg:w-8 lg:h-8' />
                  <span className='font-bold'>Laravel</span>
                </div>
              </motion.div>

              {/* TailwindCSS */}
              <motion.div initial={{scale : 0}} animate={{scale : 1, transition : {delay : 3.3}}} className='border p-1 rounded border-slate-700'>
                <div className='flex items-center gap-1'>
                  <svg className='fill-sky-400 w-6 h-6 lg:w-8 lg:h-8' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"/></svg>
                  <span className='font-bold'>TailwindCSS</span>
                </div>
              </motion.div>

              {/* Bootstrap */}
              <motion.div initial={{scale : 0}} animate={{scale : 1, transition : {delay : 3.4}}} className='border p-1 rounded border-slate-700'>
                <div className='flex items-center gap-1'>
                  <Image src={bootstrap} alt='bootstrap' className='w-6 h-6 lg:w-8 lg:h-8' />
                  <span className='font-bold'>Bootstrap</span>
                </div>
              </motion.div>
           
              {/* MySQl */}
              <motion.div initial={{scale : 0}} animate={{scale : 1, transition : {delay : 3.6}}} className='border p-1 rounded border-slate-700'>
                <div className='flex items-center gap-1'>
                  <Image src={mysql} alt='mysql' className='w-6 h-6 lg:w-8 lg:h-8' />
                  <span className='font-bold'>MySQL</span>
                </div>
              </motion.div>

            

             

          </div>
          
          
          </div>
    </div>
    </motion.div>
  )
}

export default About;
