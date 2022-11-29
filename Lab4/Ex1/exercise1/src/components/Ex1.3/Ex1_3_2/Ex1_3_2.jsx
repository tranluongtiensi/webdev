import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import PeopleContainer from "./PeopleContainer"

export default function Ex132() {
  return (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/people">
                    <PeopleContainer/>
                </Route>
                <Link to="/people">People</Link>
            </Switch>
        </BrowserRouter>
    </>
  )
}