import Link from 'next/link'
import React from 'react'


const Main = () => {
  const steps = [
    { id: 1, top: '20%', left: '10%', rot: '-15deg', delay: 'd1' },
    { id: 2, top: '28%', left: '25%', rot: '15deg', delay: 'd2' },
    { id: 3, top: '38%', left: '40%', rot: '-15deg', delay: 'd3' },
    { id: 4, top: '48%', left: '55%', rot: '15deg', delay: 'd4' },
    { id: 5, top: '60%', left: '70%', rot: '-15deg', delay: 'd5' },
  ];

  return (
    <div className='relative w-full h-[700px] overflow-hidden flex items-center justify-center'>
      <img
        src="/dog.jpg"
        alt="dog"
        className='absolute inset-0 w-full h-full object-cover brightness-50'
      />
      <div className="absolute inset-0 z-10 pointer-events-none">
        {steps.map((step) => (
          <img
            key={step.id}
            src="/paw.png"
            alt="step"
            className={`absolute w-16 h-16 animate-walk ${step.delay}`}
            style={{
              top: step.top,
              left: step.left,
              transform: `rotate(${step.rot})`,
              opacity: 0
            }}
          />
        ))}
      </div>
      <div className='relative z-20 text-center'>
        <h2 className='text-white text-5xl font-bold mb-6 font-quicksand drop-shadow-lg'>
          Happy Paws, Happy Hearts
        </h2>
        <Link
          href="/choose"
          className='bg-amber-400 text-purple-900 font-bold px-10 py-4 rounded-full text-xl hover:scale-110 transition-all shadow-xl inline-block'
        >
          Choose your friend
        </Link>
      </div>

    </div>
  )
}

export default Main