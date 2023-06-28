
const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

function App() {
  // const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);
  return (
    <>
      <h2>User Datails</h2>
      {/* <ul>{userItems}</ul> */}
      <ul>{users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </>
  );
}

export default App;