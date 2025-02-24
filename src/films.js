// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director == director);
  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const { totalScore, count } = array.reduce(
    (acc, movie) => {
      if (movie.director === director) {
        acc.totalScore += movie.score;
        acc.count += 1;
      }
      return acc;
    },
    { totalScore: 0, count: 0 }
  );

  const averageScore = totalScore / count;
  console.log('EXERCICE 3 ->', averageScore.toFixed(2));
  return parseFloat(averageScore.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let arrayCopy = [...array];
  let sortedArray = arrayCopy.sort((a, b) => a.title.localeCompare(b.title));
  let titlesArray = sortedArray.map((movie) => movie.title);
  let result = titlesArray.slice(0, 20);
  console.log('EXERCICE 4 ->', result);
  return result;
}

function orderByYear(array) {
  let arrayCopy = [...array];
  let sortedArray = arrayCopy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });

  console.log('EXERCICE 5 ->', sortedArray);
  return sortedArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let genreMovies = array.filter((movie) => movie.genre.includes(genre));
  let totalScore = genreMovies.reduce((acc, movie) => acc + movie.score, 0);
  let result = totalScore / genreMovies.length;
  console.log('EXERCICE 6 ->', result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let arrayCopy = [...array];
  let result = arrayCopy.map((movie) => {
    if (movie.duration && movie.duration.includes('h')) {
      let duration = movie.duration.split(' ');
      let hours = parseInt(duration[0].replace('h', '')) || 0;
      let minutes = duration[1] ? parseInt(duration[1].replace('min', '')) : 0;
      let totalMinutes = hours * 60 + minutes;
      return {
        ...movie,
        duration: totalMinutes
      };
    } else if (movie.duration && movie.duration.includes('min')) {
      let minutes = parseInt(movie.duration.replace('min', ''));
      return {
        ...movie,
        duration: minutes
      };
    } else {
      return {
        ...movie,
        duration: movie.duration
      };
    }
  });
  console.log('EXERCICE 7 ->', result);
  return result;
}
// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let yearMovies = array.filter((movie) => movie.year === year);
  let bestMovie = yearMovies.reduce((best, movie) => {
    if (movie.score > best.score) {
      return movie;
    }
    return best;
  });

  let result = [bestMovie];
  console.log('EXERCICE 8 ->', result);
  return result;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
