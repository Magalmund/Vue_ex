<template>
	<div class="post_box">
		<div class="post">
			<div class="post_img"></div>
			<button-one>Delfi sport</button-one>
			<button-one>Korvpall</button-one>
			<button-one>NBA</button-one>
			<h5>{{post.title}}</h5>
			<div class="post_date">Täiendatud: {{post.date}}</div>
			<p>{{post.body}}</p>
			<div class="post_author">{{post.author}}</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		}
	}
}
</script>
<style scoped>

	.post_box {
	margin: 15px 0 0 0;
	display: flex;
	justify-content: space-between;
}

	.post_box:nth-child(2n) {
		padding: 15px 0 15px 15px;
	}
	.post_box:nth-child(2n-1){
		padding: 15px 15px 15px 0;
	}

	h5{
		font-weight: 700;
		font-size: 19px;
		line-height: 26px;
		color: #050F19;
		margin: 0 0 10px 0;
	}

	.post_date {
		font-weight: 500;
		font-size: 12px;
		line-height: 11px;
		margin: 0 0 10px 0
	}

	.post_author {
		font-weight: 500;
		font-size: 10px;
		line-height: 11px;
		text-transform: uppercase;
		color: #050F19;
	}

	p {
		font-weight: 500;
		font-size: 13px;
		line-height: 21px;
		color: #708597;
		margin: 0 0 12px 0;
	}

	.post_img {
		width:100%;
		height:215px;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	 }

	 .post_box:first-child .post_img {
		background-image: url("../../../img/4.jpg");
	 }
	 .post_box:nth-child(2) .post_img {
		background-image: url("../../../img/5.jpg");
	 }

@media (min-width:768px) {
	.post_box {
	flex:0 0 30%;
	max-width:30%;
}
}
</style>