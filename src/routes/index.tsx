import { Switch, Route } from 'react-router-dom';
import Home from 'components/pages/Home/view/Home';
import Board from 'components/pages/Board/views/BoardPage/Board';
import Profile from 'components/pages/Profile/views/Profile';
import Login from 'components/pages/Authentication/views/Login/Login';
import Register from 'components/pages/Authentication/views/Register/Register';
import TestStyle from 'TestStyle';
import Test from 'components/pages/Test/views/TestStartPage/Test';
import { TestProvider } from 'components/pages/Test/views/TestQuestion/TestContext';
import Result from 'components/pages/Test/views/ResultPage/Result';
import editProfile from 'components/pages/Profile/views/EditProfile';
import CharactorDetail from 'components/pages/Test/views/ResultPage/ResultInfo/CharactorDetail';
import TestOverview from 'components/pages/Test/views/TestStartPage/TestOverview';
import PrivateRoute from 'components/AuthContext/PrivateRoute';
import ResultOverview from 'components/pages/Test/views/ResultPage/ResultInfo/ResultOverview';
import ResultInfo from 'components/pages/Test/views/ResultPage/ResultInfo/ResultInfo';
import TestQuestion from 'components/pages/Test/views/TestQuestion/TestQuestion';
import BoardHistory from 'components/pages/Profile/views/BoardHistory';
import BoardCreateContent from 'components/pages/Board/views/CreateContent/BoardCreateContent';
import ProfileResult from 'components/pages/Profile/views/ProfileResult';
import Filter from 'components/pages/Board/views/Board/Filter';
import BoardContent from 'components/pages/Board/views/CreateContent/BoardContent';
import TestPixi from 'components/GameElement/Game/testpixi';
import CommentOfContent from 'components/pages/Board/views/Comment/CommentOfContent';

function Routing() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/boardcreate" component={BoardCreateContent} />
            <Route exact path="/boardcontent/:id" component={BoardContent} />
            <Route exact path="/boardcontent/:id/comment" component={CommentOfContent} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/board" component={Board} />
            <Route exact path="/boardContent" component={BoardContent} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/test" component={Test} />
            <PrivateRoute exact path="/testoverview" component={TestOverview} />
            <PrivateRoute exact path="/testquestion">
                    <TestQuestion />
            </PrivateRoute>
            <Route exact path="/resultoverview" component={ResultOverview} />
            <Route exact path="/resultinfo" component={ResultInfo} />
            <PrivateRoute exact path="/editProfile" component={editProfile} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/charactordetail" component={CharactorDetail} />
            <PrivateRoute exact path="/profileresult" component={ProfileResult} />
            <PrivateRoute exact path="/boardhistory" component={BoardHistory} />
            <Route exact path="/teststyle" component={TestStyle} />
            <Route exact path="/pixi" component={TestPixi} />
            <Route exact path="/filter" component={Filter} />
        </Switch>
    );
}

export default Routing;
