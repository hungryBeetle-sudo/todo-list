import { useState } from 'react'
import './App.css'

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
