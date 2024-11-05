import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanSateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateSateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import { useSelector } from "react-redux";

export default function Lab4() {
	function sayHello() {
		alert("Hello");
	  }
	  const { todos } = useSelector((state: any) => state.todosReducer);
	return (
	  <div id='wd-lab4'>
		<h2>Lab 4</h2>
		<ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />

		<ClickEvent	/>
		<PassingDataOnEvent />
		<PassingFunctions theFunction={sayHello} />
		<EventObject />
		<Counter />
		<BooleanStateVariables />
		<StringStateVariables />
		<DateStateVariable />
		<ObjectStateVariable />
		<ArrayStateVariable />
		<ParentStateComponent />
		<ReduxExamples />
	  </div>
	);
  }
  