const mysql = require("mysql2");
const schema = mysql.schema;
const Userschema = new schema({

  HypeID:{
      type: Number,
      required: "HypeID is required",
    },
    
    HypeProfilecontentID:{
        type: Number
    },
    HypeCredentialID:{
        type: Number
    },
    HypeIdentificationID:{
        type: Number
    },
    HypeNameID:{
        type: Number
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
const hypeUser = mysql.model("HypeUser", Userschema)
