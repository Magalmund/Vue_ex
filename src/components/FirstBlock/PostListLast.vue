<template>
	<div class="post_list_last" v-if="posts.length > 0">
		<post-item-last
			v-for="post in posts.slice(0, 1)"
			:post="post"
			:key="post.id"
		/>
	</div>
	<h2 v-else style="color: red">
		Список постов пуст
	</h2>
</template>

<script>
import PostItemLast from './PostItemLast.vue'
export default {
  components: { PostItemLast },
	props: {
		posts: {
			type: Array,
			required: true,
		}
	}
}
</script>

<style scoped>
	.post_list_last {
		display:flex;
		flex-wrap: wrap;
		margin: 30px 0
	}
	.post_list_last .btn {
		background: #00802e;
		color: #fff;
		border-radius: 20px;
	}
</style>