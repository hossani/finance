const mongoose = require('mongoose');
const Profile = require('../models/profile');

const updateProfile = async (req, res) => {
    try {
        const { userId } = req.user; // Assurez-vous que req.user contient l'ID de l'utilisateur authentifié
        const profile= req.body; // Les nouvelles données pour mettre à jour le profil

        // Vérifiez que userId est présent
        if (!userId) {
            return res.status(400).json({ message: 'userId est requis' });
        }

        // Mettre à jour le profil
        const updatedProfile = await Profile.findOneAndUpdate(
            { userId: new mongoose.Types.ObjectId(userId) }, // Critères de recherche
            { $set: profile }, // Champs à mettre à jour
        );

        if (!updatedProfile) {
            return res.status(404).json({ message: 'Profil non trouvé' });
        }

        res.json({profile: updatedProfile });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProfile = async (req, res) => {
    try {
        const { userId } = req.user; // Assurez-vous que req.user contient l'ID de l'utilisateur authentifié

        // Vérifiez que userId est présent
        if (!userId) {
            return res.status(400).json({ message: 'userId est requis' });
        }

        // Trouver le profil dans la base de données
        const userProfile = await Profile.findOne({ userId: new mongoose.Types.ObjectId(userId) });

        if (!userProfile) {
            return res.status(404).json({ message: 'Profil non trouvé' });
        }

        res.json({ profile: userProfile });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {updateProfile,getProfile};
