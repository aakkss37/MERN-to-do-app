import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';

function App () {
	return (
		<div className="App">
			<div className='appContainer'>
				<Header />
			</div>
			<TodoForm />
		</div>
	);
}

export default App;
