import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique:true
	},
	email: {
		type: String,
		required: true,
        unique:true,
	},
	password: {
		type: String,
        required:true,
	},
	name:{
		type:String,
	},
	surname:{
		type:String,
	},
	adress:{
		type:String,
	},
	languages:[{type:String}],
	phone:{
		type:String,
	},
	education:{
		
	},
	profeciencies:{
		
	}

});

const userModel = mongoose.model("User", userSchema);

export default userModel;