<template>
	<div class="post_box">
		<div class="post">
			<div class="post_author">{{post.author}}</div>
			<button-one>Delfi sport</button-one>
			<button-one>Korvpall</button-one>
			<button-one>NBA</button-one>
			<h5 class="title">{{post.title}}</h5>
			<div class="post_date">Täiendatud: {{post.date}}</div>
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
		padding: 15px;
		margin: 15px 0 0 0;
		display: flex;
		justify-content: space-between;
		background: url("../../../img/1.jpg");
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
}

	.post {
		height: max-content;
		}

	 .btn {
		color: #fff!important;
		border-radius: 20px;
		margin: 0 10px 10px 0
	}
	
	h5 {
		font-weight: 700;
		font-size: 18px;
		line-height: 24px;
		color:#fff;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
		margin: 0 0 30px 0
	}

	.title:after {
		content: "";
		width:20%;
		height:2px;
		display:block;
		position:relative;
		bottom:-14px;
	}

	.post_author{
		font-weight: 500;
		font-size: 9px;
		line-height: 11px;
		text-transform: uppercase;
		color: #FFFFFF;
		mix-blend-mode: normal;
		opacity: 0.7;
		margin: 0 0 10px 0
	}

	.post_date {
		font-weight: 500;
		font-size: 12px;
		line-height: 11px;
		margin: 0 0 10px 0
	}

	.post_img {
		width:100%;
		height:215px;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	 }

	 .post_box:first-child .post_img {
		background-image: url("../../../img/1.jpg");
	 }

@media (min-width:768px) {
	.post_box {
	flex:0 0 100%;
	max-width:100%;
	height: 450px;
	align-items: end;
}
}
</style>