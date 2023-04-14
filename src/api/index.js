const fetchData = async (handler, url, id = "") => {
    const response = await fetch(`${url}/${id}`);
    const json = await response.json();
    console.log(json)
    handler(json);
}

export { fetchData }  