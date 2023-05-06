export default function Movies() {
  const movies = [
    { title: "Pet Wussy", genre: "Horror", pic: "https://picsum.photos/300" },
    { title: "Dig Bick", genre: "Romance", pic: "https://picsum.photos/300" },
  ];

  function loadMovies() {
    return movies.map(function (m, index) {
      return (
        <div
          className="bg-gray-600 w-96 h-40 border-gray-500 border-r-gray-300 border-t-white border-2 p-2 rounded-md m-2 shadow-md"
          key={index}
        >
          <h1 className="text-white text-center text-2xl">{m.title}</h1>
          <div className="text-white text-center">{m.pic}</div>
          <h1 className="text-white text-center">Genre: {m.genre}</h1>
        </div>
      );
    });
  }

  return <div className="h-auto grid  g-2 p-2 bg-gray-700">{loadMovies()}</div>;
}
