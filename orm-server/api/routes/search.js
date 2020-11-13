const { Router } = require('express');
const router = Router();
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

const updateElasticData = async (index, dataArray) => {
  await client.indices.create({
    index: index,
  });
  const body = dataArray.flatMap((doc) => [{ index: { _index: index } }, doc]);
  const { body: bulkResponse } = await client.bulk({ refresh: true, body });
  if (bulkResponse.errors) {
    console.log("ERROR");
    return bulkResponse.errors;
  } else {
    const { body: count } = await client.count({ index: index });
    console.log(count);
    return bulkResponse;
  }
};
router.get('/songs', async (reqest, response) => {
    try {
        const q = reqest.body.filter;
        const { body } = await client.search({
            body:{
                query: {
                    regexp: {
                        title: {
                            value: `.*${q}.*`,
                            flags: "ALL",
                            case_insensitive: true,
                            max_determinized_states: 10000,
                            rewrite: "constant_score"
                        }
                    },
                }    
            },                         
        })
        console.log(body);
          response.json(body.hits.hits);
    } catch (error) {
        response.status(405).send(error);
    }
})
router.get('/artists', async (reqest, response) => {
    try {
        const { body } = await client.search({
            index: 'artists'
          })
        console.log(body);
          response.json(body.hits.hits);
    } catch (error) {
        response.status(405).send(error);
    }
})
router.get('/albums', async (reqest, response) => {
    try {
        const { body } = await client.search({
            index: 'albums'
          })
        console.log(body);
          response.json(body.hits.hits);
    } catch (error) {
        response.status(405).send(error);
    }
})
router.get('/playlists', async (reqest, response) => {
    try {
        const { body } = await client.search({
            index: 'playlists'
          })
        console.log(body);
          response.json(body.hits.hits);
    } catch (error) {
        response.status(405).send(error);
    }
})
router.get('/:query', async (reqest, response) => {
    try {
        const { body } = await client.search({
            index: 'playlists'
          })
        console.log(body);
          response.json(body.hits.hits);
    } catch (error) {
        response.status(405).send(error);
    }
})

module.exports = router;
