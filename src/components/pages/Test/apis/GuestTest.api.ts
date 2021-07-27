import axios from "axios";

export async function ApiPostCreateGuestToken() {
    const token = localStorage.getItem('token');
    if(!token){
        console.log('[Result Data for Guest] :');
        await axios.post('/guest/create', ).then(async (res) => {
            if (res.data.token) await localStorage.setItem('tokenGuest', res.data.token);
            return res;
        })
        .catch((err) => {
            console.error(err);
            console.log('Cannot Gen Token for Guest');
        });
    }
    
}
