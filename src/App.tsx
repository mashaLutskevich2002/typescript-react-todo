import React, {useEffect, useState} from 'react';
import {Header} from "./Components/Header";
import {TodoMain} from "./Components/TodoMain";
import {ITodo} from "./todoObject";
import { PopupDelete } from './Components/PopupDelete';

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [isShow, setIsShow] = useState(false)

    const handlerTodoValue = (title: string) =>{
        const newTodo: ITodo = {
            id: Date.now(),
            title: title,
            completed: false
        }
        setTodos(prev => [newTodo, ...prev])
    }

    useEffect(() => {
        const saveTodo = JSON.parse(localStorage.getItem('todo') || '[]') as ITodo[]
        setTodos(saveTodo)
    },[])


    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todos))
    },[todos])

    const checkedTodo=(id:number)=>{
      setTodos((prev) => {
          return prev.map(item => {
              if (item.id === id) {
                  item.completed = !item.completed;
              }
              return item;
          });
      })
    }

    const removeTodo=(id:number) => {
        let showMess = window.confirm('Are you sure you want to delete the note?')
        if(showMess){
            setTodos(prev => prev.filter((item) => item.id !== id))
            setIsShow(true)
        }
        // setIsShow(false)
    }

  return (
    <>
        <Header/>
        <PopupDelete isShow={isShow} setIsShow={setIsShow} />
        <TodoMain isShow={isShow} setIsShow={setIsShow} handlerTodoValue = {handlerTodoValue} todos={todos} checkedTodo={checkedTodo} removeTodo={removeTodo}/>
    </>

  );
}

export default App;
