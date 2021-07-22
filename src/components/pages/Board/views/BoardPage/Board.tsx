import { useHistory } from 'react-router-dom';
import { CardLatest } from './CardLatest';
import { CardTopTen } from './CardTopTen';

function Board() {
    const history = useHistory();

    return (
        <div style={{ margin: '20px' }}>
            <CardTopTen />
            <div style={{transform:'translateY(-2%)'}}>
            <CardLatest />
            </div>
        </div>
    );
}

export default Board;
