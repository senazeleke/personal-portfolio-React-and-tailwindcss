import React from 'react';


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>

        <p className='text-xl mt-20'> 
        Hello, I'm Sena Zeleke, a candidate software engineer passionate about crafting innovative solutions and enhancing user experiences. I'm currently refining my skills at Jimma Institute of Technology. My expertise spans multiple domains within software engineering. I am specializing in front-end development with react and getting good with back end. Additionally, I have a good start in data structures, leveraging Python to create efficient and scalable solutions and looking forward to become a software developer. I'm committed to continuous learning and thrive on collaborating to deliver impactful solutions in software engineering.
        </p>

        <br/>

        <p className='text-xl'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti repudiandae ab itaque dolor et excepturi reprehenderit, modi perspiciatis beatae provident dignissimos omnis iste similique facilis nemo. Dolore veritatis culpa assumenda quo maxime adipisci aut velit consectetur fuga iure ullam et ipsam magnam mollitia tempore enim quasi dolorem iste, tenetur odit!
        </p>
      </div>
    </div>
  );
}

export default About;
