import { Switch, Route } from 'react-router-dom';
import Home from 'components/pages/Home/view/Home';
import Board from 'components/pages/Board/views/Board';
import Profile from 'components/pages/Profile/views/Profile';
import Login from 'components/pages/Authentication/views/Login/Login';
import Register from 'components/pages/Authentication/views/Register/Register';
import Test from 'components/pages/Test/views/TestStartPage/Test';
import TestQuestion from 'components/pages/Test/views/TestQuestion/TestQuestion';
import { TestProvider } from 'components/pages/Test/views/TestQuestion/TestContext';
import TestResult from 'components/pages/Test/views/TestQuestion/TestResult';
import Result from 'components/pages/Test/views/ResultPage/Result';
import editProfile from 'components/pages/Profile/views/EditProfile';
import ReadMore from 'components/pages/Test/views/ResultPage/Readmore';
import TestOverview from 'components/pages/Test/views/TestStartPage/TestOverview';
import ProfileResult from 'components/pages/Profile/views/ProfileResult';
import BoardHistory from 'components/pages/Profile/views/BoardHistory';

function Routing() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/board" component={Board} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/testresult" component={TestResult} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/testoverview" component={TestOverview} />
            <Route exact path="/testquestion">
                <TestProvider>
                    <TestQuestion />
                </TestProvider>
            </Route>
            <Route exact path="/editProfile" component={editProfile} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/readmore" component={ReadMore} />
            <Route exact path="/profileresult" component={ProfileResult} />
            <Route exact path="/boardhistory" component={BoardHistory} />

        </Switch>
    );
}

export default Routing;
