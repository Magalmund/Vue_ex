<template>
	<div id="delfi">
		<h1>Delfi</h1>
		<post-list-last
			:posts="posts"
			v-if="!isPostsLoading"
		/>
		<post-list
			:posts="posts"
			v-if="!isPostsLoading"
		/>
		<post-list-third
			:posts="posts"
			v-if="!isPostsLoading"
		/>
		<preloader-one v-else></preloader-one>
	</div>
</template>
<script>
import PostList from "@/components/SecondBlock/PostList";
import PostListLast from "@/components/FirstBlock/PostListLast";
import PostListThird from "@/components/ThirdBlock/PostListThird";
import axios from 'axios';
export default {
	components: {
		PostList, PostListLast, PostListThird
	},
	data(){
		return {
			posts: [],
			isPostsLoading: false,
		}
	},
	methods: {
		async fetchPosts() {
			
			try {
				this.isPostsLoading = true;
					const response = await axios.get('http://localhost:3000/posts');
					this.posts = response.data.reverse();
			} catch(e) {
				alert('Error')
			} finally {
				this.isPostsLoading = false;
			}
		},
	},
	mounted() {
		this.fetchPosts();
	},
}
</script>
<style>
	#delfi h1, #delfi .btn, #delfi .post_date {
		color:#3858F5;
	}

	#delfi .post_list_last .btn {
		background: #3858F5;
	}
	#delfi .title:after {
		background: #3858F5;
	}
	#delfi .activeTab {
		border-top: 2px solid #3858F5;
}
</style>