import React from "react";
import { Link } from "react-router-dom";


const ChefShow = ({chef}) => {
  return (
    <div className="mb-3 container ">
      <div>
        <div className="bg-gray-50 text-start rounded-lg shadow-lg p-5 ">
          <img className="w-56 mb-3" src={chef?.chef_picture} alt="google1" />
          <h3 className="text-xl text-black font-semibold mb-3">
            {chef?.chef_name}
          </h3>
          <h4 className="text-lg mb-3 text-black"> Years of Experience: {chef?.years_of_experience}</h4>
          <h4 className="text-lg mb-3 text-black">Recipes Number: {chef?.num_recipes}</h4>
          <h4 className="text-lg mb-3 text-black"> Like: {chef?.likes}</h4>

          <Link to={`/chefrecipes/${chef.id}`}>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-lg font-semibold mt-5 hover:text-yellow-300 duration-300">
            View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefShow;
