import logo from './logo.svg';
import './App.css';
import { lazy, Suspense, useState, React } from 'react'
import Loading from './Loading';

function App() {
  let NetflixApp = lazy(() => {
    return Promise.all([
      import("./NetflixApp"),
      new Promise(resolve => setTimeout(resolve, 3500))
    ])
      .then(([moduleExports]) => moduleExports);
  })
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <NetflixApp />
      </Suspense>
    </div>
  );
}

export default App;
