$(document).ready(loadStatistics)

async function loadStatistics() {
    const statistics = await fetchAPI(API_PATHS.statistics);
    $("#temp-stats").html(removeHtmlTags(JSON.stringify(statistics, null, 2)));
}
