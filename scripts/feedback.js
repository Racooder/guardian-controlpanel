$(document).ready(loadFeedback);

async function loadFeedback() {
    const feedback = await fetchAPI(API_PATHS.feedback);
    $('#feedback').html(feedback.map(feedback => `<li><span class="feedback-title">${removeHtmlTags(feedback.description)}</span><span class="feedback-author">${feedback.creatorName}</span><span class="feedback-type">${feedback.type}</span></li>`).join(""));
}
