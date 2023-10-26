import http from '@/services/http.js';
import store from '../store'

export default async function checkToken(to, from, next) {
    try {
        console.log("token: " + store.state.token)
        const tokenAuth = 'Bearer ' + store.state.token;
        const { data } = await http.get("/auth/verify", {
            headers: {
                Authorization: tokenAuth,
            },
        });
        return data;
    } catch (error) {
        return false;       }
}
