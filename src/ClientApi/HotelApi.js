const url = "http://127.0.0.1:3000/hotel/";

export async function GetListHotels() {
    const res = await fetch(url);
    const data = await res.json();
    return data[0];
}

export async function AddHotel(hotel) {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },        
        body: JSON.stringify(hotel)
    });
    const data = await res.json();
    return data;
}

export async function UpdateHotel(hotel) {
    const res = await fetch(url, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(hotel)
    });
    const data = await res.json();
    return data;
}

export async function DeleteHotel(id) {
    const res = await fetch(url + id, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' }
    });
    const data = await res.json();
    return data;
}