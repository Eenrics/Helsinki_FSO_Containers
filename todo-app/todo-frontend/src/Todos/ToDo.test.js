import React from 'react';
import { render } from '@testing-library/react';
import ToDo from './ToDo';

describe('ToDo', () => {
  const todo = { text: 'Finish writing test', done: false };
  const doneInfo = <span>Done</span>;
  const notDoneInfo = <span>Not done</span>;

  it('renders the todo text', () => {
    const { getByText } = render(<ToDo todo={todo} doneInfo={doneInfo} notDoneInfo={notDoneInfo} />);
    expect(getByText('Finish writing test')).toBeInTheDocument();
  });

  it('renders done info when todo is done', () => {
    const { getByText } = render(<ToDo todo={{ ...todo, done: true }} doneInfo={doneInfo} notDoneInfo={notDoneInfo} />);
    expect(getByText('Done')).toBeInTheDocument();
  });

  it('renders not done info when todo is not done', () => {
    const { getByText } = render(<ToDo todo={todo} doneInfo={doneInfo} notDoneInfo={notDoneInfo} />);
    expect(getByText('Not done')).toBeInTheDocument();
  });
});