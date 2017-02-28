//jshint esversion:6
var movieDataBase = {
  prototype:{},
  movies: [
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
  submitMovie(){
		const title = document.getElementById('title').value.trim();
		const year = parseInt(document.getElementById('year').value);
		const genre = document.getElementById('genre').value.split(',');
		const cover = document.getElementById('cover').value;
		const genreArr = [];
		if(title && year){
			(() => {
    		for (let i = 0; i < genre.length; i++){
		    	genreArr.push(genre[i].trim());
		    }
				return this.create(title, year, genreArr, cover);
			})();
		} else {
			console.log('Errorrrrrr!!!');
		}
		document.getElementById('forms').reset();
  },
  create(title, year, genreArr, cover){
    const movie = Object.create(this.prototype);
    movie.title = title;
    movie.year = year;
    movie.genre = genreArr;
    movie.ratings = [];
    movie.avgRatings = [];
    movie.cover = cover || "https://lbn.voxcinemas.com/assets/images/placeholder-poster-480x686.jpg";
    this.movies.push(movie);
		let movieTitle = this.movies;
    return this.render(movieTitle);
  },
  rateMovie(event){
  	let parent = event.target;
  	let userRate = parseInt(prompt('Ange ett betyg mellan 1-10'));
  	if(userRate > 0 && userRate <= 10){
  		parent = parent.parentNode.parentNode.childNodes[3].childNodes[1].innerHTML;
			let sum = 0;
  		for(let i = 0; i < this.movies.length; i++){
  			if(parent === this.movies[i].title){
  				this.movies[i].ratings.push(userRate);
					for(let j = 0; j < this.movies[i].ratings.length; j++){
						sum += this.movies[i].ratings[j];
					}
					let avgRate = sum/this.movies[i].ratings.length;
					this.movies[i].avgRatings.pop();
					this.movies[i].avgRatings.push(avgRate);
					event.target.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[3].innerHTML = avgRate.toFixed(1);
				}
  		}
  	} else {
  		alert('Betygsättning ej godkänd');
  	}
  },
  getTopRatedMovie(){
		document.getElementById('movieView').innerHTML = '';
		let highest = [];
		for(let i = 0; i < this.movies.length; i++){
			highest.push(this.movies[i].avgRatings);
		}
		highest.sort(function(a, b){
			return b-a;
		});
		for(let i = 0; i < this.movies.length; i++){
			if(this.movies[i].avgRatings == highest[0][0]){
				const movieTitle = [this.movies[i]];
				return this.render(movieTitle);
			}
		}
  },
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
  getMoviesThisYear(){
		let getYear = document.getElementById('yearinput').value;
		let movieTitle = [];
		if(getYear.length > 3){
			for(let i = 0; i < this.movies.length; i++){
				if(parseInt(getYear) === this.movies[i].year){
					movieTitle.push(this.movies[i]);
				}
				// setTimeout(function(){
				// 	document.getElementById('yearinput').value = '';
				// }, 200);
			}
			return this.render(movieTitle);
		} else if (getYear.length < 4) {
			return this.render(this.movies);
		}
  },
  getMoviesByGenre(){
		let movieTitle = [];
		const getMoviesByGenre = prompt('Sök på genre:').toUpperCase();
		for(let i = 0; i < this.movies.length; i++){
			for(let j = 0; j < this.movies[i].genre.length; j++){
				if(getMoviesByGenre === this.movies[i].genre[j].toUpperCase()){
					movieTitle.push(this.movies[i]);
				}
			}
		}
		return this.render(movieTitle);
  },
	render(movieTitle){
		if(movieTitle.length >= 1){
			document.getElementById('movieView').innerHTML = '';
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
				let avgRate = sum/movieTitle[i].ratings.length || 0;
				avgRatings.pop();
				avgRatings.push(avgRate.toFixed(1));
				document.getElementById('movieView').innerHTML +=
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
								</div>
								<div class="chip">
									<div class="chip-title">Ratings:&nbsp;</div>
									<div class="chip-meta">${avgRatings}</div>
								</div></br></br>
								<button class="btn btn-sm" onclick="movieDataBase.rateMovie(event)">Ge betyg</button>
								<button class="btn btn-sm" onclick="movieDataBase.addGenre(event)">Editera/Lägg till genre</button>
						 </div>
					</div>
				</div>`;
			}
		} else {
			document.getElementById('movieView').innerHTML =
			`<div class="toast toast-danger">
			  <i class="icon icon-error_outline"></i> Din sökning gav inga träffar.
			</div>`;
		}
	},
	addGenre(event){
		let parent = event.target;
		parent = parent.parentNode.parentNode.childNodes[3].childNodes[1].innerHTML;
		for(let i = 0; i < this.movies.length; i++){
			if(parent === this.movies[i].title){
				let currentGenre = this.movies[i].genre;
				let newGenre = prompt('Editera/Lägg till genre:', `${currentGenre}`).split(',');
				if(newGenre){
					this.movies[i].genre = newGenre;
					parent = event.target.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[3].innerHTML = this.movies[i].genre;
				}
			}
		}
	},
};
document.getElementById('allmovies').addEventListener('click', function(){
	return movieDataBase.render(movieDataBase.movies);
});
window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false);
    movieDataBase.render(movieDataBase.movies);
},false);
