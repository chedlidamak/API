import * as React from 'react';
import {
	Card,
	CardContent,
	Typography,
} from '@mui/material';

const CardList = ({ listOfUSer }) => {
	return (
		<Card	sx={{display: 'inline-block'}}>
			<CardContent>
				<Typography variant="h3" component="div">{listOfUSer.name}</Typography>
				<Typography>{listOfUSer.email}</Typography>
				<Typography>{listOfUSer.address.street}</Typography>
				<Typography>{listOfUSer.address.suite}</Typography>
				<Typography>{listOfUSer.address.city}</Typography>
				<Typography>{listOfUSer.address.geo.lat}</Typography>
			</CardContent>
		</Card>
	);
};
export default CardList;