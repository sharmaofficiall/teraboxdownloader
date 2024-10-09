const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://tera.instavideosave.com/?url=${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
