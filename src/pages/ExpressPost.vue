<template>
	<div id="express">
		<h1>Express</h1>
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
	#express h1, #express .btn, #express .post_date {
		color:#ce0410;
	}

	#express .post_list_last .btn {
		background: #ce0410;
	}

	#express .title:after {
		background: #ce0410;
	}
	#express .activeTab {
		border-top: 2px solid #ce0410;
}
</style>