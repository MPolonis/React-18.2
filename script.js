
var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'https://farm1.staticflickr.com/28/49684002_3890beba97.jpg'

    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.3.jpg'
    },
    {
        id: 3,
        title: 'Rocky IV',
        desc: 'Film opowiadające hostorię boksera',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51MbbQCig0L.jpg'
    },
    {
        id: 4,
        title: 'Wojownicze Żółwie ninja',
        desc: 'Film o bohaterskich żółwiach',
        img: 'turtles.jpg'
    }
];
var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {key: movie.id}, 
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );
ReactDOM.render(element, document.getElementById('app'));