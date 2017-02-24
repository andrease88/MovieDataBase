//jshint esversion:6
var movieDataBase = {
	votes: 0,
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
  		ratings: [6, 7, 4, 6],
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
    }
  ],
  genre: [],
  movie(){
		const title = document.getElementById('title').value.trim();
		const year = parseInt(document.getElementById('year').value);
		const genre = document.getElementById('genre').value.split(',');
		const cover = document.getElementById('cover').value;
		const genreArr = [];
		if(title && year && genre && cover){
			(() => {
    		for (let i = 0; i < genre.length; i++){
		    	genreArr.push(genre[i].trim());
		    }
				return movieDataBase.create(title, year, genreArr, cover);
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
    movie.cover = cover;
    this.movies.push(movie);
    return movieDataBase.renderMovies();
  },
  renderMovies(){
  	document.getElementById('movieView').innerHTML = '';
  	for(let i = 0; i < this.movies.length; i++){
  		cover = this.movies[i].cover;
  		title = this.movies[i].title;
  		year = this.movies[i].year;
  		genre = this.movies[i].genre;
  		ratings = this.movies[i].ratings;
  		avgRatings = this.movies[i].avgRatings;
  		let sum = 0;
  		for(let i = 0; i < ratings.length; i++){
  			sum += ratings[i];
  		}
  		const avgRating = sum/ratings.length || 0;
  		avgRate = avgRating;
  		avgRatings.pop();
  		parseInt(avgRatings.push(avgRate));
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
			      		<div class="chip-meta">${avgRate}</div>
			      	</div>
		     	 		<button class="btn btn-sm" onclick="movieDataBase.rateMovie(event)">Ge betyg</button>
		     	 </div>
			  </div>
			</div>`;
  	}
  },
  rateMovie(event){
  	let parent = event.target;
  	let userRate = parseInt(prompt('Ange ett betyg mellan 1-10'));
  	if(userRate <= 10){
  		parent = parent.parentNode.parentNode.childNodes[3].childNodes[1].innerHTML;
  		for(let i = 0; i < this.movies.length; i++){
  			if(parent === this.movies[i].title){
  				this.movies[i].ratings.push(userRate);
  				return movieDataBase.renderMovies();
  			}
  		}
  	} else {
  		alert('För högt betyg!');
  	}
  },
  getTopRatedMovie(){
		document.getElementById('movieView').innerHTML = '';
		let topRatedMovie = avgRatings.filter(function(previousValue, value){
		   return previousValue > value ? previousValue : value;
		});
		for(let i = 0; i < this.movies.length; i++){
			if(topRatedMovie[0] === this.movies[i].avgRatings[0]){
				console.log(this.movies[i]);
			}
		}
  },
  getWorstRatedMovie(){

  },
  getMoviesThisYear(){

  },
  getMoviesByGenre(){

  }
};
