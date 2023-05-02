const mysql = require("mysql");
const schema = mysql.schema;
const HypeProfileContentsschema = new schema({
    HypeProfileContentID : {
        type : Int,
        required : "HypeProfileContentID is Required"
    },
    
    HypeProfilePic : {
        type : String,
        required : "HypeAccessKey is Required"
    }
});

const hypeProfileContents = mysql.model("HypeProfileContents", HypeProfileContentsschema)