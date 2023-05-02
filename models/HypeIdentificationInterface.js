const mysql = require("mysql");
const schema = mysql.schema;
const HypeIdentificationInterfaceschema = new schema({
    HypeIdentificationID : {
        type : Int,
        required : "HypeIdentificationID is Required"
    },
    
    HypeUsername : {
        type : String,
        required: "HypeUsername is Required"

    },
    
    HypeDisplayName : {
       type : String,
       required: "HypeDisplayName is Required"
    },
    
    HypeEmail : {
        type: String,
        match:[/.+@.+\..+/, "Please enter a valid HypeE-mail address"],
        required: "HypeEmail is required",
        unique : true
    }
})
const hypeIdentificationInterface = mysql.model("HypeIdentificationInterface", HypeIdentificationInterfaceschema)