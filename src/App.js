import Routing from "./confiq/routing";
import Messages from "./component/message";
import Dashboard from "./screens/dashboar";
import SignIN from "./screens/signIn";
import BasicBreadcrumbs from "./screens/drawer";
import ResponsiveDrawer from "./screens/example";

function App() {
  return (
    <div className="App bg-light">
      <Routing />
    </div>
  );
}

export default App;
