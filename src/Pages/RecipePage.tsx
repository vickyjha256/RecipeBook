import { RecipeType } from "@/Types/Index";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const RecipePage = () => {
  const { recipeid } = useParams();

  // const [recipe, setrecipe] = useState();
  const [recipe, setrecipe] = useState<RecipeType>(); // Here, how we pass the type to useState.

  const fetchRecipe = async () => {
    const response = await fetch(`https://dummyjson.com/recipes/${recipeid}`);
    const data = await response.json();

    setrecipe(data);
    console.log(data);
  }

  useEffect(() => {
    if (recipeid) {
      fetchRecipe();
    }
  });

  if (!recipe) return <> No recipe found.</>


  return (
    <>
      {/* <Link to={"/"}> ⬅️ Back to all recipes </Link> */}

      <div className="xl:px-48 px-10 pb-12 fancyGradient">
        <div className="grid xl:grid-cols-2 pb-10 xl:pb-20">
          <div className="pt-12 xl:px-12">
            <Link to={"/"} className="text-2xl"> ⬅️ Back to all recipes </Link>
            <h1 className="text-4xl lg:text-6xl my-8 uppercase"> {recipe.name} </h1>

            <div className="grid grid-cols-3 gap-12">
              <div className="flex flex-col">
                <p className="text-xl lg:text-3xl uppercase"> 🍽️ Serves</p>
                <p className="text-gray-800 text-2xl lg:text-3xl font-bold"> {recipe.servings}</p>
              </div>

              <div className="flex flex-col">
                <p className="text-xl lg:text-3xl uppercase"> ⏳ Prep Time</p>
                <p className="text-gray-800 text-2xl lg:text-3xl font-bold"> {recipe.prepTimeMinutes} MIN</p>
              </div>

              <div className="flex flex-col">
                <p className="text-xl lg:text-3xl uppercase"> 🧑🏻‍🍳 Cook Time</p>
                <p className="text-gray-800 text-2xl lg:text-3xl font-bold"> {recipe.cookTimeMinutes} MIN</p>
              </div>

              <div className="flex flex-col">
                <p className="text-xl lg:text-3xl uppercase"> 🍔 Cuisine</p>
                <p className="text-gray-800 text-2xl lg:text-3xl font-bold"> {recipe.cuisine} </p>
              </div>

              <div className="flex flex-col">
                <p className="text-xl lg:text-3xl uppercase"> 🔥 Difficulty</p>
                <p className="text-gray-800 text-2xl lg:text-3xl font-bold"> {recipe.difficulty} </p>
              </div>

            </div>

          </div>

          <div className="py-4 mx-auto">
            <img src={recipe.image} width={400} height={400} className="w-96 h-96 lg:h-[600px] lg:w-[600px]" />
          </div>

        </div>

        <div className="grid xl:grid-cols-2">
          <div className="xl:px-12">
            <h2 className="uppercase text-5xl my-12"> Ingredients</h2>
            <div className="flex flex-col divide-y divide-orange-800">
              {
                recipe.ingredients.map((ingredient: string, index: number) => {
                  return <>
                    <div className="py-2" key={`${ingredient}-${index}`}>
                      <ul className="">
                        <li className="text-1xl"> {ingredient} </li>
                      </ul>
                    </div>
                  </>
                })
              }
            </div>
          </div>

          <div className="xl:px-12">
            <h2 className="uppercase text-5xl my-12"> Instructions</h2>
            <div className="flex flex-col">
              {
                recipe.instructions.map((ingredient: string, index: number) => {
                  return <>
                    <div className="py-2" key={`${ingredient}-${index}`}>
                      <ul className="list-disc">
                        <li className="text-1xl"> {ingredient} </li>
                      </ul>
                    </div>
                  </>
                })
              }
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default RecipePage;