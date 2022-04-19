import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Counter from './routes/useReducer';
import TextInputWithFocusButton from './routes/useRef'
import ToggleTheme from './routes/useContext/ThemeContext'
import Counter_Callback from './routes/useCallback/useCallback'
import Home from './routes/customHook/fetchApi'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/hooks/useCallback' element={<Counter_Callback />}  ></Route>
          <Route path="/hooks/useReducer" element={<Counter />}  ></Route>
          <Route path='/hooks/useRef' element={<TextInputWithFocusButton />}  ></Route>
          <Route path='/hooks/useContext' element={<ToggleTheme />} ></Route>
          <Route path='/hooks/useFetch' element={<Home />} ></Route>
        </Route>
        </Routes>


    </BrowserRouter>,
  document.getElementById('root')
);

