import { useHistory } from 'react-router-dom';
import { CardLatest } from './CardLatest';
import { CardTopTen } from './CardTopTen';

function Board() {
    const history = useHistory();

    return (
        <div style={{ marginTop: '15px' }}>
            <CardTopTen />
            <CardLatest />
        </div>
    );
}

export default Board;
