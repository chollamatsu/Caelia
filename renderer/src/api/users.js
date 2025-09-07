export function getUsers() { // Later, you can replace getUsers() with real API calls.
    return Promise.resolve([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]);
  }
  