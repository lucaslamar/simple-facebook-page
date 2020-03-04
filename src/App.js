import React from 'react';
import './App.css';

// import profile from './assets/profile.jpeg';

import TechList from './components/TechList';
import Header from './components/Header';
import PostList from './components/PostList';




 function App() {
  return  (
    <>
      <Header/>
      <PostList />
       {/* <TechList/> */}
    </>
  );
  
}
export default App;
