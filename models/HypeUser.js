const mysql = require("mysql2");
const schema = mysql.schema;
const Userschema = new schema({

  HypeID:{
      type: Integer,
      required: " ID is required",
    },
    
    HypeProfilecontentID:{
        type: Integer
    },
    HypeCredentialID:{
        type: Integer
    },
    HypeIdentificationID:{
        type: Integer
    },
    HypeNameID:{
        type: Integer
    }


//   HypeCredentialID INT,
  
//   HypeIdentificationID INT,

//   HypeNameID INT,


    // HypeFirstName:{
    //     type: String,
    //     trim: true,
    //     required: "Password is Required"
    // },
    // HypeLastName:{
    //     type: String,
    //     trim: true,
    //     required: "Password is Required"

    // },
    // HypeUsername:{
    //    type: String,
    //    trim: true,
    //    required: "Password is Required"
    // },
    // Hypeemail:{
    //     type: String,
    //     required: "Email is required",
    //     match:[/.+@.+\..+/, "Please enter a valid e-mail address"],
    //     trim: true,
    //     unique: true
    // },
    // accessKey:	{
    //     type: String,
    //     trim: true,
    //     required: "Password is Required"
    // },
    
})
const HypeUser = mysql.model("user", Userschema)