import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { SWRConfig } from 'swr';
import axios from 'axios';

const fetcher = (url: string) =>
    axios(url, {
        headers: {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        },
    }).then(async (response) => {
        const data = await response.data;
        return data;
    });

const AppWithRouter = () => (
    <SWRConfig value={{ fetcher }}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </SWRConfig>
);
ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

reportWebVitals();
