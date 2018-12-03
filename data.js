const movies = [
    {
        id: '1',
        title: "The Godfather",
        description: "The Godfather lorem ipsum",
        year: 1972,
        directorId: "2"
    },
    {
        id: '2',
        title: "Scarface",
        description: "Scarface lorem ipsum",
        year: 1980,
        directorId: "1"
    },
    {
        id: '3',
        title: "Pulp Fiction",
        description: "Pulp Fiction lorem ipsum",
        year: 1994,
        directorId: "3"
    }
];

const directors = [
    {
        id: '1',
        name: "Francis Ford Coppola",
        birth: 1939
    },
    {
        id: '2',
        name: "Brian De Palma",
        birth: 1940
    },
    {
        id: '3',
        name: "Quentin Tarantino",
        birth: 1963
    }
];

module.exports = {
    directors,
    movies
}