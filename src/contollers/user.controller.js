import User from "../models/user.model.js"

export async function editUser(req, res) {
    try {
        
        const paramId = req.params.userId;
        const inputName = req.body.name;
        const inputSurname = req.body.surname;
        const inputEmail = req.body.email;
        const inputPassword = req.body.password;
        const inputAdress = req.body.adress;
        const inputLanguages = req.body.languages;
        const inputPhone = req.body.phone;
        const inputEducation = req.body.education;
        const inputProficiencies = req.body.profeciencies;
        const inputLinkedin = req.body.linkedin;
        const inputJobExperience = req.body.jobExperience;
        const inputPhotoUrl = req.body.photoUrl;

        const userToEdit = await User.findById(paramId);

        if (userToEdit) {
            if (inputName && userToEdit.name !== inputName) {
                userToEdit.name = inputName;
                await userToEdit.save();
            } if (inputSurname && userToEdit.surname !== inputSurname) {
                userToEdit.surname = inputSurname;
                await userToEdit.save();
            }
            if (inputEmail && userToEdit.email !== inputEmail) {
                userToEdit.email = inputEmail;
                await userToEdit.save();
            }
            if (inputPassword && userToEdit.password !== inputPassword) {
                userToEdit.password = inputPassword;
                await userToEdit.save();
            }
            if (inputAdress && userToEdit.adress !== inputAdress) {
                userToEdit.adress = inputAdress;
                await userToEdit.save();
            }
            if (inputLanguages && userToEdit.languages !== inputLanguages) {
                userToEdit.languages = inputLanguages;
                await userToEdit.save();
            }
            if (inputPhone && userToEdit.phone !== inputPhone) {
                userToEdit.phone = inputPhone;
                await userToEdit.save();
            }
            if (inputEducation && userToEdit.education !== inputEducation) {
                userToEdit.education = inputEducation;
                await userToEdit.save();
            }
            if (inputProficiencies && userToEdit.profeciencies !== inputProficiencies) {
                userToEdit.profeciencies = inputProficiencies;
                await userToEdit.save();
            }
            if (inputLinkedin && userToEdit.linkedin !== inputLinkedin) {
                userToEdit.linkedin = inputLinkedin;
                await userToEdit.save();
            }
            if (inputJobExperience && userToEdit.jobExperience !== inputJobExperience) {
                userToEdit.jobExperience = inputJobExperience;
                await userToEdit.save();
            }
            if (inputPhotoUrl && userToEdit.photo !== inputPhotoUrl) {
                userToEdit.photo = inputPhotoUrl;
                await userToEdit.save();
            }
            return res.status(200).send({ success: true, userToEdit });
        } else {
            return res.status(404).send({ error: `No existe el usuario con la id ${paramId}` });
        }
    }
    catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

export {editUser};