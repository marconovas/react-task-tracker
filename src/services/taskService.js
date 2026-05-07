const API_URL = "http://localhost:3000/tasks";

export async function getTasks () {
    const res = await fetch(API_URL);
    return res.json();
}

export async function createTask (data) {
    return await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(data)
    });
}

export async function updateTask (id, data) {
    return await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export async function removeTask (id) {
    return await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
}