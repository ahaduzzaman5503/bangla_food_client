import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./ChefRecipes.css";
import { AiOutlineHeart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipes = () => {
  const chefSD = useLoaderData();
  const [buttonClicked, setButtonClicked] = useState(false);

  const saveHandle = () => {
    toast("This recipe added your favorite list");
    setButtonClicked(true);
  };
  return (
    <div className="container mx-auto">
      <div className="p-5">
        <div className="apply p-10 font-bold rounded-lg bg-gray-700 shadow-2xl container mx-auto ">
          <h1 className="text-5xl text-center"> Details</h1>
        </div>

        <div className="details">
          <div className="bg-gray-500 p-2 justify-center shadow-2xl rounded-lg mb-5 flex items-center">
            <img
              className="w-56 h-auto mb-3 rounded-lg shadow-2xl"
              src={chefSD.chef_picture}
            />
          </div>

          <div className=" p-4 rounded-lg mb-5">
            <div className="bg-gray-50 text-start rounded-lg shadow-lg p-5 ">
              <h3 className="text-xl text-black font-semibold mb-3">
                Name: {chefSD.chef_name}
              </h3>
              <h3 className="text-xl text-black font-semibold mb-3">
                Recipes: {chefSD.num_recipes}
              </h3>
              <h3 className="text-xl text-black font-semibold mb-3">
                Like: {chefSD.likes}
              </h3>
              <h3 className="text-xl text-black font-semibold mb-3">
                Years of Experience: {chefSD.years_of_experience}
              </h3>
              <h3 className="text-xl text-black font-semibold mb-3">
                Descriptions: {chefSD.bio}
              </h3>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="mb-5 grid md:grid-cols-2 p-3 gap-5">
          {chefSD.recepi.map((reci) => (
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={reci.recepe_picture} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{reci.recepe_name}</h2>
                <p> {reci.recepe_bio} </p>
                <div>
                  <button
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-5 rounded-lg font-semibold mt-5 hover:text-yellow-300 duration-300 text-center text-xl"
                    onClick={saveHandle}
                    disabled={buttonClicked}
                  >
                    <AiOutlineHeart />
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
