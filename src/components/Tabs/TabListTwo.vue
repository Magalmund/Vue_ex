<template>
	<div class="post_list" v-if="posts.length > 0">
		<tab-list-two-item
			v-for="post in posts"
			:post="post"
			:key="post.id"
		/>
	</div>
	<h2 v-else style="color: red">
		List empty
	</h2>
</template>

<script>
import TabListTwoItem from './TabListTwoItem.vue'
export default {
  components: { TabListTwoItem },
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
	}
</style>