<template>
	<div id="maaleht">
		<h1>Maaleht</h1>
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
		<thourth-block/>
	</div>
</template>
<script>
import PostList from "@/components/SecondBlock/PostList";
import PostListLast from "@/components/FirstBlock/PostListLast";
import PostListThird from "@/components/ThirdBlock/PostListThird";
import ThourthBlock from "@/components/ThourthBlock";
import axios from 'axios';
export default {
	components: {
		PostList, PostListLast, PostListThird, ThourthBlock
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
		}
	},
	mounted() {
		this.fetchPosts();
	}
}
</script>

<style>
	#maaleht h1, #maaleht .btn, #maaleht .post_date {
		color:#00802e;
	}

	#maaleht .post_list_last .btn {
		background: #00802e;
	}

	#maaleht .title:after {
		background: #00802e;
	}
	#maaleht .activeTab {
		border-top: 2px solid #00802e;
}
</style>