<template>
	<div class="post_list" v-if="posts.length > 0">
		<post-item
			v-for="post in posts.slice(1, 3)"
			:post="post"
			:key="post.id"
			@remove="$emit('remove', post)"
		/>
	</div>
	<h2 v-else style="color: red">
		Список постов пуст
	</h2>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
  components: { PostItem },
	props: {
		posts: {
			type: Array,
			required: true,
		}
	}
}
</script>

<style scoped>
	.post_list {
		display:flex;
		flex-wrap: wrap;
		margin: 30px 0
	}
</style>