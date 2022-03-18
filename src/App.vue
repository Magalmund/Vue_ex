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
			v-if="!isPostsLoading"
		/>
<div v-else class="lds-roller">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
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
			isPostsLoading: false,
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
				this.isPostsLoading = true;
					const response = await axios.get('http://localhost:3000/posts');
					this.posts = response.data;
			} catch(e) {
				alert('Error')
			} finally {
				this.isPostsLoading = false;
			}
		}
	},
	mounted() {
		this.fetchPosts();
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

/*PRELOADER*/
	.lds-roller {
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: teal;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*PRELOADER-END*/
</style>