console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	// code in here

	// adds Parse - Backend as a Service
	Parse.initialize("B846m7bZxMnYZUMr4sxUemEKat5DhU5xpxsUf07u","MJLITfjl3G4vPIdEsXRz6K0DfNZuYWxmbJM3pHZd");

	// array / model to hold data and also contains seed data
	var postArray = [
		{item: "Wanna go see the Blue Angels this Sunday? Talk to Mary!"},
		{item: "Who is cleaning the apartment this week? John!"}
	];

	// form for new post
	var $newPost = $('#new-post');

	// element for holding list of posts
	var $postList = $('#post-list');

	// append array's seed data to $postList
	for (var i = 0; i < postArray.length; i++) {
		$postList.append('<li class="post">' + postArray[i].item + '</li>');
	}

	// submit form for new post
	$newPost.on('submit', function(event) {
		event.preventDefault();

		// create new post object based on data input in the form
		var postItem = $('#post-item').val();
		var postObject = {item: postItem};
		console.log(postItem);
		console.log(postObject);

		// add new post object data into the array / model
		postArray.push(postObject);
		console.log(postArray);

		// add new post object data into the page
		$postList.append('<li class="post">' + postObject.item + '</li>');

		// reset the form
		$newPost[0].reset();
		$('#post-item').focus();
	});
	// add class to post on click event to mark as done 
	$postList.on('click', '.post', function() {
		$(this).addClass('done');
	});
	// add tooltip bootstrap component
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
});
});