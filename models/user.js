const mysql = require("mysql");
const schema = mysql.schema;
const Userschema = new schema({
    FirstName:{
        type: String,
        trim: true,
        required: "Password is Required"
    },
    LastName:{
        type: String,
        trim: true,
        required: "Password is Required"

    },
    Username:{
       type: String,
       trim: true,
       required: "Password is Required"
    },
    email:{
        type: String,
        required: "Email is required",
        match:[/.+@.+\..+/, "Please enter a valid e-mail address"],
        trim: true,
        unique: true
    },
    password:	{
        type: String,
        trim: true,
        required: "Password is Required"
    },
    encryptedPassword: {
         type: String,
         trim: true,
         required: "password is required"
    },
})
const user = mysql.model("user", Userschema)