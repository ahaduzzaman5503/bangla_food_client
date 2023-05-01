import React from "react";
import man from '../../../../public/Assets/home_03_01.jpg'

const Home = () => {
  return (
    <div className="container">
      {/* banner section */}
      <div >
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={man}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="p-10">
              <h1 className="text-4xl font-bold">Chef Recipes</h1>
              <h3 className="text-3xl font-bold text-yellow-500 mt-4">Bring Out Your Inner Chef.</h3>
              <p className="py-6 text-xl ">
              What are recipes in Chef?
Recipes are written in Ruby and contain information about everything needed to be run, changed, or created on a node . Recipes work as a collection of resources determining the configuration or policy of a node (with resources being a configuration element of the recipe).
              </p>
              <button className="btn btn-primary"><a href="/blog">View Blog</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
