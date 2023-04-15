const fetchData = async (handler, errorHandler, url, id = "") => {
    try {
        const response = await fetch(`${url}/${id}`);
        const json = await response.json();
        handler(json);
        return json
    } catch(err) {
        console.error('There was an error with API call: ', err)
        errorHandler(err)
    }
}

export { fetchData }  