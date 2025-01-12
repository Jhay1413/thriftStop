import { Star } from 'lucide-react';
import { motion, useInView } from 'motion/react';
export const LandingPage = () => {
  return (
    <div className="flex  flex-col gap-8  pt-2 w-full min-h-screen !scroll-smooth">
      <section className="flex flex-col w-full xl:max-h-screen">
        <div className="flex items-center gap-4 w-full border-b-2 py-2 px-4 lg:px-12 xl:px-24">
          <img src="/ThriftStop.svg" className="w-8 md:w-12 lg:w-16 h-full" />
          <header className="flex flex-col w-full gap-2">
            <div className="hidden lg:flex justify-end items-center ">
              <div className="flex justify-start gap-4 items-center text-[#767676]">
                <a href="/" className="hover:text-[#FF914D]">
                  Find ThriftStop
                </a>
                <a href="/" className="hover:text-[#FF914D]">
                  Contact
                </a>
              </div>
            </div>
            <hr className="hidden lg:block border-t border-gray-300" />
            <div className="flex w-full justify-between lg:justify-start gap-8 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-menu lg:hidden w-4 md:w-8"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>

              <div className="hidden lg:flex grow justify-start items-center gap-4 text-[#333] font-semibold">
                <a href="/" className="hover:text-[#FF914D]">
                  Products
                </a>
                <a href="/" className="hover:text-[#FF914D]">
                  Inspirations
                </a>
                <a href="/" className="hover:text-[#FF914D]">
                  Services
                </a>
                <a href="/" className="hover:text-[#FF914D]">
                  Professionals
                </a>
                <a href="/" className="hover:text-[#FF914D]">
                  Magazine
                </a>
                <a href="/" className="hover:text-[#FF914D]">
                  Vitra Campus
                </a>
                <a href="/" className="hover:text-[#FF914D]">
                  About ThriftStop
                </a>
              </div>
              <div className="hidden items-center lg:flex  gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-search w-8 h-8 hover:text-[#FF914D]"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-user-round w-8 h-8 hover:text-[#FF914D]"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
              </div>
            </div>
          </header>
        </div>

        <section className="grow flex bg-blue-500 overflow-hidden relative ">
          <img
            src="/1st-section.jpg"
            className="object-cover w-full object-center"
          />

          <div className="w-full grow h-full absolute bg-black/20 hover:bg-black/80 flex items-center justify-center transition-colors duration-500 text-white group">
            <div className="w-[90%] lg:w-[50%] text-center flex flex-col gap-2 md:gap-8 ">
              <h1 className="text-2xl md:text-4xl xl:text-6xl translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ">
                Discover Unique Finds
              </h1>
              <div className="opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 flex flex-col items-center gap-8">
                <h1 className="text-xs md:text-lg">
                  We invite you to explore this inspiring thriftshop collection
                  and discover unique finds and limited editions available
                  online and at participating locations.
                </h1>
                <button className="w-60 rounded-sm text-xs md:text-xl lg:md:text-2xl py-2 text-center  bg-white text-[#333] md:hover:bg-[#FF914D] md:hover:text-white transition-colors duration-700">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>

      <motion.section
        initial={{
          opacity: 0,
          y: 100,
        }} // Starts as invisible
        whileInView={{ opacity: 1, y: 0 }} // When in view, becomes visible
        transition={{ duration: 2, ease: 'easeInOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-8 lg:gap-16 items-center w-full justify-center px-4 lg:px-24  "
      >
        <h1 className="text-2xl lg:text-6xl font-thin">Explore Our Collection</h1>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8  ">
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }} // Starts as invisible
            whileInView={{ opacity: 1, y: 0 }} // When in view, becomes visible
            transition={{ duration: 2, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative w-full overflow-hidden">
              <img
                src="/furnitures.jpg"
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <p className="md:text-2xl text-lg font-semibold mb-2">
                Stylish Furniture for Every Home
              </p>
              <p className="text-sm md:text-base mb-4">
                Discover a wide range of high-quality, modern furniture designed
                to suit any space. Whether you're decorating your living room or
                creating the perfect office setup, we have something for you.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }} // Starts as invisible
            whileInView={{ opacity: 1, y: 0 }} // When in view, becomes visible
            transition={{ duration: 2, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative w-full overflow-hidden">
              <img
                src="/clothes.jpg"
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <p className="md:text-2xl text-lg font-semibold mb-2">
                Unique Thrift Finds for Every Style
              </p>
              <p className="text-sm md:text-base mb-4">
                Explore our curated collection of pre-loved fashion, offering
                one-of-a-kind pieces that are both sustainable and stylish. Find
                your next wardrobe favorite today!
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }} // Starts as invisible
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative w-full overflow-hidden">
              <img
                src="/shoes.jpg"
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <p className="md:text-2xl text-lg font-semibold mb-2">
                Step Into Style with Pre-Loved Shoes
              </p>
              <p className="text-sm md:text-base mb-4">
                Discover a wide variety of second-hand shoes that combine
                comfort, style, and sustainability. From vintage classics to
                modern favorites, find your perfect pair today!
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }} // Starts as invisible
            whileInView={{ opacity: 1, y: 0 }} // When in view, becomes visible
            transition={{ duration: 2, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative w-full overflow-hidden">
              <img
                src="/decor.jpg"
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <p className="md:text-2xl text-lg font-semibold mb-2">
                Elevate Your Space with Unique Pre-Loved Décor.
              </p>
              <p className="text-sm md:text-base mb-4">
                Discover a curated selection of timeless home décor that adds
                character and warmth to any space.
              </p>
            </div>
          </motion.div>
        </div>
        <a
          href="/shop"
          className="inline-block mt-auto border-2 border-[#FF914D]  text-2xl lg:text-4xl       text-black hover:text-white font-thin lg:px-12 lg:py-2 px-4 py-2 rounded-full  hover:bg-orange-600 transition-colors duration-300"
        >
          Shop Now
        </a>
      </motion.section>
      <motion.section
        initial={{
          opacity: 0,
          y: 100,
        }} // Starts as invisible
        whileInView={{ opacity: 1, y: 0 }} // When in view, becomes visible
        transition={{ duration: 2, ease: 'easeInOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="lg:h-screen flex bg-blue-500 overflow-hidden relative "
      >
        <img src="/goals.jpg" className="object-cover w-full object-center" />

        <div className="w-full  h-full absolute bg-black/20 hover:bg-black/80 flex items-center justify-center transition-colors duration-500 text-white group">
          <div className="w-[90%] lg:w-[50%] text-center justify-center items-center flex flex-col gap-2 md:gap-8 ">
            <h1 className="text-2xl md:text-4xl xl:text-6xl translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
              What Are ThriftStop's Goals?
            </h1>
            <div className="opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 flex flex-col items-center gap-8">
              <h1 className="text-xs md:text-lg">
                Discover a world of sustainable fashion, timeless charm, and
                unique treasures. Whether you're refreshing your wardrobe,
                seeking distinctive home décor, or uncovering hidden gems,
                ThriftStop has something special for everyone. Celebrate the joy
                of breathing new life into pre-loved items while embracing
                eco-conscious and budget-friendly shopping. Every piece has a
                story, and every purchase creates a positive impact. Shop
                thoughtfully, stylishly, and sustainably with ThriftStop!
              </h1>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{
          opacity: 0,
          y: 100,
        }} // Starts as invisible
        whileInView={{ opacity: 1, y: 0 }} // When in view, becomes visible
        transition={{ duration: 2, ease: 'easeInOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-8 lg:gap-12 lg:h-screen   items-center w-full px-4 lg:px-24 pb-4   "
      >
        <h1 className="text-2xl lg:text-6xl font-thin text-center">Your Voice Matters</h1>
        <h1 className="text-xl lg:text-3xl  font-thin text-center">
          See what our customers are saying and share your feedback too!
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full h-full">
          <div className="flex flex-col gap-4 shadow-lg w-full h-full p-8 rounded-lg hover:scale-110 transition duration-500">
            <div className="flex justify-start gap-2 ">
              <Star color="#ebef0b" />
              <Star color="#ebef0b" />
              <Star color="#ebef0b" />
              <Star color="#ebef0b" />
              <Star color="#ebef0b" />
            </div>
            <h1 className="text-lg lg:text-2xl text-blue-800 font-semibold">
              "Highly Recommended!"
            </h1>
            <p className="text-justify text-gray-500 text-sm xl:text-lg">
              I ordered a product, and it arrived earlier than expected. The
              packaging was great, and the quality exceeded my expectations.
              Will definitely shop again!
            </p>
            <div className="mt-auto flex gap-4  ">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-blue-800 overflow-hidden p-1 ">
                <div className='w-full h-full rounded-full overflow-hidden'>

                <img
                  src="/sample1.jpg"
                  className="object-cover w-full h-full"
                />
                </div>
              </div>
              <div className='flex flex-col justify-center'>
                <h1 className='font-semibold text-base lg:text-lg text-blue-800'>Aaron Smith</h1>
                <p className='text-gray-500 lg:text-base text-sm'> Austin, Texas</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 shadow-lg w-full h-full p-8 rounded-lg hover:scale-110 transition duration-500">
            <div className="flex justify-start gap-2 ">
              <Star color="#ebef0b" />
              <Star color="#ebef0b" />
              <Star color="#ebef0b" />
              <Star color="#ebef0b" />
              <Star color="#ebef0b" />
            </div>
            <h1 className="text-lg lg:text-2xl text-blue-800 font-semibold">
              "Great Customer Support"
            </h1>
            <p className="text-justify text-gray-500 text-sm lg:text-lg">
            I had an issue with my order, but the support team resolved it quickly and professionally. Thanks for the excellent service!
            </p>
            <div className="mt-auto flex gap-4  ">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-blue-800 overflow-hidden p-1 ">
                <div className='w-full h-full rounded-full overflow-hidden'>

                <img
                  src="/sample2.jpg"
                  className="object-cover w-full h-full"
                />
                </div>
              </div>
              <div className='flex flex-col justify-center'>
                <h1 className='font-semibold text-base lg:text-lg text-blue-800'>Emma Watson</h1>
                <p className='text-gray-500 lg:text-base text-sm'>New York, USA
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 shadow-lg w-full h-full p-8 rounded-lg hover:scale-110 transition duration-500">
            <div className="flex justify-start gap-2 ">
              <Star color="#ebef0b" />
              <Star color="#ebef0b" />
              <Star color="#ebef0b" />
              <Star color="#ebef0b" />
              <Star color="#ebef0b" />
            </div>
            <h1 className="text-lg lg:text-2xl text-blue-800 font-semibold">
              "User-Friendly Website"
            </h1>
            <p className="text-justify text-gray-500 text-sm xl:text-lg">
            The website is so easy to navigate, and I found everything I needed in just a few clicks. Love the smooth checkout process too!
            </p>
            <div className="mt-auto flex gap-4  ">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-blue-800 overflow-hidden p-1 ">
                <div className='w-full h-full rounded-full overflow-hidden'>

                <img
                  src="/sample3.jpg"
                  className="object-cover w-full h-full"
                />
                </div>
              </div>
              <div className='flex flex-col justify-center'>
                <h1 className='font-semibold text-base lg:text-lg text-blue-800'>Sophia Martinez</h1>
                <p className='text-gray-500 lg:text-base text-sm'>Sydney, Australia</p>
              </div>
            </div>
          </div>
          
        </div>
      </motion.section>
    </div>
  );
};
