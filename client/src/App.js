import './App.css';
import DisplayTodo from './components/DisplayTodo';
import Header from './components/Header';
import TodoForm from './components/TodoForm';

function App () {
	return (
		<div className="App">
			<div className='appContainer'>
				<Header />
			</div>
			<div>
				<TodoForm />
			</div>
			<div>
				<DisplayTodo />
			</div>
		</div>
	);
}

export default App;
