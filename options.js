function updatePodcastList() {
	var podcastListElement = $('#podcastList');

	var bgPage = chrome.extension.getBackgroundPage();

	var listHTML = '';

	bgPage.podcastManager.podcastList.forEach(function(podcast) {
		listHTML += renderPodcast(podcast);
	});

	podcastListElement.html(listHTML);
}

$( document ).ready( function() {
	var bgPage = chrome.extension.getBackgroundPage();

	$('#addRSS').click( function() {
		var entryBox = $('#entryBox');
		bgPage.podcastManager.addPodcast(entryBox.val(), updatePodcastList);
		entryBox.val('');
	});

	$('#removeAllRSS').click( function() {
		bgPage.podcastManager.deleteAllPodcasts();
		updatePodcastList();
	});

	updatePodcastList();
});