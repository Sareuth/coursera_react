function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Chris Holland!</h1>
      <h2>The time now is {currDate.toLocaleTimeString()} on {currDate.toLocaleDateString()}.</h2>
    </div>
  );
}

export default App;