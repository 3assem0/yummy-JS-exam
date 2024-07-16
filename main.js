$(".outernav").hide()
$("#list").click(function(){
    $(".outernav").toggle(400)
    $("#list").addClass('d-none')
    $(".out").removeClass('d-none')
})

$(".out").click(function(){
    $(".outernav").toggle(400)
    $(".out").addClass('d-none')
    $("#list").removeClass('d-none')  
})

// let rowData = document.getElementById("rowData");
// let searchContainer = document.getElementById("searchContainer");
// let submitBtn;

// $(document).ready(() => {
//     searchByName("").then(() => {
//         $(".loading-screen").fadeOut(500)
//         $("body").css("overflow", "visible")

//     })
// })







// function displayMeals(arr) {
//     let cartoona = "";

//     for (let i = 0; i < arr.length; i++) {
//         cartoona += `
//         <div class="col-md-3">
//                 <div onclick="getMealDetails('${arr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
//                     <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
//                     <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
//                         <h3>${arr[i].strMeal}</h3>
//                     </div>
//                 </div>
//         </div>
//         `
//     }

//     rowData.innerHTML = cartoona
// }























// async function searchByName(term) {
//     closeSideNav()
//     rowData.innerHTML = ""
//     $(".inner-loading-screen").fadeIn(300)

//     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
//     response = await response.json()

//     response.meals ? displayMeals(response.meals) : displayMeals([])
//     // $(".inner-loading-screen").fadeOut(300)

// }



// function showContacts() {
//     rowData.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
//     <div class="container w-75 text-center">
//         <div class="row g-4">
//             <div class="col-md-6">
//                 <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
//                 <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
//                     Special characters and numbers not allowed
//                 </div>
//             </div>
//             <div class="col-md-6">
//                 <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
//                 <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
//                     Email not valid *exemple@yyy.zzz
//                 </div>
//             </div>
//             <div class="col-md-6">
//                 <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
//                 <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
//                     Enter valid Phone Number
//                 </div>
//             </div>
//             <div class="col-md-6">
//                 <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
//                 <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
//                     Enter valid age
//                 </div>
//             </div>
//             <div class="col-md-6">
//                 <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
//                 <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
//                     Enter valid password *Minimum eight characters, at least one letter and one number:*
//                 </div>
//             </div>
//             <div class="col-md-6">
//                 <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
//                 <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
//                     Enter valid repassword 
//                 </div>
//             </div>
//         </div>
//         <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
//     </div>
// </div> `
//     submitBtn = document.getElementById("submitBtn")


//     document.getElementById("nameInput").addEventListener("focus", () => {
//         nameInputTouched = true
//     })

//     document.getElementById("emailInput").addEventListener("focus", () => {
//         emailInputTouched = true
//     })

//     document.getElementById("phoneInput").addEventListener("focus", () => {
//         phoneInputTouched = true
//     })

//     document.getElementById("ageInput").addEventListener("focus", () => {
//         ageInputTouched = true
//     })

//     document.getElementById("passwordInput").addEventListener("focus", () => {
//         passwordInputTouched = true
//     })

//     document.getElementById("repasswordInput").addEventListener("focus", () => {
//         repasswordInputTouched = true
//     })
// }












// function displayMeals(arr) {
//         let cartoona = "";
    
//         for (let i = 0; i < arr.length; i++) {
//             cartoona += `
//             <div class="col-md-3">
//                     <div onclick="getMealDetails('${arr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
//                         <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
//                         <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
//                             <h3>${arr[i].strMeal}</h3>
//                         </div>
//                     </div>
//             </div>
//             `
//         }
    
//         rowData.innerHTML = cartoona
//     }



// Fetch categories and display images
// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//     .then(response => response.json())
//     .then(data => {
//         const categoriesDiv = document.getElementById('categories');
//         data.categories.forEach(category => {
//             const categoryDiv = document.createElement('div');
//             categoryDiv.classList.add('col-md-3');

//             categoryDiv.innerHTML = `
//                 <div onclick="fetchMealsByCategory('${category.strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
//                     <img class="w-100" src="${category.strCategoryThumb}" alt="${category.strCategory}">
//                     <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
//                         <h3>${category.strCategory}</h3>
//                     </div>
//                 </div>
//             `;

//             categoriesDiv.appendChild(categoryDiv);
//         });
//     });

// // Fetch meals by category and display them
// function fetchMealsByCategory(category) {
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
//         .then(response => response.json())
//         .then(data => {
//             const categoriesDiv = document.getElementById('categories');
//             const mealDetailsDiv = document.getElementById('meal-details');
//             categoriesDiv.innerHTML = ''; // Clear categories
//             mealDetailsDiv.innerHTML = ''; // Clear previous details

//             data.meals.forEach(meal => {
//                 const mealDiv = document.createElement('div');
//                 mealDiv.classList.add('col-md-3');

