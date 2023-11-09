const express = require("express");
const Router = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

/**
 * @description Root Route
 * @method GET/
 */
Router.get("", services.homeRoute);

/**
 * @description student home page
 * @method GET/student
 */
Router.get("/student",services.studentRoute);

/**
 * @description student result page
 * @method GET/student/result
 */
Router.post("/student/result", services.studentResult);

/**
 * @description teacher login page
 * @method GET/teacher/login
 */
Router.get("/teacher/login", services.teacherLogin);

/**
 * @description for validating the user
 * @method POST/teacher
 */
Router.post("/teacher", services.validateUser);

/**
 * @description teacher home page
 * @method GET/teacher
 */
Router.get("/teacher", services.teacherResult)

/**
 * @description update user page
 * @method GET/teacher/update
 */
Router.get("/teacher/update", services.updateRecordGet);


/**
 * @description for updating student details in database
 * @method POST/teacher/update/:rollno
 */
Router.post("/teacher/update/:rollno", services.updateRecordPost);

/**
 * @description For deleting student record
 * @method GET/teacher/update/:rollno
 */
Router.get("/teacher/delete/:rollno", services.deleteRecord);

/**
 * @description Display Add new student page
 * @method GET/teacher/create
 */
Router.get("/teacher/create", services.addRecordGet);



// API's
Router.post("/api/student", controller.create);
Router.get("/api/student", controller.find);
Router.put("/api/student/:rollno", controller.update);
Router.delete("/api/student/:rollno", controller.delete);

module.exports = Router;