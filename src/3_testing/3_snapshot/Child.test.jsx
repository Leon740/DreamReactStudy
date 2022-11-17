import { render, screen } from '@testing-library/react';
import Child from './Child';

// === Concept
// The idea of snapshot testing is to create a snapshot at the end of work (version of work)
// After updates compare old and new version of snapshots
// Possible options in this case: * update code to match old snapshot, * update old snapshot with new version of code

describe('List', () => {
  test('Snapshot', () => {
    const listData = ['React', 'Redux', 'TypeScript'];
    render(<Child list={listData} />);

    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();

    expect(list).toMatchSnapshot();
  });
});
