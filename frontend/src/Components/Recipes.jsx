import React, { useEffect, useState } from 'react'

const Recipes = () => {

  const [recipeList, setRecipeList] = useState([]);

  const getRecipeData = async () => {
    const res = await fetch('http://localhost:5000/recipe/getall');
    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setRecipeList(data);
  };

  useEffect(() => {
    getRecipeData();
  }, [])
  

  const displayRecipies = () => {
    return recipeList.map(recipe => (
      <div className="col-md-3 mb-4">
        <div className="card">
          <div
            className="my-card-top"
            style={{
              backgroundImage:
                'url("https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg")'
            }}
          />
          <img class="card-img-top" src="https://static.toiimg.com/thumb/66620406.cms?width=1200&height=900" alt=""></img>
          <div className="card-body">
            <p className="fw-bold text-muted m-0"></p>
            <h4 className="">{recipe.title}</h4>
            <div>
              <i className="fas fa-star text-warning" />
              <span>4.5</span>
              <span className="fw-bold">(5354 Reviews)</span>
            </div>
            <h2 className="float-end"></h2>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">
              {" "}
              <i className="fas fa-shopping-cart" />
              &nbsp; Show Recipe👌
            </button>
            {/* <button className="btn btn-outline-primary"></button> */}
          </div>


        </div>
      </div>
    ))
  }


  return (
    <div className="container d-flex">
      <div className="row mt-4 d-flex">

        {
          displayRecipies()
        }


      </div>


    </div>

  )
}

export default Recipes