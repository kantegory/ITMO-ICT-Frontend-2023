export async function fetchAuthUser(token) {
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

export async function fetchUser(token, id) {
  const res = await fetch("http://localhost:3030/api/get-user-by-id", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id }),
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
  console.log(search);
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
