const http = require("http");
const {getIdeas, getIdea, getRandom} = require("./controllers/ideaController");
const {serveStaticFile} = require("./util/staticServer")

const PORT = 8080;
const API_CONTENT_TYPE = {"Content-Type" : "application/json"};

const server = http.createServer(
    async function (req, res) {
        console.log("Request");

        if (req.url === "/api/ideas" && req.method === "GET") {
            let ideas = await getIdeas();

            if (ideas) {
                res.writeHead(200, API_CONTENT_TYPE);
            } else {
                res.writeHead(404, API_CONTENT_TYPE);
                ideas = {message: "Ideas not found"};
            }
            res.end( JSON.stringify(ideas));
        } else 
        if (req.url === "/api/ideas/random" && req.method === "GET") {
            let idea = await getRandom();

            if (idea) {
                res.writeHead(200, API_CONTENT_TYPE);
            } else {
                res.writeHead(404, API_CONTENT_TYPE);
                idea = {message: "Idea not found"}
            }
            res.end(JSON.stringify(idea));
        } else {
            serveStaticFile(req, res);
        }
    }
);


server.listen(8080);

