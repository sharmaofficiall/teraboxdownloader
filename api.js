const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://apis.forn.fun/tera/data.php?id=${id}`
            // https://tera.instavideosave.com/?url=
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
