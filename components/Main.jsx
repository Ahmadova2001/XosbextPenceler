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
    /* h-[500px] md:h-[700px] -> Mobildə hündürlük 500px olur ki, telefon ekranına tam otursun, böyük ekranda 700px */
    <div className='relative w-full h-[500px] md:h-[700px] overflow-hidden flex items-center justify-center'>
      <img
        src="/dog.jpg"
        alt="dog"
        className='absolute inset-0 w-full h-full object-cover brightness-50'
      />

      {/* Pəncə İzləri Bölməsi: 
        - hidden md:block klassını əlavə etdik. 
        - Bu o deməkdir ki, pəncə animasiyası mobildə yazını örtməmək üçün gizlənir, planşet və noutbukda avtomatik işə düşür.
      */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
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
      <div className='relative z-20 text-center px-4 max-w-2xl'>
        <h2 className='text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-quicksand drop-shadow-lg leading-tight'>
          Happy Paws, Happy Hearts
        </h2>
        <Link href="/pets">
          <button className="bg-[#ffb703] hover:bg-[#fb8500] text-[#720e9e] font-extrabold py-2.5 px-6 md:py-3 md:px-8 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-0.5 text-base md:text-lg">
            Choose your friend
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Main