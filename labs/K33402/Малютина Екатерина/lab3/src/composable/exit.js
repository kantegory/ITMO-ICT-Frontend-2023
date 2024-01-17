export function exit() {
    delete localStorage.accessToken;
    delete localStorage.user;
}