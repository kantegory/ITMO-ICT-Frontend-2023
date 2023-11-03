export async function fetchAuthUser(token) {
  const res = await fetch("http://localhost:3030/api/get-user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(async (response) => {
    const data = await response.json();
    if (response.status === 403) {
      throw new Error(data.message);
    }
    return data;
  });

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
  }).then(async (response) => {
    const data = await response.json();
    if (response.status === 403) {
      throw new Error(data.message);
    }
    return data;
  });

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
  }).then(async (response) => {
    const data = await response.json();
    if (response.status === 403) {
      throw new Error(data.message);
    }
    return data;
  });

  return res;
}

export async function fetchLogin(formState) {
  const res = await fetch("http://localhost:3030/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formState),
  }).then(async (response) => {
    const data = await response.json();
    if (response.status === 400) {
      throw new Error(data.message);
    }
    return data;
  });

  return res;
}

export async function fetchRegistration(formState) {
  const res = await fetch("http://localhost:3030/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formState),
  }).then(async (response) => {
    const data = await response.json();
    if (response.status === 400) {
      throw new Error(data.message);
    }
    return data;
  });

  return res;
}
