export function useSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchString = searchInput.value;

    localStorage.setItem('searchString', searchString);
}