const Idea = require("../model/ideaModel.js");

async function getIdeas() {
    try {
        const ideas = await Idea.getAll();
        return ideas;

    } catch (error) {
        console.log(error);
        return null;
    }
};

async function getIdea(id) {
    try {
        const idea = await Idea.getById(id);
        return idea;
    } catch (error) {
        console.log(error);
        return null;
    }
    
};
async function getGroup(group) {
    try {
        const group_ = await Idea.getGroup(group);
        return group_;
    } catch (error) {
        console.log(error);
        return null;
    }
    
};
async function getSeason(season) {
    try {
        const seasons = await Idea.getSeason(season);
        return seasons;
    } catch (error) {
        console.log(error);
        return null;
    }

    
};
async function getRandom() {
    try {
        const ideas = await getIdeas();
        if (ideas) {
            return ideas[ Math.floor(Math.random() * ideas.length)];
        } else {
            return null;
        }

    } catch (error) {
        console.log(error);
        return null;
    }
    
};

module.exports = {
    getIdea,
    getIdeas,
    getRandom,
    getGroup,
    getSeason
};
