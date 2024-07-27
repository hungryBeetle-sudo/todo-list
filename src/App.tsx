import { useState } from 'react'
import './App.css'

function createTask(id: number, description: string){
	let task = {
		id: id,
		description: description
	}

	return task
}

function List(props: { list }){

	return(
		<div>
			<ul>
				{props.list.map( value => <li key={value.id}><input defaultValue={value.description} type="text"/></li> )}	
			</ul>
		</div>
	)
}

function App() {
	const [tasks, setTasks] = useState([])

  return (
    <>
	<div>
		<input id="newTaskField" defaultValue="" type="text"/>
		<input defaultValue="Add task" type="button" onClick={(target) => {
			const doc = document.querySelector("#newTaskField");
			const updatedTasks = tasks.slice();
			updatedTasks.push(createTask( updatedTasks.at(-1).id + 1, doc.value ));
			setTasks(updatedTasks);
		}}/>
		<List list={tasks}/>
	</div>
    </>
  )
}

export default App
