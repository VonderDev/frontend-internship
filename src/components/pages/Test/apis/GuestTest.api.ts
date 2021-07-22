import axios from "axios";
import { useState } from "react";
const tokenGuest = localStorage.getItem('token');


export async function ApiPostCreateGuestToken() {
    console.log('[Result Data for Guest] :');
    const [token, setToken] = useState<any | null>();

        return await axios.post('/guest/create', ).then(async (res) => {
            if (res.data.token) await localStorage.setItem('token', res.data.token);
            setToken(localStorage.getItem('token'));
            return token;
        })
        .catch((err) => {
            console.error(err);
            console.log('Cannot Gen Token for Guest');
        });
    
}
