"use client"
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';

export default function Home() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Coding', 'Web Development', 'Software Engineering', 'Data Science', 'Machine Learning'],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []); 

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            HI <span className="font-semibold">I am Lucky Wagh</span> This is my blog website <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Latest News</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Be updated</p>
    </div>
    <div className="flex flex-wrap justify-center">

      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Stampede at Tirupati Temple</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">At least six people were killed and dozens injured in a stampede at the Lord Venkateswara Swamy temple in Tirupati, 
            Andhra Pradesh. The incident occurred when police opened the temple gates for a 10-day festival, leading to a surge of devotees.</p>
          
          
        </div>
      </div>
      {/* Standard Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Revised Tax Rates</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">The government has updated the income tax slabs under the new regime, with the 5% tax rate now applicable to annual incomes ranging from ₹300,000 to ₹700,000.
             This change aims to provide greater tax relief to middle-income groups.</p>
          
        </div>
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">India-Afghanistan Officials Meet</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">Indian and Afghan officials have held their second meeting in two months, focusing on business and humanitarian aid.
            Discussions included the use of Iran's Chabahar port for trade and India's commitment to responding to Afghanistan's urgent needs.</p>
          
        </div>
      </div>
    </div>
  </div>
</section>




<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Blog 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="/typescript.webp" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 1</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
            <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button>
          </div>
        </div>
      </div>
      {/* Blog 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 2</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
            <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button>
          </div>
        </div>
      </div>
      {/* Blog 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 3</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
            <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};








