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

export async function fetchUsers(token, search) {
  const res = await fetch("http://localhost:3030/api/get-users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ search }),
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
