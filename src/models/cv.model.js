import mongoose from "mongoose";

const cvSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    surname: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
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
            type: Date,
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
        place: {
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
            type: Date,
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

const cvModel = mongoose.model("CurriculumVitae", cvSchema);

export default cvModel;