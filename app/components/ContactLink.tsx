"use client";

import Link from 'next/link';
import React from 'react'

const ContactLink = () => {
  return (
    // <div>
    //       <a href="/contact" className='w-20 h-20 absolute top-0 bottom-0 left-0 right-0 m-auto bg-slate-400 text-white rounded-full flex items-center justify-center font-semibold'>Contact Me</a>
    // </div>

<div>
<a href="/contact" className="w-24 h-24 absolute top-0 bottom-0 left-0 right-0 m-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-semibold shadow-lg transform transition-transform hover:scale-110">
    <i className="fas fa-envelope text-2xl"></i>
</a>
</div>

    
  )
}

export default ContactLink

