<template>
	<div class="app">
		<h1>Страница с постами</h1>
		<button-one
		@click="showDialog"
		style="margin: 15px 0"
		>
		Создать пост
		</button-one>
		<dialog-one v-model:show="dialogVisible">
			<post-form
				@create="createPost"
			/>
		</dialog-one>
		<post-list
			:posts="posts"
			@remove="removePost"
		/>
	</div>
</template>
<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
export default {
	components: {
		PostList, PostForm
	},
	data(){
		return {
			posts: [
				{id: 1, title: 'JavaScript', body:'Описание поста'},
				{id: 2, title: 'JavaScript 2', body:'Описание поста 2'},
				{id: 3, title: 'JavaScript 3', body:'Описание поста 3'},
				{id: 4, title: 'JavaScript 4', body:'Описание поста 4'},
			],
			dialogVisible: false,
		}
	},
	methods: {
		createPost(post){
			this.posts.push(post);
			this.dialogVisible = false;
		},
		removePost(post){
			this.posts = this.posts.filter(p => p.id !== post.id)
		},
		showDialog() {
			this.dialogVisible = true;
		},
		async fetchPosts() {

		}
	}
}
</script>
<style>
* {
	margin:0;
	padding:0;
	box-sizing:border-box;
}
.app {
	margin:20px
}
</style>