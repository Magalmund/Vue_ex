<template>
	<div class="tab_box">
		<div class="tab_body">
			<div class="post_date">{{post.date}}</div>
			<h3>{{post.title}}</h3>
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

	.tab_box {
		padding: 15px;
		margin: 15px 0 0 0;
		display: flex;
		justify-content: space-between;
	}

	.tab_body {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	h3{
		font-weight: 700;
		font-size: 14px;
		line-height: 20px;
		color: #050F19;
		width: 80%;
		margin: 0;
	}

	.post_date {
		font-weight: 500;
		font-size: 12px;
		line-height: 11px;
		width:10%;
		margin: auto 10px auto 0
	}

@media (min-width:768px) {

}

</style>