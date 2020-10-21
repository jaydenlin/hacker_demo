const axios = require('axios');

module.exports = {

    setRoutes: (server, apiHost)=>{
        
        server.getAsync(`/api/posts`, async (req, res) => {
            const response = await axios.get(`${apiHost}/posts`);
            return res.send(response.data);
        });

        server.getAsync(`/api/posts/:postId`, async (req, res) => {
            const response = await axios.get(`${apiHost}/posts/${req.params.postId}`);
            return res.send(response.data);
        });

        server.getAsync(`/api/posts/:postId/comments`, async (req, res) => {
            const response = await axios.get(`${apiHost}/posts/${req.params.postId}/comments`);
            return res.send(response.data);
        });
    }
}