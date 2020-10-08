const express = require("express");
const {Question, Answer} = require("../../db/models");
const {Op} = require("sequelize")
const {asyncHandler} = require("../../utils/utils");
const router = express.Router();

router.post("/:sortType", asyncHandler( async(req, res, next) =>{
    console.log("Got here")
    console.log(req.body)
    const {searchTerm} = req.body;
    const questions = await Question.findAll({
        limit: 10,
        where: {
            title: {
                [Op.like]: `%${searchTerm}%`
            }
        }
    });
    res.json(questions)

}));


module.exports = router;
