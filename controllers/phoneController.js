const date = require('../getDate.js');
const mongoose = require('mongoose');
const { response } = require('express');

const Phone = mongoose.model('Phone');

exports.getMainPage = (req, res)=> {
    Task.find((error, tasks) => {
        if(!error){
            res.render('index.ejs', {toDoItems: tasks});
        }else {
            console.log('Failed to retrive data. ');
        }
    });

    
};

exports.addNewUser = (req, res) => {
    let item = req.body.newTask;
    let newTask = new Task();
    newTask.description = item;

    newTask.save((error, response) => {
        if(!error){
            res.redirect('/');
        }else {
            console.log('Failed to save data. ');
        }
    });
}

exports.deleteContact = (req, res) =>{
    const checkedItemId = req.body.checkbox;
    Task.findByIdAndRemove(checkedItemId, (error) =>{
        if(!error){
            res.redirect('/');
        }else{
            console.log('Failed to remove an item.');
        }
    });
    
}