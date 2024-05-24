export const getProjects = async (formData) => {
    const req = await fetch("http://localhost:5000/projects", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "GET",
    });
    const data = await req.json();

    return {
        status: req.status,
        data: data.data,
    };
};

export const addProject = async (formData) => {
    const req = await fetch("http://localhost:5000/project-assign", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        credentials: "include",
        method: "POST",
        body: JSON.stringify(formData)
    });
    const data = await req.json();

    return {
        status: req.status,
        data: data.data,
    };
};
