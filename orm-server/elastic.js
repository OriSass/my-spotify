const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  cloud: {
    id:
      "i-o-optimized-deployment:d2VzdGV1cm9wZS5henVyZS5lbGFzdGljLWNsb3VkLmNvbTo5MjQzJGNkMjc0MGQ0YjA4YzQ3NTJhZDRkOWQxZjZlODM4YmVmJDRmZjIyYmZiOTIwYjQzMjNiMjliNjY5Y2Q0OTJkMWU4",
  },
  auth: {
    username: "elastic",
    password: "NoTAvE4Dj8jb4paG3UwE2rIL",
  },
});

const func = async() => {
    try {
        const x = await client.search({
            index: 'songs'
        })
    
          console.log(x.body.hits.hits);
    } catch (error) {
        console.log(error);
    }
    
}
func();