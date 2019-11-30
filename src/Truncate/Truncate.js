import React from 'react';
import {
	truncateContent,
	TRUNCATE_ELLIPSIS,
	TRUNCATE_TYPE,
} from './Truncate.utils';
import { css, View } from '../index';

export const truncateDefaultProps = {
	ellipsis: TRUNCATE_ELLIPSIS,
	limit: 0,
	numberOfLines: 0,
	ellipsizeMode: TRUNCATE_TYPE.auto,
};

export function Truncate({ children, numberOfLines, ...restProps }) {
	const truncatedContent = truncateContent(children, restProps);
	const truncate = ({ ellipsizeMode }) => {
		if (ellipsizeMode !== TRUNCATE_TYPE.auto) return '';
		if (numberOfLines) {
			return `
				display: -webkit-box;
				overflow: hidden;
				-webkit-line-clamp: ${numberOfLines};
				-webkit-box-orient: vertical;
			`;
		}

		return `
			display: block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		`;
	};

	return (
		<View
			as="span"
			css={css`
				${truncate}
			`}
			{...restProps}
		>
			{truncatedContent}
		</View>
	);
}

Truncate.defaultProps = truncateDefaultProps;

export default Truncate;
