import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const AppWithRouter = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

reportWebVitals();
