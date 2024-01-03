export function useExit() {
    delete localStorage.accessToken;
    delete localStorage.user;
}