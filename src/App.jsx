import "./App.css";
import LoginNavbar from "./components/LoginNavbar";
import LoginPanel from "./components/LoginPanel";

function App() {
  return (
    <div className={`h-full`}>
      <LoginNavbar />
      <main className={`App pt-16 h-full flex`}>
        <LoginPanel />
        <div className={`bg-gray-800 w-full h-full hidden md:block`}></div>
      </main>
    </div>
  );
}

export default App;
