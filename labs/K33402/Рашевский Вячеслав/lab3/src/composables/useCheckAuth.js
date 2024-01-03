export function useCheckAuth() {
    return !!localStorage.accessToken;
}