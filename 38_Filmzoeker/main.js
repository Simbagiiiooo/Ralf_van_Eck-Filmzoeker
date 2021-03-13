// All Movies to the DOM

const listOfMovies = document.querySelector(".new-movie-list");

const addMoviesToTheDOM = (movieTask) => movieTask.map(movies => {
    const newListItem = document.createElement("li");
    listOfMovies.appendChild(newListItem);
    const image = document.createElement("img");
    image.src = movies.Poster;
    const imdbLink = document.createElement('a');
    imdbLink.href = "https://www.imdb.com/title/" + movies.imdbID;
    newListItem.appendChild(imdbLink);
    imdbLink.appendChild(image);
})
addMoviesToTheDOM(movies);

// Filters

const radioButtons = document.querySelectorAll('input.radiobtn');

const latestMovies = movies.filter(movie => movie.Year > 2013);

// Eeen contante gemaakt i.p.v. 4 ongeveer dezelfde en kleine letters van de Title naam gemaakt die overeen 
// komen in index.html
const titleFilter = (newArray) => movies.filter(movie => movie.Title.toLowerCase().includes(newArray.toLowerCase()));

const handleOnChange = radioButtons.forEach(radioButton => radioButton.addEventListener("change", () => {
    if (radioButton.value === "new") {
            listOfMovies.innerHTML = "";
            addMoviesToTheDOM(latestMovies);
            // console.log(latestMovies);
        } else{
            listOfMovies.innerHTML = "";
            addMoviesToTheDOM(titleFilter(radioButton.value));
            // console.log(titleFilter(radioButton.value));
            } 
}));
// Met titleFilter en met radioButton.value pakt de else 
//  de films die die de value van de radiobuttons in de Title naam hebben.


//  Search on input & Enter button

const fieldForInput = document.querySelector(".input");

const search = () => {
    const searchValue = fieldForInput.value;
    listOfMovies.innerHTML = "";
    addMoviesToTheDOM(titleFilter(searchValue))
    // console.log(titleFilter(searchValue))
}
fieldForInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        search()
    }
})