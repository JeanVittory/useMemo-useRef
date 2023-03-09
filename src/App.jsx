import './App.css';
import { UserList } from './components/UserList';

function App() {
	const users = [
		{
			id: 5,
			name: 'Juan',
			email: 'juan@hotmail.com',
			phone: '12345',
		},
		{
			id: 6,
			name: 'Santiago',
			email: 'santiago@hotmail.com',
			phone: '12345',
		},
		{
			id: 9,
			name: 'Pedro',
			email: 'Pedro@hotmail.com',
			phone: '12345',
		},
	];

	return (
		<div className='App'>
			<UserList users={users} />
		</div>
	);
}

export default App;
