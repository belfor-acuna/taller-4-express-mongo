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
	languages: {
        type: [String],
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    education: [{
        date: {
            type: String,
            required: true
        },
        place: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    proficiencies: [{
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    linkedin: {
        type: String,
        required: false,
    },
    jobExperience: [{
        date: {
            type: String,
            required: true
        },
        place: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    photo: {
        type: String,
        required: false
    }
});

const userModel = mongoose.model("User", userSchema);

export default userModel;