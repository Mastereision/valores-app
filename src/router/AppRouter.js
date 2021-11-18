import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllArticlesPage from '../page/AllArticlesPage';
import IndexPage from '../page/IndexPage';
import OneArticlePage from '../page/OneArticlePage';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/articles" component={AllArticlesPage} />
                <Route path="/articles/one" component={OneArticlePage} />
            </Switch>
        </Router>
    )
}
