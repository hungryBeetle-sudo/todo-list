import { useState } from 'react'
import './App.css'

interface Task{
	id: number
	description: string
}

function createTask(id: number, description: string){
	const task: Task = {
		id: id,
		description: description
	}

	return task
}

function List(props: { list: Task[], setTaskList: (tasks: Task[]) => void}){

	return(
		<div>
			<ul>
				{props.list.map( value => <li key={value.id}>
					<input defaultValue={value.description} type="text"/>
					<input onClick={() => {
						let updatedList = props.list

						updatedList = updatedList.filter(task => task.id !== value.id)
						props.setTaskList(updatedList)
					}}
					className="removeButton" value="Remove" type='button'/>
				</li> )}	
			</ul>
		</div>
	)
}

function App() {
	const [tasks, setTasks] = useState(Array<Task>)

  return (
    <>
	<div>
		<input id="newTaskField" placeholder="ex: Check e-mail box" spellCheck={true} defaultValue="" type="text"/>
		<input className="addTaskButton" defaultValue="Add task" type="button" onClick={() => {
			const doc = (document.querySelector("#newTaskField") as HTMLInputElement);
			const updatedTasks = tasks.slice();
			const newTaskId: number = updatedTasks.length === 0 ? 0 : updatedTasks.at(-1)!.id + 1
			
			updatedTasks.push(createTask( newTaskId, doc.value ));
			setTasks(updatedTasks);
			doc.value = "";
		}}/>
		<List list={tasks} setTaskList={setTasks}/>
	</div>
    </>
  )
}

export default App
