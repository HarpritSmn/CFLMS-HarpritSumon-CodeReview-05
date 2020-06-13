$(document).ready(function() {

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
	<p class="p-describe">Running time: ${movies[i].Running_Time}</p>
	<div id="like">
			<a>Like</a>
			<img src="img/like.png" class="img-like">
			<p class="p-like">0</p>
		</div>
	</div>
	</div>`;

	$('#sub-main').append(movie);
}

var clicker = parseInt($(".p-like").val());

	$(".img-like").click(function(){
		var output = clicker ++;
		$(".p-like").text(output);
	});




});

// $(`.p-like`).on("click",fuction(){
// 	var apfel = $(this).text;
// 	console.log(apfel);
// });

// var countBtn = document.querySelector('.img-like');
// 	var countNum = document.querySelector('.p-like');

// 	countBtn.addEventListener('click',countUp);

// 	function countUp(){
// 	countNum.innerHTML++;
// 	}



// +++++++++++++++++++++++++++++++++++++++++++++++  Method 1: Did NOT work  +++++++++++++++++++++++++++++++++++++++++++++++

// const countBtn = document.querySelector('.img-like img');
// let countNum = document.querySelector('.p-like p');

// countBtn.addEventListener('click',countUp);

// function countUp(){
// 	countNum.innerHTML++;
// }



// +++++++++++++++++++++++++++++++++++++++++++++++  Method 2: Also did NOT work  +++++++++++++++++++++++++++++++++++++++++++++++

// const countBtn = parseInt($(".p-like").text());

// function addLikes(){
// 	$(".img-like").click(function(){
// 	$(".p-like").text((++countBtn).toString());
// })
// }