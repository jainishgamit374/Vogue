import React, { useState } from 'react';

const FollowLeft = ({ sendDataToParent }) => {
  const [activeImage, setActiveImage] = useState(0);

  const magazines = [
    { name: 'Vogue', img: '/public/Vogue.webp' },
    { name: 'GQ', img: '/public/gq-logo-white.webp' },
    { name: 'Traveller', img: '/public/cnt-logo-white.webp' },
    { name: 'AD', img: '/public/ad-new-logo-white.webp' },
  ];

  const handleClick = (key) => {
    setActiveImage(key);
    sendDataToParent(key);
  };

  return (
    <div className="flex w-[25%] flex-wrap items-center justify-center gap-20">
      {magazines.map((mag, index) => (
        <div key={index} className="relative overflow-hidden flex items-center justify-center w-[7vw] h-[7vw] rounded-full bg-black">
          <img src={mag.img} alt={mag.name} className="w-full object-cover object-center border" />
          <div
            onClick={() => {
              handleClick(index);
            }}
            className={`absolute bottom-0 left-1/2 ${index === activeImage ? "bg-red-500" : "bg-white"} hover:bg-red-500 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-black cursor-pointer`}
          >
            +
          </div>
        </div>
      ))}
    </div>
  );
};

export default FollowLeft;
