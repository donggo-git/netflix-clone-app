import logo from './logo.svg';
import './App.css';
import { lazy, Suspense } from 'react'
import Loading from './Loading';

function App() {
  let HomePage = lazy(() => {
    return Promise.all([
      import("./HomePage"),
      new Promise(resolve => setTimeout(resolve, 3500))
    ])
      .then(([moduleExports]) => moduleExports);
  })
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    </div>
  );
}

export default App;
