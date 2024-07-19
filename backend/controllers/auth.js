const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Profile = require('../models/profile');


 const signin = async (req, res) => {
    const { email, password, nom, prenom } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({ email, password: hashedPassword });
        if(user){
            await Profile.create({ nom, prenom,userId:user.id });
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1m' });
            res.status(200).json({ email, token });
        }
    } catch (error) {
        console.log('Problème dans la création de compte', error);
        res.status(500).json({ message: 'Erreur lors de la création de compte' });
    }
};

 const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ message: 'Utilisateur non trouvé' });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: 'Mot de passe incorrect' });
        }
        
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        res.status(200).json({ email: user.email, token });
    } catch (error) {
        console.error('Erreur lors du login', error);
        res.status(500).json({ message: 'Erreur lors du login' });
    }
};

module.exports={signin,login};