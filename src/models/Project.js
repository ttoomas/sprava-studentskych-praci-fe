export const getProjects = async () => {
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

export const getProjectById = async (id) => {
    const req = await fetch(`http://localhost:5000/project/${id}`, {
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

export const declineProject = async (formData) => {
    const req = await fetch("http://localhost:5000/project-decline", {
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
}

export const confirmProject = async (formData) => {
    const req = await fetch("http://localhost:5000/project-confirm", {
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
}

export const createProject = async (formData) => {
    const req = await fetch("http://localhost:5000/projects", {
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
}

export const updateProject = async (formData, id) => {
    const req = await fetch(`http://localhost:5000/project/update/${id}`, {
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
}

export const deleteProject = async (id) => {
    const req = await fetch(`http://localhost:5000/project/${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        method: "DELETE",
    });
    const data = await req.json();

    return {
        status: req.status,
        data: data.data,
    };
}