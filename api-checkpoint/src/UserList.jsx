import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import axios from 'axios';
const UserList = () => {
	const [listOfUSer, setListOfUSer] = useState([]);
	const [error, setError] = useState(null);
	useEffect(() => {
		axios
				.get('https://jsonplaceholder.typicode.com/users')
				.then((res) => {setListOfUSer(res.data);})
				.catch((err) => setError(err));},[]
				);
	return (
		<div>
			{console.log(listOfUSer)}
			{listOfUSer.map((data) => (<CardList listOfUSer={data} />))}
		</div>
	);
};

export default UserList;