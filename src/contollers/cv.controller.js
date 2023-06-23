import Resume from "../models/cv.model.js"

async function addInfoCV(req, res){
    try{
        const name = req.body.name;
        const surname = req.body.surname;
        const email = req.body.email;
        const address = req.body.address;
        const languages = req.body.languages;
        const phone = req.body.phone;
        const education = req.body.education;
        const proficiencies = req.body.proficiencies;
        const linkedin = req.body.linkedin;
        const jobExperience = req.body.jobExperience;
        const userPhoto = req.body.photo;
        await Resume.create({
            userId: req.params.userId,
            name: name,
            surname: surname,
            email: email,
            address: address,
            languages: languages,
            phone: phone,
            education: education,
            proficiencies: proficiencies,
            linkedin: linkedin,
            jobExperience: jobExperience,
            photo: userPhoto
        })
        return res.status(201).send({ success: true })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ success: false, error: error.message });
    }
}

async function listCV(req, res) {
    try {
        const list = await Resume.find({userId: req.params.userId});
        return res.status(200).send({resumesUser: list})
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error })
    }
}

async function deleteCV(req, res) {
    try {
        const cvId = req.params.cvId;
        const isExist = Resume.findById(cvId);
        if (isExist) {
            await Resume.deleteOne({ _id: cvId })
            return res.status(204).send()
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error })
    }
}

export { addInfoCV, listCV, deleteCV }