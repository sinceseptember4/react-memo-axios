import { BrowserRouter, Link ,Routes, Route}from "react-router-dom";
import {Main} from './main'
import {Edit} from './edit'

function App() {
  return (
  <BrowserRouter>
    <Link to="/">戻る</Link>
    <Link to="/edit">編集</Link>
    <Routes>
      <Route exact path="/">
        <Main />
      </Route>
      <Route  path="/edit">
        <Edit/>
      </Route>
    </Routes>
  </BrowserRouter>
  )

}

export default App;
