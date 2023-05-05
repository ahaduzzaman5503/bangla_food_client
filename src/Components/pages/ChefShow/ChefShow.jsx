import React from "react";
import { Link } from "react-router-dom";

const ChefShow = ({ chef }) => {
  return (
    <div className="mb-3 container ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={chef?.chef_picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-left">
        <h3 className="text-xl text-white font-semibold mb-3">
              {chef?.chef_name}
            </h3>
            <h4 className="text-lg mb-3 text-white">
              {" "}
              Years of Experience: {chef?.years_of_experience}
            </h4>
            <h4 className="text-lg mb-3 text-white">
              Recipes Number: {chef?.num_recipes}
            </h4>
            <h4 className="text-lg mb-3 text-white"> Like: {chef?.likes}</h4>

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
