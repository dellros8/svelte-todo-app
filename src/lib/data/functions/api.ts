const requestPost = async (url: string, data: any) => {
    const response = await fetch(`http://localhost:3000${url}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    return await response.json();
}

const requestGet = async (url: string) => {
    const response = await fetch(`http://localhost:3000${url}`)
    return await response.json();
}

const requestDelete = async (url: string) => {
    const response = await fetch(`http://localhost:3000${url}`, {
        method: 'DELETE',
    })
    return await response.json();
}

export { requestPost, requestGet, requestDelete };