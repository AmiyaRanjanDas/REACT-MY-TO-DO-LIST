import Header from './myComponent/header';
import { Formbody } from './myComponent/Formbody';
import ShowmyToDO from './myComponent/showmytodo';
import About from './myComponent/about';
import Footer from './myComponent/footer';

import React, { useState, useEffect } from "react";
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';

export default function App(){

  // --------------------------------darkmode------------------------------------
  const [text, settext] = useState('Dark Mode')

  const [mystyle, setmystyle] = useState({
    // color: 'black',
    backgroundColor: 'white',
    minHeight: '40.46vw',
    padding:'0.7vw'
  })

  const darkmode = () => {
    if (mystyle.backgroundColor === 'white') {
      setmystyle({
        // color: 'black',
        backgroundColor: 'black',
        minHeight: '40.46vw',
        padding:'0.7vw'
        
      })
      settext('Light Mode')
    }
    else {
      setmystyle({
        // color: 'white',
        backgroundColor: 'white',
        minHeight: '40.46vw',
         padding:'0.7vw'
      })
      settext('Dark Mode')
    }
  };

  //   const onchange=(event)=>{
  //     set(event.target.value);
  //     // setWordCount(event.target.value);
  // }

  // ---------------------------------darkmode------------------------------------
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, settodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // ---------------------------------Adding TODO------------------------------------
  const addtodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    settodos([...todos, mytodo]);
    // console.log(mytodo);     
  }

  // ---------------------------------Deleting TODO------------------------------------
  const onDelete = (todo) => {
    settodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  return (
    <>
      <HashRouter>
        <Header mode={text} fn={darkmode} />
        <div style={mystyle} >
        <Routes>
          <Route path="/" element={    
            <>    
              <Formbody addtodo={addtodo} mode={text}/>
              <ShowmyToDO todos={todos} onDelete={onDelete} mode={text}/>
              <div style={{ height: '6px' }} />
            </>    
          }/>

          <Route path="/about" element={<About mode={text}/>} />
        </Routes>
        </div>

        <Footer mode={text}/>
      </HashRouter>
    </>
  )
}