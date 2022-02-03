const BASEURL = process.env.API;


const fetchData = async (id) => {
    const apiUrl = `${BASEURL}pokemon/${id}`
    try {
        const res = await fetch(apiUrl)
        const response = await res.json()

        return response
    } catch (error) {
        console.log(error)
    };
};

export {fetchData};