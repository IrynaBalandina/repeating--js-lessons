const film = {
    title:"Harry Potter", 
    description:"Lorem ipsum dolor sit amet", 
    rating:10,
    isAdult:false,
    actors:["Jacob Mon", "John Smith", "Anna Bond", "Charles Bow"],
    translations :{
        ua:"http//:ua",
        en:"http//:en",
    },
}

// console.log(film);
// console.log(film.title);
// console.log(film.actors);
// console.log(film['actors']);
// console.log(film['rating']);
// console.log(film['isAdult']);

// const filmKey = 'actors';

// console.log(film.filmKey);
// console.log(film[filmKey]);

// film.rating = 8;
// film.actors.push('Garry Brown');
// film.test = 10;
console.log(film);
console.log(film.translations);
console.log(film['translations']['ua']);

