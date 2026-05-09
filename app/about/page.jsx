import React from 'react'


const page = () => {
  return (
    <div className='relative'>
      <img src="about.jpg" alt="dog and cat" className='object-cover w-full' />
      <div className='absolute top-0'>
        <h2>About us</h2> 
        <h1></h1>
        <h3 className='text-3xl font-sans w-[500px] text- mt-40 ml-20'>At HappyPaws, we believe that every animal deserves a life filled with love, safety, and warmth. Our mission is to bridge the gap between lonely paws and open hearts.We’ve created this platform to simplify the adoption process and help rescue animals find their forever families. Adopting a pet is more than just bringing a new member home; it’s about giving a second chance at life. Your future best friend is just a click away.</h3>
      </div>
    </div>
  )
}

export default page