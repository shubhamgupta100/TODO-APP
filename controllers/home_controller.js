const TODO = require('../models/todo');


//access details from the database, using ejs template engine, render details in the browser 
module.exports.accessTask = function (req, res) {

    TODO.find({}, function (err, todos) {

        if (err) {
            console.log("Error in fetching task from db");
            return;
        }
        return res.render('home', {
            title: 'My TODO App',
            todo_app: todos
        });
    });


};


//create task and store details in database
module.exports.createTask = function (req, res) {

    TODO.create({
        description: req.body.description,
        catagory: req.body.catagory,
        dueDate: req.body.dueDate
    }, function (err, newTODO) {

        if (err) {
            console.log("Error in creating a task");
            return;
        } else {
            console.log("*************", newTODO);
            return res.redirect('back');
        }
    });

};


//deleting details from the database 
module.exports.deleteTask = function (req, res) {

    var checked = req.body.checked;
    console.log(checked);
    var type = typeof (checked);
    if (type == "string") {
        TODO.findByIdAndDelete(checked, function (err) {
            if (err) {
                console.log("error in deleting");
                return;
            }
        });
    }
    else {
        for (var i = 0; i < checked.length; i++) {
            TODO.findByIdAndDelete(checked[i], function (err) {
                if (err) {
                    console.log("error in deleting*******************");
                    return;
                }
            });
        }
    }
    return res.redirect('/');
}