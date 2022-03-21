<template>
	<div class="post_list_third" v-if="posts.length > 0">
		<post-item-third
			v-for="post in posts.slice(3)"
			:post="post"
			:key="post.id"
			@remove="$emit('remove', post)"
		/>
		<tabs-logic/>
	</div>
	<h2 v-else style="color: red">
		Список постов пуст
	</h2>
</template>

<script>
import PostItemThird from './PostItemThird.vue'
import TabsLogic from '@/components/Tabs/TabsLogic.vue';
export default {
  components: { PostItemThird, TabsLogic },
	props: {
		posts: {
			type: Array,
			required: true,
		}
	}
}
</script>

<style scoped>
	.post_list_third {
		display:flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 30px 0
	}
</style>