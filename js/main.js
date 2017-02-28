//jshint esversion:6
var movieDataBase = { //The mother of all objects that containts arrays, functions, prototype etc.
  prototype:{}, //This is the object prototype that are being used/copied when a new movie is created.
  movies: [ //This is my 'Database' that contains all the movies and will contain all new movies that will be created.
    {
      title: "Logan",
      year: 2017,
      genre: ["Action", "Drama", "Sci-Fi"],
      ratings: [9, 8, 9, 9, 9, 7],
      avgRatings: [],
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MjkzMjczMV5BMl5BanBnXkFtZTgwNDk4NjYyMTI@._V1_SY1000_CR0,0,676,1000_AL_.jpg"
    },
    {
      title: "Kong: Skull Islands",
      year: 2017,
      genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      ratings: [8, 7, 6, 7 ,8],
      avgRatings: [],
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwMzI5ODEwNF5BMl5BanBnXkFtZTgwNjAzNjI2MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
      title: "Uncertain",
      year: 2015,
      genre: ["Documentary", "Comedy", "Drama"],
      ratings: [6, 8, 9, 8, 7],
      avgRatings: [],
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMGViNGQwNWEtYmQxZi00MTc5LThjYjctNzE3M2ExZDZjNjAxXkEyXkFqcGdeQXVyMTM2MzgyOTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
      title: "Arrival",
      year: 2016,
      genre: ["Drama", "Mystery", "Sci-Fi"],
      ratings: [8, 10, 7, 7, 8],
      avgRatings: [],
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SY1000_CR0,0,640,1000_AL_.jpg"
    },
  	{
  		title: "Transformers: Age of Extinction",
  		year: 2014,
  		genre: ["Action", "Adventure", "Sci-Fi"],
  		ratings: [6, 3, 4, 5],
  		avgRatings: [],
  		cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwNTg1MTA5Nl5BMl5BanBnXkFtZTgwOTg2OTM4MTE@._V1_SY1000_CR0,0,640,1000_AL_.jpg"
  	},
  	{
  		title: "The Machinist",
  		year: 2004,
  		genre: ["Action", "Drama", "History"],
  		ratings: [6, 7, 4, 6, 7],
  		avgRatings: [],
  		cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjk1NzBlY2YtNjJmNi00YTVmLWI2OTgtNDUxNDE5NjUzZmE0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_.jpg"
  	},
  	{
  		title: "Tangled",
  		year: 2010,
  		genre: ["Action", "Drama", "Sci-Fi"],
  		ratings: [6, 7, 6, 9, 8],
  		avgRatings: [],
  		cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_.jpg"
  	},
  	{
  		title: "Despicable Me 2",
  		year: 2013,
  		genre: ["Animation", "Comedy", "Family"],
  		ratings: [6, 7, 8, 6],
  		avgRatings: [],
  		cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjAyNTcyMF5BMl5BanBnXkFtZTgwODQzMjQ3MDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  	},
    {
      title: "How to Train Your Dragon",
      year: 2010,
      genre: ["Animation", "Adventure", "Family"],
      ratings: [6, 8, 9, 8, 7],
  		avgRatings: [],
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SY1000_CR0,0,672,1000_AL_.jpg"
    },
    {
    	title: "Fifty Shades Darker",
    	year: 2017,
    	genre: ["Drama", "Romance"],
    	ratings: [5, 4, 3, 5, 4],
  		avgRatings: [],
    	cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5NTk0Njg2N15BMl5BanBnXkFtZTgwNzk5Nzk3MDI@._V1_SY1000_CR0,0,631,1000_AL_.jpg"
    },
    {
    	title: "Jurassic World",
    	year: 2015,
    	genre: ["Action", "Adventure", "Sci-Fi"],
    	ratings: [7, 8, 8, 9, 7],
  		avgRatings: [],
    	cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5MTE0MTk3Nl5BMl5BanBnXkFtZTgwMjczMzk2NTE@._V1_SY1000_CR0,0,631,1000_AL_.jpg"
    },
    {
    	title: "Dumb Dumber To",
    	year: 2014,
    	genre: ["Comedy"],
    	ratings: [7, 8, 8, 9, 7],
  		avgRatings: [],
			cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMzA0MzAyMF5BMl5BanBnXkFtZTgwMjMyNjcwMjE@._V1_SY1000_CR0,0,631,1000_AL_.jpg"
    },
    {
    	title: "The Hangover",
    	year: 2009,
    	genre: ["Comedy"],
    	ratings: [7, 8, 6, 5, 7],
  		avgRatings: [],
			cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_.jpg"
    },
    {
    	title: "Dawn of the Planet of the Apes",
    	year: 2014,
    	genre: ["Action", "Adventure", "Drama", "Sci-Fi"],
    	ratings: [7, 8, 7, 8, 9, 10],
  		avgRatings: [],
			cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwODk3NDc1N15BMl5BanBnXkFtZTgwNTc1NjQwMjE@._V1_SY1000_SX675_AL_.jpg"
    },
    {
    	title: "The Godfather",
    	year: 1972,
    	genre: ["Crime", "Drama"],
    	ratings: [7, 9, 7, 8, 9, 10],
  		avgRatings: [],
			cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,704,1000_AL_.jpg"
    }
  ],
  /*submitMovie() This function will be called whenever a user wants to submit/create a
  new movie and push it into the database movie array, this function
  will get all the values within the form and set an variable to each
  value and send it to the create function*/
  submitMovie(){
    //trim() will cut any spaces before and after a string
		const title = document.getElementById('title').value.trim();
		const year = parseInt(document.getElementById('year').value);
    //split(',') will split each word separated by a comma
		const genre = document.getElementById('genre').value.split(',');
		const cover = document.getElementById('cover').value;
		const genreArr = [];
    //Title and year is required to create a moive
		if(title && year){
      /*Self invoked arrow function that will push every
      genre into genreArr and return/call function create()
      with some parameters that contains information about the movie*/
			(() => {
    		for (let i = 0; i < genre.length; i++){
		    	genreArr.push(genre[i].trim());
		    }
        //create() is called and will have access to parameters as below
				return this.create(title, year, genreArr, cover);
			})();
		} else {
      //Something went wrong...
			console.log('Errorrrrrr!!!');
		}
		document.getElementById('forms').reset();
  },
  /*create() This function/constructor will recive variables/parameters from submitMovie and
  define what each variable will be in its object after it has been created and
  pushed into movies array*/
  create(title, year, genreArr, cover){
    //A new object will be created according to this prototype type wich in this case is an object{}
    const movie = Object.create(this.prototype);
    //the title parameter will be the title of the movie
    movie.title = title;
    movie.year = year;
    movie.genre = genreArr;
    //a new array is defined and created within the object, this will hold users ratings in the future for this object
    movie.ratings = [];
    //same goes for this array but instead this will hold the average rating of the ratings array
    movie.avgRatings = [];
    /*if the user didnt apply any url for this movie this cover will have a placeholder
    so that we wont have any errors in the image section of this object*/
    movie.cover = cover || "https://lbn.voxcinemas.com/assets/images/placeholder-poster-480x686.jpg";
    //finally we push this new object into the movies array
    this.movies.push(movie);
		let movieTitle = this.movies;
    //render() function is called and will render all of the movies within the movies array of this object to HTML
    return this.render(movieTitle);
  },
  /*rateMovie() This function will be called when a user clicks the "+1" button
  on each movie card and it will prompt/ask the user to rate the movie
  between 1-10. This function takes an event as a parameter*/
  rateMovie(event){
    //Users input will be stored in this variable.
  	let userRate = parseInt(prompt('Ange ett betyg mellan 1-10'));
    //This will validate if the users input is higher than 0 and smaller or equal to 10
  	if(userRate > 0 && userRate <= 10){
      /*The event target is pointed out and stored in a variable,
      we can use this later to see if this elements innerHTML (movie title)
      matches with one of the movies title in movies array*/
  		let e = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerHTML;
			let sum = 0;
      //Looping through the movies array
  		for(let i = 0; i < this.movies.length; i++){
        //If event targets innerHTML (movie title) is equal to this movie title
  			if(e === this.movies[i].title){
          //Push users rating to this movies ratings
  				this.movies[i].ratings.push(userRate);
          //Loop through this movies ratings
					for(let j = 0; j < this.movies[i].ratings.length; j++){
            //Variable sum will contain the total of all ratings
						sum += this.movies[i].ratings[j];
					}
          //Variable avgRate will hold the new average rating for this movie
					let avgRate = sum/this.movies[i].ratings.length;
          //This movies avgRatings array will clear current average rating...
					this.movies[i].avgRatings.pop();
          //...and push the new average rating for this movie
					this.movies[i].avgRatings.push(avgRate.toFixed(1));
          //event.target will put/render the new value into HTML
          event.target.parentNode.childNodes[4].innerText =
          //toFixed(1) makes the average rating only contain one decimal
          `Ratings: ${avgRate.toFixed(1)}`;
				}
  		}
  	} else {
      //If user input (rating) is lower then 1 or higher then 10 this error will be alerted
  		alert('Betygsättning ej godkänd');
  	}
  },
  /*getTopRatedMovie() This function will be calle if the user wants to see wich of
  all the movies within the movies array has the highest average rating*/
  getTopRatedMovie(){
    //This will get the id of 'movieView' within the html document and set the HTML to blank ''
		document.getElementById('movieView').innerHTML = '';
    //A new array is created that will hold all the movies average rating array
		let highest = [];
    //Looping through this objects movies array
		for(let i = 0; i < this.movies.length; i++){
			highest.push(this.movies[i].avgRatings);
		}
    //This function will check if current arrays average rating is higher then the current one
		highest.sort(function(a, b){
			return b-a;
		});
    //Then this will check if this movies average rating has the value of the highest average rating...
		for(let i = 0; i < this.movies.length; i++){
			if(this.movies[i].avgRatings == highest[0][0]){
        //...when it matches this movie will be stored in a array...
				const movieTitle = [this.movies[i]];
        //...and return it to render()
				return this.render(movieTitle);
			}
		}
  },
  /*getWorstRatedMovie() This function will do exactly the same as getTopRatedMovie()
  but return the movie with the lowest rating instead*/
  getWorstRatedMovie(){
		document.getElementById('movieView').innerHTML = '';
		let lowest = [];
		for(let i = 0; i < this.movies.length; i++){
			lowest.push(this.movies[i].avgRatings);
		}
		lowest.sort(function(a, b){
			return a-b;
		});
		for(let i = 0; i < this.movies.length; i++){
			if(this.movies[i].avgRatings == lowest[0][0]){
				const movieTitle = [this.movies[i]];
				return this.render(movieTitle);
			}
		}
  },
  /*getMoviesThisYear() This function will recive and render all of the movies that contains
  the year of users input*/
  getMoviesThisYear(){
  	let getYear = document.getElementById('yearinput').value;
  	let movieTitle = [];
    //If the users input of year is higher then 3 digits the code within brackets will run
  	if(getYear.length > 3){
      //Looping through movies length
  		for(let i = 0; i < this.movies.length; i++){
        //If users input is equal to this movies year
  			if(parseInt(getYear) === this.movies[i].year){
          //This movie will be pushed into the new array movieTitle
  				movieTitle.push(this.movies[i]);
  			}
  		}
      //The new array will be returned to render() and render in HTML
  		return this.render(movieTitle);
      //Else if the users input is smaller then 4 alld of the movies will render in HTML
  	} else if (getYear.length < 4) {
      return this.render(this.movies);
    }
  },
  /*getMoviesByGenre() This function will recive and render all of the movies that contains
  the genre given by the user in search*/
  getMoviesByGenre(){
    let movieTitle = [];
		const getMoviesByGenre = prompt('Sök på genre:').toUpperCase();
		for(let i = 0; i < this.movies.length; i++){
			for(let j = 0; j < this.movies[i].genre.length; j++){
        //If users input matches one of this movies genre...
				if(getMoviesByGenre === this.movies[i].genre[j].toUpperCase()){
          //...this movie will be pushed into the new array movieTitle
					movieTitle.push(this.movies[i]);
				}
			}
		}
    //And return and be rendered to HTML
		return this.render(movieTitle);
  },
  /*render() This function is pretty big in this whole object because this is the function
  that renders all of the HTML and presents all of the movies in this object, almost all functions
  calls this function to render anything*/
  render(movieTitle){
    //First of all this function checks if the parameter contains one or more objects to render
		if(movieTitle.length >= 1){
      //Since it will render all the time the movieView needs to reset so that we wont get doublets in HTML
			document.getElementById('movieView').innerHTML = '';
      //Looping through the array of objects
			for(let i = 0; i < movieTitle.length; i++){
				let cover = movieTitle[i].cover;
				let title = movieTitle[i].title;
				let year = movieTitle[i].year;
				let genre = movieTitle[i].genre;
				let avgRatings = movieTitle[i].avgRatings;
				let sum = 0;
				for(let j = 0; j < movieTitle[i].ratings.length; j++){
					sum += movieTitle[i].ratings[j];
				}
        //If this is a new object/movie created by the user this movie will have a default of 0 in average rating
				let avgRate = sum/movieTitle[i].ratings.length || 0;
				avgRatings.pop();
				avgRatings.push(avgRate.toFixed(1));
				document.getElementById('movieView').innerHTML +=
        //This is the actual HTML that renders all the time, every object/movie will have this structure
				`<div class="column col-4">
					<div class="card">
						 <div class="card-image">
								<img class="img-responsive" src="${cover}">
							</div>
							<div class="card-header">
								<h4 class="card-title">${title}</h4>
								<h6 class="card-meta">${year}</h6>
							</div>
							<div class="card-footer">
								<div class="chip">
									<div class="chip-title">Genres:&nbsp;</div>
									<div class="chip-meta">${genre}</div>
								</div></br>
								<div class="chip">
									<div class="chip-title">Ratings:&nbsp;</div>
									<div class="chip-meta">${avgRatings}</div>
								</div></br></br>
								<button class="btn btn-sm tooltip" data-tooltip="Sätt betyg" onclick="movieDataBase.rateMovie(event)">+1</button>
								<button class="btn btn-sm tooltip" data-tooltip="Lägg till/editera genre" onclick="movieDataBase.addGenre(event)">Genre</button>
						 </div>
					</div>
				</div>`;
			}
		} else {
      /*This will be rendered if getMoviesThisYear() or getMoviesByGenre()
      wont find any movies that matches the users input*/
			document.getElementById('movieView').innerHTML =
			`<div class="toast toast-danger">
			  <i class="icon icon-error_outline"></i> Din sökning gav inga träffar.
			</div>`;
		}
  },
  /*addGenre() This function will be called if a user wants to rate a movie,
  this function takes one parameter, event*/
  addGenre(event){
    //The event target will be in relative to the actual injector of this function wich is the button 'Genre'
    let e = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerHTML;
    //Looping through movies array
    for(let i = 0; i < this.movies.length; i++){
      //If this event target innerHTML (movies title) matches with the movie title
      if(e === this.movies[i].title){
        //A new variable is declared to hold this movie object that matched
        let currentGenre = this.movies[i].genre;
        //The user will be prompted and asked to enter a new genre or edit current genre for this movie
        let newGenre = prompt('Editera/Lägg till genre:', `${currentGenre}`).split(',');
        if(newGenre !== '' && newGenre !== null){
          //Users input will be equal to this movies genre array
          this.movies[i].genre = newGenre;
          //Finally this will be rendered into HTML
          event.target.parentNode.childNodes[1].innerHTML =
          `<div class="chip-title">Genres:&nbsp;</div>
          <div class="chip-meta">${newGenre}</div>`;
        }
      }
    }
  },
};

/*This adds an eventlistener to the element with id 'allmovies'
in HTML and it will trigger the function render() within the object*/
document.getElementById('allmovies').addEventListener('click', () => movieDataBase.render(movieDataBase.movies));

/*This eventlistener trigger as soon as the html document has loaded
and the render() will be called to render all the movies within the object*/
window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false);
    movieDataBase.render(movieDataBase.movies);
},false);
