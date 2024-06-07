export const loginUser = async (formData) => {
  const req = await fetch("http://localhost:5000/login", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    credentials: "include",
    body: JSON.stringify(formData)
  });
  const data = await req.json();

  return {
    status: req.status,
    data: data.data
  };
};


export const createUser = async (formData) => {
  const req = await fetch("http://localhost:5000/register", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    credentials: "include",
    body: JSON.stringify(formData)
  });
  const data = await req.json();

  return {
    status: req.status,
    data: data.data
  };
}


export const logoutUser = async (formData) => {
  const req = await fetch("http://localhost:5000/logout", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
    credentials: "include",
    body: JSON.stringify(formData)
  });
  const data = await req.json();

  return {
    status: req.status,
    data: data.data
  };
}