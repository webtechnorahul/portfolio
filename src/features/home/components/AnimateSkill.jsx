import React, { useEffect, useRef, useState } from 'react'

const AnimateSkill = () => {
    const skills=[
        'full stack developer',
        'java developer',
        'backend developer',
        'devOps',
        'animation',

    ];
//     const [width, setWidth] = useState(10)
//     const [count, setCount] = useState(0)
//     const textRef=useRef(null);
// useEffect(() => {
//   const widthIncrease = setInterval(() => {
//     // 1. Advance the count state safely
//     setCount((prevCount) => prevCount + 1);
//     // 2. Safely cycle the width between 0 and 100
//     setWidth((prevWidth) => (prevWidth === 100 ? 0 : 100));
//   }, 3000);
//   return () => clearInterval(widthIncrease);
// }, []);

// // 3. Keep textRef sync pure by reacting to count changes
// useEffect(() => {
//   if (skills.length > 0) {
//     // Calculate the index safely using the remainder (%) operator
//     const currentSkillIndex = count % skills.length;
    
//     textRef.current.innerText = `${skills[currentSkillIndex]}`;
//   }
// }, [count, skills]);

  return (
    <>
    <div className='relative w-200px'>
        <h2   className="hero-role ml-5 mt-7 text-3xl font-extrabold sm:text-4xl capitalize bg-linear-to-l from-blue-400 from-80% to-white from-80% bg-clip-text text-transparent">
            java developer
        </h2>
        <div  className={` h-10  border-amber-300 absolute left-0 top-0 -z-1`}></div>
    </div>
    </>
  )
}

export default AnimateSkill