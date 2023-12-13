const url = "http://127.0.0.1:3000/machine/";

export async function GetListMachine() {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export async function AddMachine(machine) {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },        
        body: JSON.stringify(machine)
    });
    const data = await res.json();
    return data;
}

export async function UpdateMachine(machine) {
    const res = await fetch(url, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(machine)
    });
    const data = await res.json();
    return data;
}

export async function DeleteMachine(id) {
    const res = await fetch(url + id, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' }
    });
    const data = await res.json();
    return data;
}