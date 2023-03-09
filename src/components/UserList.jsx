import { useState, useMemo, useRef, useEffect } from 'react';
import { User } from './User';

export const UserList = ({ users }) => {
	const [selectedUserId, setSelectedUserId] = useState(null);
	const [user, setUser] = useState('null');
	const userCacheRef = useRef({});

	const handleUserClick = (userId) => {
		setSelectedUserId(userId);
	};

	useEffect(() => {
		if (!userCacheRef.current[selectedUserId]) {
			(async () => {
				const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedUserId}`);
				const data = await response.json();
				userCacheRef.current[selectedUserId] = data;
				setUser(data);
			})();
		}
	}, [selectedUserId]);

	const selectedUser = useMemo(() => {
		if (!selectedUserId) return null;
		if (userCacheRef.current[selectedUserId]) return userCacheRef.current[selectedUserId];
	}, [selectedUserId]);

	return (
		<div>
			<h1>Lista de usuarios</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id} onClick={() => handleUserClick(user.id)}>
						{user.name}
					</li>
				))}
			</ul>
			{selectedUserId ? <User user={selectedUser || user} /> : null}
		</div>
	);
};
