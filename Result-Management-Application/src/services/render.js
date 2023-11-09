const controller = require("../controller/controller");

const users = require("../models/Users");

const axios = require("axios");

// function for home page
exports.homeRoute = (req, res)=>{
    res.render("index",{page:"Home Page", url: req.url});
};

// function for find result page
exports.studentRoute = (req, res)=>{
    res.render("student/student",{page:"Find Result Page", url: req.url, messages:req.flash()});
};

// function for student result page
exports.studentResult = async (req, res)=>{
    
    const {rollno, dob} = req.body;
    try{
        const result = await users.findAll({
            where:{
                rollno : Number(rollno),
                dob : dob
            }
        });

        if(result.length == 0){
            req.flash("danger","Please enter correct credentials");
            return res.redirect("/student");
        }
        else{
            req.flash("success","Result found successfully")
            res.render("student/student_result",{data:result[0],page:"Result Page", url: req.url, messages:req.flash()});
        }
        
    }
    catch(err){
        req.flash("danger",err.message || "Invalid Credentails");
        return res.redirect("/student");
    }
};

// function for teacher login page
exports.teacherLogin = (req, res) => {
    res.render("teacher/teacher_login",{page:"Teacher Login", url: req.url, messages: req.flash()});
};

// function for validating teacher
exports.validateUser = (req, res) =>{
    const password = "Teacher@1234";
    if(req.body.password === password){
        req.flash("success","Login Successful")
        res.redirect("/teacher");
    }
    else{
        req.flash("danger","Invalid Credentials");
        res.redirect("/teacher/login");
    }
}

// function for teacher home page
exports.teacherResult = async (req, res)=>{
    try{
        const result = await axios.get(`http://127.0.0.1:${process.env.port}/api/student`);
        res.render("teacher/teacher", {data:result.data, page:"View all Page", url: req.url, messages : req.flash()});
    }
    catch(err){
        req.flash("danger", err.message || "Some error occured while getting data");
        res.redirect("/teacher");
    }
    
};

// function for displaying the student update page
exports.updateRecordGet = async (req, res)=>{
    try{
        const result = await axios.get(`http://127.0.0.1:${process.env.port}/api/student`,{params:{rollno:req.query.rollno}})
        res.render("teacher/update",{data: result.data[0], page:"Update Page", url: req.url, messages:req.flash()});
    }
    catch(err){
        req.flash("danger", err.message || "Some error occured while getting data");
        res.redirect("/teacher");
    }
    };
   

// function for updating the student record
exports.updateRecordPost = async (req, res)=>{
    controller.update(req, res);
};

// function for deleting the student record
exports.deleteRecord = async (req, res)=>{
    controller.delete(req, res);
};

// function for displaying the add record form
exports.addRecordGet = async (req, res)=>{
    res.render("teacher/add_record", {page:"Add Student Page", url: req.url, messages:req.flash()});
};

