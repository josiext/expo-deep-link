import "./App.css";

function App() {
  const handleOpenApp = () => {
    window.location.href = "expo-deep-link://";
  };

  return (
    <>
      <h1>Web</h1>

      <button onClick={handleOpenApp}>Open Mobile</button>
    </>
  );
}

export default App;
