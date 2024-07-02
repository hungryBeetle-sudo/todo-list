import { useState } from 'react'
import './App.css'

function createTask(id: number, description: string){
	let task = {
		id: id,
		description: description
	}

	return task
}

function List(){
	const [tasks, setTasks] = useState([])

	return(
		<div>
			<ul>
				{tasks.map( value => <li>{value}</li> )}	
			</ul>
		</div>
	)
}

function App() {
  return (
    <>
	<div>
		<h1>Hello World!</h1>
	</div>
    </>
  )
}

export default App
