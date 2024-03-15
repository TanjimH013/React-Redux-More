import "./App.css";

import Users from "./components/Users";

import NewUser from "./components/NewUser";

import UsersProvider from "./context/UsersContext";

const App = () => {
  return (
    <UsersProvider>
      <div className="App">
        <NewUser />
        <Users />
      </div>
    </UsersProvider>
  );
};

export default App;
