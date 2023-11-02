const API_URL = "http://193.187.255.145:3000/"
const API_PATHS = {
    statistics: "statistics",
    feedback: "feedback",
}

async function fetchAPI(path) {
    const response = await fetch(API_URL + path);
    return await response.json();
}

function removeHtmlTags(text) {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
