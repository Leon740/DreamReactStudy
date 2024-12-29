function createResource(fetcher) {
  let data; // Store fetched data
  let promise; // Store fetch promise

  return {
    read: () => {
      if (data) return data; // Return cached data if available

      if (!promise) {
        // Start fetching if not already started
        promise = fetcher().then((result) => {
          setTimeout(() => {
            data = result; // Store the result after fetching
          }, 2000);
        });
      }

      throw promise; // Throw the promise to trigger Suspense fallback
    }
  };
}

const fetchTodos = () =>
  fetch('https://jsonplaceholder.typicode.com/todos/').then((response) => response.json());
const todosResource = createResource(fetchTodos);

export function ComponentChildFetch() {
  const todos = todosResource.read();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
