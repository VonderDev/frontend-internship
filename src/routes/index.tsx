import { Switch, Route } from 'react-router-dom';
import Home from 'components/pages/Home/view/Home';
import Board from 'components/pages/Board/views/Board';
import Profile from 'components/pages/Profile/views/Profile';
import Login from 'components/pages/Authentication/views/Login/Login';
import Register from 'components/pages/Authentication/views/Register/Register';
import editProfile from 'components/pages/Profile/views/EditProfile';
import PrivateRoute from 'components/AuthContext/PrivateRoute';
import TestStyle from 'TestStyle';
import TestResult from 'components/pages/Test/views/TestQuestion/TestResult';
import Test from 'components/pages/Test/views/TestStartPage/Test';
import TestStory from 'components/pages/Test/views/TestStartPage/TestStory';
import TestOverview from 'components/pages/Test/views/TestStartPage/TestOverview';
import { TestProvider } from 'components/pages/Test/views/TestQuestion/TestContext';
import Result from 'components/pages/Test/views/ResultPage/Result';
import editProfile from 'components/pages/Profile/views/EditProfile';
import CharactorDetail from 'components/pages/Test/views/ResultPage/ResultInfo/CharactorDetail';
import TestOverview from 'components/pages/Test/views/TestStartPage/TestOverview';
import ProfileResult from 'components/pages/Profile/views/ProfileResult';
import BoardHistory from 'components/pages/Profile/views/BoardHistory';
import PrivateRoute from 'components/AuthContext/PrivateRoute';
import TestStory from 'components/pages/Test/views/TestStartPage/TestStory';
import ResultOverview from 'components/pages/Test/views/ResultPage/ResultInfo/ResultOverview';
import ResultInfo from 'components/pages/Test/views/ResultPage/ResultInfo/ResultInfo';
import TestQuestion from 'components/pages/Test/views/TestQuestion/TestQuestion';
import ProfileResult from 'components/pages/Profile/views/ProfileResult';
import BoardHistory from 'components/pages/Profile/views/BoardHistory';


function Routing() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/board" component={Board} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/testoverview" component={TestOverview} />
            <Route exact path="/teststory" component={TestStory} />
            <Route exact path="/testquestion">
                <TestProvider>
                    <TestQuestion />
                </TestProvider>
            </Route>
            <Route exact path="/resultoverview" component={ResultOverview} />
            <Route exact path="/resultinfo" component={ResultInfo} />
            <PrivateRoute exact path="/editProfile" component={editProfile} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/charactordetail" component={CharactorDetail} />
            <PrivateRoute exact path="/profileresult" component={ProfileResult} />
            <PrivateRoute exact path="/boardhistory" component={BoardHistory} />
            <Route exact path="/teststyle" component={TestStyle} />
        </Switch>
    );
}

export default Routing;
