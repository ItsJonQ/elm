import React from 'react';
import { Truncate } from '../../index';

export default {
	title: 'Truncate',
};

export const _default = () => (
	<Truncate>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu eros ut
		mi tincidunt pellentesque. Fusce augue ligula, gravida ut dui eget,
		commodo cursus arcu. In rhoncus massa at erat ullamcorper volutpat.
		Donec id lacus accumsan risus rhoncus mollis. Donec tincidunt eget lorem
		at vehicula. Aenean laoreet tristique leo quis sagittis. Proin elementum
		placerat felis.
	</Truncate>
);

export const numberOfLines = () => (
	<Truncate numberOfLines={2}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu eros ut
		mi tincidunt pellentesque. Fusce augue ligula, gravida ut dui eget,
		commodo cursus arcu. In rhoncus massa at erat ullamcorper volutpat.
		Donec id lacus accumsan risus rhoncus mollis. Donec tincidunt eget lorem
		at vehicula. Aenean laoreet tristique leo quis sagittis. Proin elementum
		placerat felis.
	</Truncate>
);

export const head = () => (
	<Truncate ellipsizeMode="head" limit={25}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu eros ut
		mi tincidunt pellentesque. Fusce augue ligula, gravida ut dui eget,
		commodo cursus arcu. In rhoncus massa at erat ullamcorper volutpat.
		Donec id lacus accumsan risus rhoncus mollis. Donec tincidunt eget lorem
		at vehicula. Aenean laoreet tristique leo quis sagittis. Proin elementum
		placerat felis.
	</Truncate>
);

export const middle = () => (
	<Truncate ellipsizeMode="middle" limit={25}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu eros ut
		mi tincidunt pellentesque. Fusce augue ligula, gravida ut dui eget,
		commodo cursus arcu. In rhoncus massa at erat ullamcorper volutpat.
		Donec id lacus accumsan risus rhoncus mollis. Donec tincidunt eget lorem
		at vehicula. Aenean laoreet tristique leo quis sagittis. Proin elementum
		placerat felis.
	</Truncate>
);

export const tail = () => (
	<Truncate ellipsizeMode="tail" limit={25}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu eros ut
		mi tincidunt pellentesque. Fusce augue ligula, gravida ut dui eget,
		commodo cursus arcu. In rhoncus massa at erat ullamcorper volutpat.
		Donec id lacus accumsan risus rhoncus mollis. Donec tincidunt eget lorem
		at vehicula. Aenean laoreet tristique leo quis sagittis. Proin elementum
		placerat felis.
	</Truncate>
);