//                 mealDiv.innerHTML = `
//                     <div onclick="fetchMealDetails('${meal.idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
//                         <img class="w-100" src="${meal.strMealThumb}" alt="${meal.strMeal}">
//                         <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
//                             <h3>${meal.strMeal}</h3>
//                         </div>
//                     </div>
//                 `;

//                 categoriesDiv.appendChild(mealDiv);
//             });
//         });
// }

// // Fetch meal details by ID and display them
// function fetchMealDetails(id) {
//     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//         .then(response => response.json())
//         .then(data => {
//             const categoriesDiv = document.getElementById('categories');
//             const mealDetailsDiv = document.getElementById('meal-details');
            
//             categoriesDiv.classList.add('hidden'); // Hide categories
//             mealDetailsDiv.classList.remove('hidden'); // Show meal details

//             const meal = data.meals[0];

//             const title = document.createElement('h2');
//             title.textContent = meal.strMeal;

//             const img = document.createElement('img');
//             img.src = meal.strMealThumb;
//             img.alt = meal.strMeal;

//             const area = document.createElement('p');
//             area.textContent = `Area: ${meal.strArea}`;

//             const category = document.createElement('p');
//             category.textContent = `Category: ${meal.strCategory}`;

//             const instructions = document.createElement('p');
//             instructions.textContent = `Instructions: ${meal.strInstructions}`;

//             const ingredientsList = document.createElement('ul');
//             for (let i = 1; i <= 20; i++) {
//                 const ingredient = meal[`strIngredient${i}`];
//                 const measure = meal[`strMeasure${i}`];
//                 if (ingredient) {
//                     const listItem = document.createElement('li');
//                     listItem.textContent = `${ingredient} - ${measure}`;
//                     ingredientsList.appendChild(listItem);
//                 }
//             }

//             const tags = document.createElement('p');
//             tags.textContent = `Tags: ${meal.strTags || 'None'}`;

//             const backButton = document.createElement('button');
//             backButton.classList.add('btn');
//             backButton.textContent = 'Back to Categories';
//             backButton.onclick = () => {
//                 mealDetailsDiv.classList.add('hidden');
//                 categoriesDiv.classList.remove('hidden');
//             };

//             mealDetailsDiv.appendChild(backButton);
//             mealDetailsDiv.appendChild(title);
//             mealDetailsDiv.appendChild(img);
//             mealDetailsDiv.appendChild(area);
//             mealDetailsDiv.appendChild(category);
//             mealDetailsDiv.appendChild(instructions);
//             mealDetailsDiv.appendChild(ingredientsList);
//             mealDetailsDiv.appendChild(tags);
//         });
// }

// // Make fetchMealDetails a global function
// window.fetchMealDetails = fetchMealDetails;
// window.fetchMealsByCategory = fetchMealsByCategory;



// Fetch categories and display images
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(response => response.json())
.then(data => {
    const categoriesDiv = document.getElementById('categories');
    data.categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('col-md-3');

        categoryDiv.innerHTML = `
            <div onclick="fetchMealsByCategory('${category.strCategory}')" class="meal">
                <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
                <div class="meal-layer">
                    <h3>${category.strCategory}</h3>
                </div>
            </div>
        `;

        categoriesDiv.appendChild(categoryDiv);
    });
});

// Fetch meals by category and display them
function fetchMealsByCategory(category) {
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(response => response.json())
    .then(data => {
        const categoriesDiv = document.getElementById('categories');
        const mealDetailsDiv = document.getElementById('meal-details');
        categoriesDiv.innerHTML = '';
        mealDetailsDiv.innerHTML = '';

        data.meals.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.classList.add('col-md-3');

            mealDiv.innerHTML = `
                <div onclick="fetchMealDetails('${meal.idMeal}')" class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <div class="meal-layer">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>
            `;

            categoriesDiv.appendChild(mealDiv);
        });
    });
}

// Fetch meal details by ID and display them
function fetchMealDetails(id) {
fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(data => {
        const categoriesDiv = document.getElementById('categories');
        const mealDetailsDiv = document.getElementById('meal-details');
        
        categoriesDiv.classList.add('hidden');
        mealDetailsDiv.classList.remove('hidden');
        mealDetailsDiv.innerHTML = '';

        const meal = data.meals[0];

        mealDetailsDiv.innerHTML = `
            <button class="btn" onclick="goBack()">Back to Categories</button>
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <p><strong>Area:</strong> ${meal.strArea}</p>
            <p><strong>Category:</strong> ${meal.strCategory}</p>
            <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
            <ul>
                ${Array.from({ length: 20 }, (_, i) => {
                    const ingredient = meal[`strIngredient${i + 1}`];
                    const measure = meal[`strMeasure${i + 1}`];
                    return ingredient ? `<li>${ingredient} - ${measure}</li>` : '';
                }).join('')}
            </ul>
            <p><strong>Tags:</strong> ${meal.strTags || 'None'}</p>
        `;
    });
}

function goBack() {
document.getElementById('categories').classList.remove('hidden');
document.getElementById('meal-details').classList.add('hidden');
}