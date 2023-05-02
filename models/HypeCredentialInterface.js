const mysql = require("mysql");
const schema = mysql.schema;
const HypeCredentialsInterfaceschema = new schema({
    HypeCredentialID : {
        type : Number,
        required : "HypeCredentialID is Required"
    },
    
    HypeAccessKey : {
        type : String,
        required : "HypeAccessKey is Required"
    }
});

const hypeCredentialsInterface = mysql.model("HypeCredentialsInterface", HypeIdentificationInterfaceschema)
