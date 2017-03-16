//jshint esversion:6
const moviedb = { //The mother of all objects that containts arrays, functions, prototype.
  //List of HTML elements
  el: {
    movies: document.getElementById('movies'),
    modal: document.getElementsByClassName('modal'),
    forminput: document.getElementsByClassName('form-input'),
    movieobject: document.getElementsByClassName('movieobject'),
    canvas: document.getElementById('canvas'),
  },
  id: 0, //ID that will increase by 1 each time a new movie is created.
  prototype: {}, //This is the object prototype that are being used/copied when a new movie is created.
  movies: [ //This is my 'Database' that contains all the movies and will contain all new movies that will be created.
    {
      title: "Logan",
      year: 2017,
      genres: ["Action", "Drama", "Sci-Fi"],
      ratings: [9, 8, 9, 9, 9, 7],
      avgRatings: [],
      id: 0,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MjkzMjczMV5BMl5BanBnXkFtZTgwNDk4NjYyMTI@._V1_SY1000_CR0,0,676,1000_AL_.jpg"
    },
    {
      title: "Kong: Skull Islands",
      year: 2017,
      genres: ["Action", "Fantasy", "Sci-Fi"],
      ratings: [8, 7, 6, 7 ,8],
      avgRatings: [],
      id: 1,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwMzI5ODEwNF5BMl5BanBnXkFtZTgwNjAzNjI2MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
      title: "Uncertain",
      year: 2015,
      genres: ["Documentary", "Comedy", "Drama"],
      ratings: [6, 8, 9, 8, 7],
      avgRatings: [],
      id: 2,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMGViNGQwNWEtYmQxZi00MTc5LThjYjctNzE3M2ExZDZjNjAxXkEyXkFqcGdeQXVyMTM2MzgyOTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
      title: "Arrival",
      year: 2016,
      genres: ["Drama", "Mystery", "Sci-Fi"],
      ratings: [8, 10, 7, 7, 8],
      avgRatings: [],
      id: 3,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SY1000_CR0,0,640,1000_AL_.jpg"
    },
    {
      title: "Transformers: Age of Extinction",
      year: 2014,
      genres: ["Action", "Adventure", "Sci-Fi"],
      ratings: [6, 3, 4, 5],
      avgRatings: [],
      id: 4,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwNTg1MTA5Nl5BMl5BanBnXkFtZTgwOTg2OTM4MTE@._V1_SY1000_CR0,0,640,1000_AL_.jpg"
    },
    {
      title: "The Machinist",
      year: 2004,
      genres: ["Action", "Drama", "History"],
      ratings: [6, 7, 4, 6, 7],
      avgRatings: [],
      id: 5,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjk1NzBlY2YtNjJmNi00YTVmLWI2OTgtNDUxNDE5NjUzZmE0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_.jpg"
    },
    {
      title: "Tangled",
      year: 2010,
      genres: ["Action", "Drama", "Sci-Fi"],
      ratings: [6, 7, 6, 9, 8],
      avgRatings: [],
      id: 6,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_.jpg"
    },
    {
      title: "Despicable Me 2",
      year: 2013,
      genres: ["Animation", "Comedy", "Family"],
      ratings: [6, 7, 8, 6],
      avgRatings: [],
      id: 7,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjAyNTcyMF5BMl5BanBnXkFtZTgwODQzMjQ3MDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
      title: "How to Train Your Dragon",
      year: 2010,
      genres: ["Animation", "Adventure", "Family"],
      ratings: [6, 8, 9, 8, 7],
      avgRatings: [],
      id: 8,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SY1000_CR0,0,672,1000_AL_.jpg"
    },
    {
      title: "Fifty Shades Darker",
      year: 2017,
      genres: ["Drama", "Romance"],
      ratings: [5, 4, 3, 5, 4],
      avgRatings: [],
      id: 9,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5NTk0Njg2N15BMl5BanBnXkFtZTgwNzk5Nzk3MDI@._V1_SY1000_CR0,0,631,1000_AL_.jpg"
    },
    {
      title: "Jurassic World",
      year: 2015,
      genres: ["Action", "Adventure", "Sci-Fi"],
      ratings: [7, 8, 8, 9, 7],
      avgRatings: [],
      id: 10,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5MTE0MTk3Nl5BMl5BanBnXkFtZTgwMjczMzk2NTE@._V1_SY1000_CR0,0,631,1000_AL_.jpg"
    },
    {
      title: "Dumb Dumber To",
      year: 2014,
      genres: ["Comedy"],
      ratings: [7, 8, 8, 9, 7],
      avgRatings: [],
      id: 11,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMzA0MzAyMF5BMl5BanBnXkFtZTgwMjMyNjcwMjE@._V1_SY1000_CR0,0,631,1000_AL_.jpg"
    },
    {
      title: "The Hangover",
      year: 2009,
      genres: ["Comedy"],
      ratings: [7, 8, 6, 5, 7],
      avgRatings: [],
      id: 12,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_.jpg"
    },
    {
      title: "Dawn of the Planet of the Apes",
      year: 2014,
      genres: ["Action", "Adventure", "Sci-Fi"],
      ratings: [7, 8, 7, 8, 9, 10],
      avgRatings: [],
      id: 13,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwODk3NDc1N15BMl5BanBnXkFtZTgwNTc1NjQwMjE@._V1_SY1000_SX675_AL_.jpg"
    },
    {
      title: "The Godfather",
      year: 1972,
      genres: ["Crime", "Drama"],
      ratings: [7, 9, 7, 8, 9, 10],
      avgRatings: [],
      id: 14,
      cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,704,1000_AL_.jpg"
    }
  ],


  //Creates a new movie object with, takes 4 parameters
  movie(title, year, genres, cover){
    let ratings = [];
    let avgRatings = 0;
    let id = 0;
    const movieTitle = Object.create(this.prototype);
    movieTitle.title = title;
    movieTitle.year = parseInt(year);
    movieTitle.genres = genres;
    movieTitle.ratings = ratings;
    movieTitle.avgRatings = avgRatings;
    movieTitle.cover = cover || 'https://lbn.voxcinemas.com/assets/images/placeholder-poster-480x686.jpg';
    movieTitle.id = this.incrementUniqueId(id);
    this.pushNewMovie(movieTitle);
    return movieTitle;
  },

  //Pushes the new movie object into the movies array and sends the movie object to renderNewMovie()
  pushNewMovie(movie){
    //Pushes the movie object into movies array
    this.movies.push(movie);
    //Calls the function renderNewMovie() with the movie object as an array
    this.renderNewMovie([movie]);
  },

  //rateMovie() takes 2 parameters and it will set add a rating to a movies ratings
  rateMovie(movie, rating){
    //Filters movies array
    this.movies.filter(title => {
      //Checks if the movie is equal to current movies title
      if(movie === title.title){
        //If it is this movies ratings array will receive the rating user set
        title.ratings.push(rating);
        /*Since there's a new rating for this movie the averagerating needs to be
        recalculated so calculateAverage() will be called to calculate this*/
        moviedb.calculateAverage(title, title.ratings);
        return title;
      }
    });
  },

  //getTopRatedMovie() will get the movie with highest average rating
  getTopRatedMovie(){
    //Reduces movies array...
    const topRated = this.movies.reduce((a, b) => {
      /*...so that in the end we will only have one movie (a)
      that contains the highest average rating and returns it*/
      return a.avgRatings > b.avgRatings ? a : b;
    }, 0);
    /*Then the movie with the highest average rating will
    be sent to checkDivsClassname() to only show that movie in HTML*/
    this.checkDivsClassname([topRated]);
    return topRated;
  },

  //getWorstRatedMovie() will get the movie with lowest average rating
  getWorstRatedMovie(){
    //Same as getTopRatedMovie() but for the movie that has the lowest average rating
    const worstRated = this.movies.reduce((a, b) => {
      return a.avgRatings < b.avgRatings ? a : b;
    }, 0);
    this.checkDivsClassname([worstRated]);
    return worstRated;
  },

  //getMoviesThisYear() will filter movies array to match year value
  getMoviesThisYear(year){
    let movies = [];
    //Filters the movies array...
    this.movies.filter(movie => {
      //...if the current movies year matches with year..
      if(movie.year === parseInt(year))
        //...current movie will be pushed into the array movies
        movies.push(movie);
    });
    //And here the movie(s) will be sent to checkDivsClassname that will render this into HTML
    this.checkDivsClassname(movies);
    return movies;
  },

  /*getMoviesByGenre() will go through all movies and check
  if users input of genres matches any of movies genres*/
  getMoviesByGenre(genres){
    let movies = [];
    //For each userinput genre..
    genres.forEach(genre => {
      //..filter movies..
      moviedb.movies.filter(movie => {
        //..and see if movies genres includes any of users input of genre..
        if(movie.genres.includes(genre))
          //..if so push this movie into movies array
          movies.push(movie);
      });
    });
    //And here the movie(s) will be sent to checkDivsClassname that will render this into HTML
    this.checkDivsClassname(movies);
  },

  //Adds a uniqe id to each movie created
  incrementUniqueId(id){
    /*A variable with name highest creates and this
    will save the value of the movie in movies that currently
    holds the highest value of id*/
    let highest = this.movies.reduce((a, b) => {
      //if movie (a.id) has a higher id value then movie (b.id) return it
      return (a.id > b.id) ? a.id : b.id;
    }, 0);
    /*The new movie that has been created will
    receive an id of highest +1 wich then will
    be the highest value in movies array*/
    id = highest + 1;
    return id;
  },

  //calculateAverage() will calculate average rating of all ratings in a movie
  calculateAverage(movie, ratings){
    let sum = ratings.reduce((a, b) => {
      return a + b;
    });
    let avg = sum / ratings.length;
    movie.avgRatings = avg.toFixed(1);
  },

  //--DOM / VIEW functions--//

  /*renderAllMoviesInDatabase() renders all
  the movies in movies array to HTML, this function
  will only be called once and I didnt know how to solve
  this better since this is a local 'database'...*/
  renderAllMoviesInDatabase(){
    /*Self invoked function to loop through all the movies
    in movies array and calculate average rating for every movie*/
    (() => {
      for(let i = 0; i < moviedb.movies.length; i++){
        let movie = moviedb.movies[i];
        let ratings = moviedb.movies[i].ratings;
        moviedb.calculateAverage(movie, ratings);
      }
    })();
    //For each movie render this template into HTML
    this.movies.forEach((movie, index) => {
      this.el.movies.innerHTML +=
      `<div class="column col-3 col-xs-6 movieobject" id="${moviedb.id++}">
        <div class="card">
          <div class="card-image">
            <img class="img-responsive cover" src="${movie.cover}">
          </div>
          <div class="card-header">
            <div class="card-title movietitle">${movie.title}</div>
            <div class="card-meta">${movie.year}</div>
          </div>
          <div class="card-footer">
            <div class="chip">
              <div class="chip-title">Genres:&nbsp;</div>
              <div class="chip-meta moviegenre">${movie.genres}</div>
            </div></br>
            <div class="chip">
              <div class="chip-title"><i class="fa fa-star" id="star" aria-hidden="true"></i>&nbsp;</div>
              <div class="chip-meta movieavgrating">${movie.avgRatings}</div>
            </div></br></br>
            <a onclick="moviedb.ratingModalOpen(${index})" class="btn btn-sm tooltip tooltip-top" data-tooltip="Rate movie"><i class="fa fa-heart" aria-hidden="true"></i></a>
            <a onclick="moviedb.editGenreModalOpen(${index})" class="btn btn-sm tooltip tooltip-top" data-tooltip="Add/Edit genre">Genre</a>
          </div>
        </div>
      </div>`;
    });
  },

  //renderNewMovie() will render out every new movie that is created by the user
  renderNewMovie(movies){
    movies.forEach(movie => {
      moviedb.el.movies.innerHTML +=
      `<div class="column col-3 col-xs-6 movieobject" id="${moviedb.id++}">
        <div class="card">
          <div class="card-image">
            <img class="img-responsive cover" src="${movie.cover}">
          </div>
          <div class="card-header">
            <div class="card-title movietitle">${movie.title}</div>
            <div class="card-meta">${movie.year}</div>
          </div>
          <div class="card-footer">
            <div class="chip">
              <div class="chip-title">Genres:&nbsp;</div>
              <div class="chip-meta moviegenre">${movie.genres}</div>
            </div></br>
            <div class="chip">
              <div class="chip-title"><i class="fa fa-star" id="star" aria-hidden="true"></i>&nbsp;</div>
              <div class="chip-meta movieavgrating">${movie.avgRatings}</div>
            </div></br></br>
            <a onclick="moviedb.ratingModalOpen(${movie.id})" class="btn btn-sm tooltip tooltip-top" data-tooltip="Sätt betyg"><i class="fa fa-heart" aria-hidden="true"></i></a>
            <a onclick="moviedb.editGenreModalOpen(${movie.id})" class="btn btn-sm tooltip tooltip-top" data-tooltip="Lägg till/Editera/Ta bort">Genre</a>
          </div>
        </div>
      </div>`;
    });
  },

  /*ratingModalOpen() takes index from current movie or movie.id
  (depends if the movie is created by the user or if it existed
  before in the movies array), this will open a modal and user can
  rate the movie of current index*/
  ratingModalOpen(i){
    //This will make it so that user cant scroll when modal is open
    this.el.canvas.style = 'overflow:hidden';
    //This will make the modal to open
    this.el.modal[0].className = 'modal active';
    //Adds some html to the modal and I did this because i needed the index for the clickevent
    document.getElementById('closebtn').innerHTML =
    `<button class="btn btn-clear float-right" onclick="moviedb.ratingModalClose(${i})"></button>`;
    document.getElementById('submitbtn').innerHTML =
    `<button class="btn btn-secondary" id="submit" onclick="moviedb.ratingModalSubmit(${i})">Submit</button>`;
    //Focuses the input field..
    document.getElementById('rating').focus();
    //onkeydown event for the modal
    document.getElementById('modal').onkeydown = (event) => {
      //esc button will close the modal
      if(event.keyCode == 27){
        moviedb.ratingModalClose();
        //enter button will submit if the requirements
      } else if(event.keyCode == 13){
        moviedb.ratingModalSubmit(i);
      }
    };
  },

  //ratingModalClose() will close the modal
  ratingModalClose(){
    //Page is now scrollable again
    this.el.canvas.style = 'overflow:none;';
    //Modal is not active anymore
    this.el.modal[0].className = 'modal';
    //Input field will reset
    document.getElementById('rating').value = '';
  },

  /*ratingModalSubmit() will take the index of current movie to
  know wich movie to add new rating to*/
  ratingModalSubmit(i){
    let forminput = this.el.forminput[0];
    let ratingValue = document.getElementById('rating').value;
    let rating = [];
    let title = document.getElementsByClassName('movietitle')[i];
    let avgRating = document.getElementsByClassName('movieavgrating')[i];
    rating.pop();
    if(ratingValue > 0 && ratingValue < 11){
      rating.push(ratingValue);
      document.getElementById('rating').value = '';
      forminput.className = 'form-input';
      forminput.placeholder = 'Betyg...';
      this.ratingModalClose();
      this.movies.filter((movie) => {
        if(movie.title === title.innerHTML){
          moviedb.rateMovie(movie.title, parseInt(ratingValue));
          console.log(movie.avgRatings);
          avgRating.innerHTML = movie.avgRatings;
        }
      });
    } else if(ratingValue < 1) {
      forminput.className = 'form-input is-danger';
      forminput.placeholder = 'För lågt betyg...';
      document.getElementById('rating').value = '';
    } else {
      forminput.className = 'form-input is-danger';
      forminput.placeholder = 'För högt betyg...';
      document.getElementById('rating').value = '';
    }
  },

  //newMovieModalOpen() will open up a modal for the user to create/submit a new movie
  newMovieModalOpen(){
    this.el.canvas.style = 'overflow:hidden;';
    this.el.modal[1].className = 'modal active';
    document.getElementById('title').focus();
    document.getElementById('newmovie').onkeydown = (event) => {
      if(event.keyCode == 27){
        moviedb.newMovieModalClose();
      } else if(event.keyCode == 13){
        moviedb.newMovieModalSubmit();
      }
    };
  },

  //newMovieModalClose() will close the modal when user clicked close or submitted a movie
  newMovieModalClose(){
    this.el.canvas.style = 'overflow:none;';
    this.el.modal[1].className = 'modal';
    document.getElementById('title').className = 'form-input';
    document.getElementById('year').className = 'form-input';
  },

  //newMovieModalSubmit() will take all values from the form and create the new movie
  newMovieModalSubmit(){
    let genres = [];
    let title = document.getElementById('title').value;
    let year = document.getElementById('year').value;
    //Creates an array from the HTML collection so that I can loop through it
    let genre = Array.from(document.querySelectorAll('input[class=form-check-input]:checked'));
    //For..of to see what genres are checked..
    for(let val of genre){
      //..and push them into genres array
      genres.push(val.value);
    }
    let cover = document.getElementById('cover').value;
    if(title && year.length === 4){
      //Sends the values to movie() and creates the new movie
      this.movie(title, year, genres, cover);
      this.newMovieModalClose();
    } else if(!title && !year){
      document.getElementById('title').className = 'form-input is-danger';
      document.getElementById('year').className = 'form-input is-danger';
    } else if(!title){
      document.getElementById('title').className = 'form-input is-danger';
    } else if(!year){
      document.getElementById('year').className = 'form-input is-danger';
    }
  },

  /*editGenreModalOpen() will take the index of current
  movie and open a modal wich will make the user able to
  remove or add a genre*/
  editGenreModalOpen(i){
    this.el.canvas.style = 'overflow:hidden;';
    this.el.modal[2].className = 'modal active';
    document.getElementById('currentmovie').innerHTML =
    `<h6>${this.movies[i].title}</h6>`;
    document.getElementById('newgenressubmit').innerHTML =
    `<button class="btn btn-secondary" id="submit" onclick="moviedb.editGenreModalSubmit(${i})">Submit</button>`;
    document.getElementById('currentmoviesgenres');
    //Creates an array from the HTML collection
    let genres = Array.from(document.querySelectorAll('input[class=form-check-edit]'));
    //Loops through the genres array..
    genres.forEach(genre => {
      //..if the current movies genres includes any of genres value (checkbox values)..
      if(this.movies[i].genres.includes(genre.value)){
        //..make those checkboxes checked to get a clear view of what the current movies genres are
        genre.checked = true;
      }
    });

    document.getElementById('modalgenre').onkeydown = (event) => {
      if(event.keyCode == 27){
        moviedb.editGenreModalClose(i);
      } else if(event.keyCode == 13){
        moviedb.editGenreModalSubmit(i);
      }
    };
  },

  //editGenreModalClose() will close the modal and reset modals checkboxes
  editGenreModalClose(){
    this.el.canvas.style = 'overflow:none;';
    this.el.modal[2].className = 'modal';
    let genres = document.querySelectorAll('input[class=form-check-edit]');
    //Makes all checkboxes..
    for(let genre of genres){
      //..not checked
      genre.checked = false;
    }
  },

  //editGenreModalSubmit() takes index from the current movie and sets the new genres
  editGenreModalSubmit(i){
    let moviegenre = document.getElementsByClassName('moviegenre')[i];
    let movietitle = document.getElementsByClassName('movietitle')[i];
    let genres = [];
    //Get all genres from checkbox values that are checked
    let genre = document.querySelectorAll('input[class=form-check-edit]:checked');
    //Get all values from genres checkboxes that are checked..
    for(let checked of genre){
      //..and push them into genres array
      genres.push(checked.value);
    }
    console.log(this.movies[i]);
    //The movies genres is now equal to the new genres from user input
    this.movies[i].genres = genres;
    //Aswell the HTML will render the new value of genres
    moviegenre.innerHTML = genres;
    this.editGenreModalClose();
  },

  //searchByYearModalOpen() opens up a modal and allows the user to search movie(s) by year
  searchByYearModalOpen(){
    document.getElementById('searchfor').value = '';
    this.el.canvas.style = 'overflow:hidden;';
    this.el.modal[3].className = 'modal active';
    document.getElementById('searchfor').focus();
    document.getElementById('modalsearch').onkeydown = (event) => {
      if(event.keyCode == 27){
        moviedb.searchByYearModalClose();
      } else if(event.keyCode == 13){
        moviedb.searchByYearModalSubmit();
      }
    };
  },

  //searchByYearModalClose() closes the modal
  searchByYearModalClose(){
    this.el.canvas.style = 'overflow:none;';
    this.el.modal[3].className = 'modal';
  },

  //searchByYearModalSubmit() submits users input and sends the value to getMoviesThisYear()
  searchByYearModalSubmit(){
    let year = document.getElementById('searchfor').value;
    if(year){
      this.getMoviesThisYear(year);
      this.searchByYearModalClose();
    }
  },

  //searchByGenreOpen() opens up a modal and allows the user to search movie(s) by genre
  searchByGenreOpen(){
    this.el.modal[4].className = 'modal active';
    this.el.canvas.style = 'overflow:hidden;';
    let genres = document.querySelectorAll('input[class=form-check-genre]');
    for(let genre of genres){
      genre.checked = false;
    }
    document.getElementById('choosegenre').onkeydown = (event) => {
      if(event.keyCode == 27){
        moviedb.searchByGenreClose();
      } else if(event.keyCode == 13){
        moviedb.searchByGenreSubmit();
      }
    };
  },

  //searchByGenreClose() closes the modal
  searchByGenreClose(){
    this.el.canvas.style = 'overflow:none;';
    this.el.modal[4].className = 'modal';
  },

  //searchByGenreSubmit() submits users input and sends the value to getMoviesByGenre()
  searchByGenreSubmit(){
    let genres = [];
    //Makes an array from select HTML collection list
    let select = Array.from(document.querySelectorAll('input[class=form-check-genre]:checked'));
    select.forEach(selected => genres.push(selected.value));
    this.getMoviesByGenre(genres);
    this.searchByGenreClose();
  },

  //checkDivsClassname() takes one parameter and this function will only renders the movies in the parameter
  checkDivsClassname(movies){
    //Get all elements of document.getElementsByClassName('movieobject')
    for(let div of this.el.movieobject){
      //Add class 'hide' to hide all divs
      div.classList.add('hide');
    }
    //Filter through movies
    return this.movies.filter((movie, index) => {
      for(let title of movies){
        //if current movie in movies is equal to the movies title from parameter..
        if(movie === title)
        //..remove the class 'hide' to show only the movies that was taken in from the parameter
        moviedb.el.movieobject[index].classList.remove('hide');
      }
    });
  },

  //getAllMovies() will render all movies in the movies array
  getAllMovies(){
    let movieobjects = Array.from(this.el.movieobject);
    return movieobjects.forEach(div => div.classList.remove('hide'));
  }
};
