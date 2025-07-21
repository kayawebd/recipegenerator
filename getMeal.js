const cookDinner_btn = document.getElementById("cookDinner");
const meal_container = document.getElementById("recipeContainer");
cookDinner_btn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    });
  document.body.classList.add('buttonClicked');
  button.textcontent = 'Next Recipe';
});
const createMeal = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  const newInnerHTML = `
  <div class="imgContainer">
    <img src="${meal.strMealThumb}" alt="Meal Image">
    <h2>${meal.strMeal}</h2>
  </div>

  <div class="recipeInstructions">
    <div class="columns ingredient">
      <h3>Ingredients:</h3>
      <ul>
        ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
      </ul>
      <div class="primaryButton"> 
        <a href="https://www.woolworths.com.au/"> 
          <button>Shop Recipe 🛒</button>
        </a>
      </div>
    </div>

    <div class="columns method">
      <h3>Method:</h3>
      <p>${meal.strInstructions.replace(/\r\n/g, "<br><br>")}</p>
    </div>       
  </div>
  ${meal.strYoutube
      ? `
        <div class="videoRow">
          <div class="videoWrapper">
            <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(
        -11
      )}">
            </iframe>
            <div class="searchYoutubeContainer">
              <p>Search more videos on Youtube:</p>
              <div class="primaryButton">
                <a href="#" id="searchYoutube">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                    </svg> ${meal.strMeal}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      `
      : `
        <h3 class='videoUnavailable'>Video unavailable</h3>
        <div class="searchYoutubeContainer">
              <p>Search more videos on Youtube:</p>
              <div class="primaryButton">
                <a href="#" id="searchYoutube">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                    </svg> ${meal.strMeal}
                  </button>
                </a>
              </div>
            </div>
       `
    }
`;

  // SEARCH ON YOUTUBE
  meal_container.innerHTML = newInnerHTML;
  document
    .getElementById("searchYoutube")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const keyword = meal.strMeal;
      const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
        keyword
      )}`;
      window.open(searchUrl, "_blank");
    });
};


cookDinner_btn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    });

  document.body.classList.add("buttonClicked");
  cookDinner_btn.textContent = "Another Recipe";

  document.querySelector(".mainNav").classList.add("fixedBottom");
});

