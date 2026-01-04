import React from 'react';
import Header from './Components/Header';
import Category from './Components/Category';
import TopRest from './Components/TopRest';
import Onlinerest from './Components/Onlinerest'
import BestRest from './Components/BestRest';
import Lastpage from './Components/Lastpage';


const App = () => {
  return (
    <>
      <Header />
      <Category />
      <TopRest/>
      <Onlinerest/>
      <BestRest/>
      <Lastpage/>
    </>
  );
}

export default App;
