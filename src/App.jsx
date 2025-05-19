import './App.css';
import { useState } from 'react';
import Data from './inputhandle/Data';
import Ricky from './project/Ricky';
import Tictactoe from './project/Tictactoe';
import Data1 from './inputhandle/Data1';
import Data2 from './inputhandle/Data2';
import Task from './Formik/Task';
import Result from './inputhandle/Result';
import Formiktag from './Formik/Formiktag';
import Resultformik from './Formik/Resultformik';
import Api from './API call/Api';
import Api1 from './API call/Api1';
import Rickandmorty  from './API call/Rickandmorty';

function App() {

  return (
    <>
    {/* <Task></Task> */}
    {/* <Formiktag></Formiktag> */}
    {/* <Resultformik></Resultformik> */}


    {/* <Data></Data> */}
    {/* <Data1></Data1> */}
    {/* <Data2></Data2> */}
    {/* <Result></Result> */}


    {/* <Ricky></Ricky> */}
    {/* <Tictactoe></Tictactoe> */}

    {/* <Api></Api> */}
    {/* <Api1></Api1> */}
    <Rickandmorty></Rickandmorty>
    </>
  );
}

export default App;
