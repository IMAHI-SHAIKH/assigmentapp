import React from 'react';
import Header from './components/Header';
import Image from 'next/image/image.png';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center">
      <Header />
        
      <div className=" flex flex-row h-[80%] lg:ml-[176px]">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-2/3 flex flex-col lg:text-left ml-3">
          
          {/* Heading */}
          <h1 className="text-[#000000f4] font-bold text-[28px] md:text-[32px] lg:text-[40px] lg:w-[496px] pt-[40px] lg:pt-[182px]">
            THE ART OF FINE JEWELRY
          </h1>
          
          {/* Paragraph */}
          <p className="text-[#6b5c24] font-medium text-[15px] lg:text-[26px] max-w-[900px] h-auto lg:h-[144px] flex pt-[8px] pb-6 lg:mb-14">
          Our collections is  exemplifies the pinnacle of  craftsmanship,
           where each piece is meticulously designed to evoke both beauty and sophistication. 
           From delicate necklaces to statement chains,ring and anything every item is  masterpiece.
          </p>
          
          {/* Button */}
          <button className="bg-[#735f16] text-[#FFFFFF] font-medium text-[18px] lg:text-[24px] p-[10px]  rounded-[10px] w-[200px] md:w-[250px] lg:w-[288px] lg:mx-0">
            SHOP NOW
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="relative lg:w-1/3 flex justify-center items-center mt-20 pr-12">
          
          {/* Border inside the image */}
          <div className="relative h-auto">
            <div className="m-[5%] absolute inset-0 border-[1px] border-[#FFFFFF] rounded-[50px_0px_50px_0px] lg:rounded-[150px_0px_150px_0px]"></div>
  
            {/* Image */}
            <img 
              src="./image/image.png" 
              className="object-contain rounded-[40px_0px_50px_0px] lg:rounded-[150px_0px_150px_0px]"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;