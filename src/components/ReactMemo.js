import React, { useState, useEffect } from "react";

function Movie({ title, releaseDate, memo }) {
  console.log(`${memo ? "<MemoizedMovie>" : "<Movie>"} rendered`);
  const arr = []
  for (let i = 0; i < 3000; i++) {
    arr.push(i)
  }

  console.time('time')

useEffect(() => {
  console.time('time')
})
  return (
    <div>
      <h3>Movie title: {title}</h3>
      <h3>Release date: {releaseDate}</h3>
      <p>
        {
          arr.map(i => (<span key={i}>{i}</span>))
        }
      </p>
    </div>
  );
}

const MemoizedMovie = React.memo(Movie);

function App() {
  const [toogle, setToggle] = useState(true);
  useEffect(() => {
    // const id = setInterval(() => {
    //   setToggle(toggle => !toggle);
    // }, 1000);
    // return () => clearInterval(id);
  }, []);
  return (
    <div className="m-5 p-3 bg-info text-white">
      <MemoizedMovie title="Heat" releaseDate="December 15, 1995" memo={true} />
      <Movie title="Heat" releaseDate="December 15, 1995" memo={false} />
    </div>
  );
}

export default App