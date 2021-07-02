import React, { Suspense } from 'react'
import './App.css';

const Header = React.lazy(() => import('./components/Header'));
function App() {
  return (
    // <div className="app">
    // <Header />
    //    </div>
    <Suspense fallback={<div>Loading... </div>}>
    <Header />
</Suspense>
    );
}

export default App;
