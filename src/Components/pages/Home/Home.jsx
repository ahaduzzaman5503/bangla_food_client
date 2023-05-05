import React, { useEffect } from "react";
import man from "../../../../public/Assets/home_03_01.jpg";
import { useState } from "react";
import ChefShow from "../ChefShow/ChefShow";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const chefs = useLoaderData();

  return (
    <div className="container mx-auto">
      {/* banner section */}
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={man} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="p-10">
              <h1 className="text-4xl font-bold">Chef Recipes</h1>
              <h3 className="text-3xl font-bold text-yellow-500 mt-4">
                Bring Out Your Inner Chef.
              </h3>
              <p className="py-6 text-xl ">
                What are recipes in Chef? Recipes are written in Ruby and
                contain information about everything needed to be run, changed,
                or created on a node . Recipes work as a collection of resources
                determining the configuration or policy of a node (with
                resources being a configuration element of the recipe).
              </p>
              <button className="btn btn-primary">
                <a href="/blog">View Blog</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chef section */}
      <section className="bg-base-300 py-10">
        <h1 className="text-3xl font-bold text-center py-3"> All BD Chefs </h1>

        <div className="mb-5 grid md:grid-cols-3 p-3 gap-5">
          {chefs.map((chef) => (
            <ChefShow key={chef.id} chef={chef}></ChefShow>
          ))}
        </div>
      </section>

      {/* -------------------------Extra Section One------------------- */}
      <section>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center py-3"> About Us </h1>
          <div className="grid md:grid-cols-4  gap-8 items-center mt-4 px-2 w-12/12 mx-auto">
            <div className="bg-yellow-500 p-5 rounded text-black text-center text-2xl ">
              <p>557</p>
              <p>Customer</p>
            </div>
            <div className="bg-yellow-500 p-5 rounded text-black text-center text-2xl ">
              <p>56</p>
              <p>Reviews</p>
            </div>
            <div className="bg-yellow-500 p-5 rounded text-black text-center text-2xl ">
              <p>78</p>
              <p>RECEPIES</p>
            </div>
            <div className="bg-yellow-500 p-5 rounded text-black text-center text-2xl ">
              <p>11</p>
              <p>LOCATIONS</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------Extra Section two------------------- */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-center mt-5 py-5"> Reservation </h1>
        <div className="divider"></div> 

        <div className="grid md:grid-cols-3  gap-8 items-center mt-4 px-2 w-12/12 mx-auto">
          <div className="bg-white border">
            <img
              src="https://www.chefspencil.com/wp-content/uploads/Kala-Bhuna-960x960.jpg.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className=" ">
            <div className="hero-content flex-col ">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold">BOOK YOUR TABLE</h1>
              </div>
              <div className="card bg-blue-300 text-black flex-shrink-0 w-full max-w-sm shadow-2xl ">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black font-bold text-2xl">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black font-bold text-2xl">
                        Email
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black font-bold text-2xl">
                        Date
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="17/09/2016"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black font-bold text-2xl">
                        Time
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="10:30 PM"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black font-bold text-2xl">
                        People
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="13 People"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Find A Table</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border">
            <img
              src="https://www.chefspencil.com/wp-content/uploads/Falooda-1-960x960.jpg.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
