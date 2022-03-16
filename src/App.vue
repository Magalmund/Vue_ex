<template>
	<div class="app">
		<h1>Страница с постами</h1>
		<button-one @click="fetchPosts">Получить посты</button-one>
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
import ButtonOne from "@/components/UI/ButtonOne";
import axios from 'axios';
export default {
	components: {
		PostList, PostForm, ButtonOne
	},
	data(){
		return {
			posts: [],
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
			try {
				//const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
				const response = await axios.get('http://localhost:3000/posts');
				this.posts = response.data;
			} catch(e) {
				alert('Ошибка')
			}
		}


	},
	/*mounted() {
		fetch('http://localhost:3000/posts')
		.then(res => res.json())
		.then(data => this.posts = data)
		.catch(err => console.log(err.message))
	}*/
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