$( document ).ready(function() {

const movies = JSON.parse(movie);

for (let i = 0; i < movie.length; i++){

	let movie = 
	`<div class="wrapper">
	<div class="image-container">
	<img src="${movies[i].image}">
	</div>
	<div class="description">
	<h1>${movies[i].name}</h1>
	<h3>Description</h3>
	<p class="p-describe">Directed by: ${movies[i].Directed_by}</p>
	<p class="p-describe">Release date: ${movies[i].Release_Date}</p>
	<p class="p-describe">"Running time: ${movies[i].Running_Time}</p>
	<div id="like">
			<a>Like</a>
			<img src="img/like.png" class="img-like">
			<p class="p-like">0</p>
		</div>
	</div>

	</div>`;

	$('#sub-main').append(movie);

const countBtn = parseInt($(".p-like").text());

	$(".img-like").click(function(){
		$(".p-like").text((++countBtn).toString());
	})
	

}

	

});