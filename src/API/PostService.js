import axios from "axios";

export const postsAPI = {
  getPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
  }
}
