import React from 'react';
import { css, View } from '../index';
import { get } from '../utils';

const defaultProps = {
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: 'md',
};

const flexChildProps = {
	minWidth: 0,
	maxWidth: '100%',
};

export function Flex(props) {
	const gaps = ({ gap }) => {
		const gaps = {
			xl: '24px',
			lg: '20px',
			md: '12px',
			sm: '8px',
			xs: '4px',
			none: '0px',
		};

		return `
			> * {
				margin-right: ${get(gaps, gap, gaps.md)};
				&:last-child {
					margin-right: 0;
				}
			}
		`;
	};

	return (
		<View
			css={css`
				${gaps}
			`}
			display="flex"
			{...props}
		/>
	);
}

export function FlexItem(props) {
	return <View {...flexChildProps} {...props} />;
}
export function FlexBlock(props) {
	return <View {...flexChildProps} flex="1" {...props} />;
}

Flex.Item = FlexItem;
Flex.Block = FlexBlock;
Flex.defaultProps = defaultProps;
