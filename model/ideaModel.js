const ideas = require("../data/ideas.json");

function getAll() {
    return new Promise( (resolve, reject) => {
        resolve(ideas);
    });
}
function getById(id) {
    return new Promise( (resolve, reject) => {
        const idea = ideas.find(i => i.id === parseInt(id));

        if (idea) {
            resolve(idea);
        } else {
            reject("Idea with id:" + id + " not found");
        }
    });
}

module.exports = {
    getAll,
    getById
}
