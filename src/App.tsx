import { useState } from 'react'
import './App.css'

interface Task{
	id: number
	description: string
}

function createTask(id: number, description: string){
	let task: Task = {
		id: id,
		description: description
	}

	return task
}

function List(props: { list: Task[] }){

	return(
		<div>
			<ul>
				{props.list.map( value => <li key={value.id}><input defaultValue={value.description} type="text"/></li> )}	
			</ul>
		</div>
	)
}

function App() {
	const [tasks, setTasks] = useState(Array<Task>)

  return (
    <>
	<div>
		<input id="newTaskField" defaultValue="" type="text"/>
		<input defaultValue="Add task" type="button" onClick={(_target) => {
			const doc = (document.querySelector("#newTaskField") as HTMLInputElement);
			const updatedTasks = tasks.slice();

			console.debug(updatedTasks.length)

			const newTaskId: number = updatedTasks.length === 0 ? 0 : updatedTasks.at(-1)!.id + 1
			
			updatedTasks.push(createTask( newTaskId, doc.value ));
			console.debug(updatedTasks)
			setTasks(updatedTasks);
		}}/>
		<List list={tasks}/>
	</div>
    </>
  )
}

export default App
