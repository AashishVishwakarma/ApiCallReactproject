//import logo from './logo.svg';
import "./App.css";
import Users from "./components/Datafetch";
import Posts from "./components/PostData";
import Post from "./components/details";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route exact path="/" component={Users} />
            <Route path="/posts/:userId" component={Posts} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
