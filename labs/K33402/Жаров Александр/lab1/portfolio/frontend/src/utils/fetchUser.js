export async function fetchUser(token) {
  const res = await fetch("http://localhost:3030/api/get-user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())

    .then((responseData) => {
      if (responseData) {
        return responseData;
      } else {
        console.log(responseData.message);
      }
    })
    .catch((error) => console.log(error));

  return res;
}
