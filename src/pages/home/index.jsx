import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incremented, decremented } from "../../redux/reducer/counter";
import { addTodo, deleteTodo } from "../../redux/reducer/todo";



export const Home = () => {
  const { count } = useSelector((state) => state.counter);
  const { todos } = useSelector((s) => s.todo);
  const inputRef = useRef();
  console.log(todos);

  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-primary text-white mt-5">
        <h1>Home</h1>
        <p>Lorem, ipsum dolor.</p>
        <h2>Count :{count}</h2>
        <button onClick={() => dispatch(incremented())}>Plus</button>
        <button onClick={() => dispatch(decremented())}>Minus</button>
      </div>

      <div className="bg-warning text-white mt-5">
        <h1>Todo</h1>
        <input ref={inputRef}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              dispatch(addTodo(e.target.value));
              inputRef.current.value = "";
            }
          }}
          type="text"
          placeholder="Enter item name: "
        />

        <ul>
          {todos.length && todos.map((todo, i) => <li className="fs-3" key={i}>{todo} 
          <button onClick={()=> dispatch(deleteTodo(todo))} className="bg-danger rounded fs-6 p-0 px-2">x</button>
          </li>)}
        </ul>
      </div>
    </>
  );
};
