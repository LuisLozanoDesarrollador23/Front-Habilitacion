const url = "http://127.0.0.1:3000/user/";

export async function GetListuser() {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export async function Adduser(user) {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },        
        body: JSON.stringify(user)
    });
    const data = await res.json();
    return data;
}

export async function Updateuser(user) {
    const res = await fetch(url, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(user)
    });
    const data = await res.json();
    return data;
}

export async function Deleteuser(id) {
    const res = await fetch(url + id, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' }
    });
    const data = await res.json();
    return data;
}