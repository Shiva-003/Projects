const users = require("../models/Users");

// Create and save new student
exports.create = async (req, res) =>{
    //Validations
    if(!req.body){
        req.flash("danger","Content cannot be empty");
        return res.redirect("/teacher/create");
    }
    if(req.body.name.trim() === ""){
        req.flash("danger","Please enter a Valid Name");
        return res.redirect("/teacher/create");
    }
    
    if(Number(req.body.rollno) < 0){
        req.flash("danger","Please enter a valid Roll No.");
        return res.redirect("/teacher/create");
    }
    
    try{
        const result = await users.findAll({
            where:{
                rollno:Number(req.body.rollno)
            }
        });

        if(result.length>0){
            req.flash("danger","The rollno entered is already occupied");
            return res.redirect("/teacher/create");
        }
    }
    catch(err){
        req.flash("danger", err.message || "Some error occured while searching for data");
        return res.redirect("/teacher/create");
    }

    try{
        await users.create({
            rollno: Number(req.body.rollno),
            name: req.body.name,
            dob: req.body.dob,
            score: Number(req.body.score),
        });
        req.flash("success","Student Record Added Successfully");
        res.redirect("/teacher");

    }
    catch(err){
        req.flash("danger", err.message || "Some error occured while creating a new user");
        return res.redirect("/teacher/create");
    }
};   



// Retrieve and return all students or a single student
exports.find = async (req, res) =>{
    if(req.query.rollno){
        try{
            const result = await users.findAll({
                where:{
                    rollno:Number(req.query.rollno)
                }
            });
            res.send(result);
        }
        catch(err){
            return res.status(500).send({
                message: err.message || "Some error occured while searching for data"
            });
        }
    }
    else{
        try{
            const result = await users.findAll();
            res.send(result);
        }
        catch(err){
        return res.send(500).send({
            message :err.message || "Error occured while retrieving the data"
        });
    }
    }
};



//Update a student by rollno
exports.update = async (req, res)=>{
    //Validations
    if(!req.body){
        req.flash("danger","Content cannot be empty");
        return res.redirect(`/teacher/update?rollno=${req.params.rollno}`);
    }
    if(req.body.name.trim() === ""){
        req.flash("danger","Please enter a Valid Name");
        return res.redirect(`/teacher/update?rollno=${req.params.rollno}`);
    }
    if(Number(req.body.rollno) < 0){
        req.flash("danger","Please enter a valid Roll No.");
        return res.redirect(`/teacher/update?rollno=${req.params.rollno}`);
    }

    // Checking if the passed Rollno is already present in the database
    if(req.params.rollno != req.body.rollno){
        try{
            const result = await users.findAll({
                where:{
                    rollno:Number(req.body.rollno)
                }
            });
            if(result.length>0){
                req.flash("danger","The rollno entered is already occupied");
                return res.redirect(`/teacher/update?rollno=${req.params.rollno}`);
            }
        }
        catch(err){
            req.flash("danger", err.message || "Some error occured while searching for data");
            return res.redirect(`/teacher/update?rollno=${req.params.rollno}`);
        }

    }

    try{
        await users.update({rollno:Number(req.body.rollno), name:`${req.body.name}`, dob: `${req.body.dob}`, score: req.body.score},
        {
            where:{
                rollno : Number(req.params.rollno),
            }
        });
        req.flash("success","Student data updated successfully");
        res.redirect("/teacher");
    }
    catch(err){
        req.flash("danger", err.message || "Some error occured while updating the data");
        return res.redirect(`/teacher/update?rollno=${req.params.rollno}`);   
    }
    
};



//Delete a student record with a specified rollno
exports.delete = async (req,res) =>{
    const {rollno} = req.params;
    try{
        const check = await users.findAll({
            where:{
                rollno : rollno,
            }
        });

        if(check.length == 0){
            req.flash("danger","The rollno entered is not present");
            return res.redirect("/teacher");
        }
    }
    catch(err){
        req.flash("danger", err.message || "Error occured while retrieving the data");
        return res.redirect("/teacher");
    }
    
    try{
        await users.destroy({
            where: {
              rollno: rollno
            }
          });
        req.flash("success","Data Deleted Successfully");
        res.redirect("/teacher");      
    }
    catch(err){
        req.flash("danger", err.message || "Some error occured while deleting the data");
        return res.redirect("/teacher");;
    }
};