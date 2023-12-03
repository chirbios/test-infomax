import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Global } from "@emotion/react";
import Header from "./layout/Header";
import Cars from './pages/Cars/Cars';
import Favorites from './pages/Favorites/Favorites';
import { GLOBAL_STYLES } from "./styles/global.styles";
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
  url: 'http://localhost:4000/api',
  exchanges: [cacheExchange, fetchExchange],
});


const App = () => {
  return (
    <>
      <Provider value={client}>
        <Global 
          styles={GLOBAL_STYLES} 
        />
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="cars" element={<Cars/>} />
            <Route path="favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
