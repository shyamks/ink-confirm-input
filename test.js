import React from 'react';
import {spy} from 'sinon';
import test from 'ava';
import TextInput from 'ink-text-input';
import ConfirmInput from '.';

test('render', t => {
	const onChange = spy();
	const onSubmit = spy();
	const expected = render(<TextInput value='Yes' onChange={onChange}/>);
	const result = render(<ConfirmInput value='Yes' onChange={onChange} onSubmit={onSubmit}/>);
	t.is(result.lastFrame(), expected.lastFrame());
});
