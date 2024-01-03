export async function useFetchUseCases() {
    const response = await fetch("http://localhost:3000/use_cases");
    if (!response.ok) {
        const msg = `An error has occurred: ${response.status}, ${response.statusText}`;
        throw new Error(msg);
    }
    const responseJson = await response.json();

    const ulUseCases = document.getElementById('useCasesList');
    const list = document.createDocumentFragment();
    responseJson.map(function (useCase) {
        const li = document.createElement('li');

        li.innerHTML = `${useCase.use_case}`;
        li.className = "list-group-item";

        list.appendChild(li);
    });
    ulUseCases.appendChild(list);
}
