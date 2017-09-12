<template>
  <ul v-if="posts && posts.length">
    <li v-for="post of posts">
      <p><strong>{{post.ca}}</strong></p>
      <p>{{post.device}}</p>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    posts: [],
    errors: []
  }),

  // Fetches posts when the component is created.
  created () {
    axios.get(`http://127.0.0.1:3000/test`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
      console.log(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>