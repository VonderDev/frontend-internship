import { useHistory } from 'react-router-dom';
import { CardLatest } from './CardLatest';
import { CardTopTen } from './CardTopTen';

function Board() {
    const history = useHistory();

    return (
        <div>
            <div style={{ marginLeft: '16px' }}>
                <CardTopTen />
            </div>

            <div style={{ transform: 'translateY(-2%)', marginLeft: '16px', marginRight: '16px' }}>
                <CardLatest />
            </div>
        </div>
    );
}

export default Board;
