'use client';

const Preloader = () => {
  const paws = [
    { id: 1, delay: '0s', pos: 'top-[20%] left-[20%]' },
    { id: 2, delay: '0.3s', pos: 'top-[40%] left-[40%]' },
    { id: 3, delay: '0.6s', pos: 'top-[60%] left-[60%]' },
    { id: 4, delay: '0.9s', pos: 'top-[80%] left-[80%]' },
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#720e9e]">
      <div className="relative w-full h-full">
        {paws.map((paw) => (
          <div
            key={paw.id}
            className={`absolute animate-footstep ${paw.pos}`}
            style={{ animationDelay: paw.delay }}
          >
            <img src="/paw.png" alt="paw" className="h-20 w-20 opacity-70 rotate-[-15deg]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preloader;