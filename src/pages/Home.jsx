import React ,{ useState } from 'react';
import InputBox from '../Components/InputBox'
import TodoList from '../Components/TodoItem';
import TodoItemList from '../Components/TodoItemList'

const Home = () => {
   const [TodoList, setTodoList] = useState([]);

      <div className="home_container">
         {/* ToDo Item을 추가할 수 있는 input 박스 */} 
         <InputBox></InputBox>

         <TodoItemList></TodoItemList>
      </div>
  };
  
  export default Home;