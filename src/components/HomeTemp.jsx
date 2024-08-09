import React from 'react';

const HomeTemp = () => {
  return (
    <div className="relative bg-cover bg-center h-screen border-b "  style={{ backgroundImage: "url('https://cache.careers360.mobi/media/article_images/2021/12/30/FHwW1UHVUAEGehz_1.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Empowering Minds,Shaping Futures</h1>
        <p className="text-xl mb-8 max-w-2xl">
             Join us at Educare Institute of Education   Join us at Educare Institute <br/> for a transformative learning experience. 
        </p>
        <div>
          <a href="/programs" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg m-2">
            Explore Our Programs
          </a>
          <a href="/apply" className="bg-transparent border border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-6 rounded-lg m-2">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeTemp;
