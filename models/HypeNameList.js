const mysql = require("mysql");
const schema = mysql.schema;
const HypeNameListschema = new schema({
    HypeNameID : {
        type : Number,
        required : "HypeNameID is Required"
    },
    
    HypeFirstName : {
        type : String,
        required : "HypeFirstName is Required"
    },
    
    HypeLastName : {
        type : String,
        required : "HypeLastName is Required"
    }
});

const hypeNameList = mysql.model("HypeNameList", HypeNameListschema)
