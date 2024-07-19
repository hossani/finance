const User = require("../models/user");
const { sendConfirmationEmail } = require("../helpers/newsletter"); // Adjust the import as per your file structure

const subscribeUser = async (req, res) => {
  try {
    const { userId } = req.user; // Assurez-vous que req.user contient l'ID de l'utilisateur authentifié
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { newsletter: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await sendConfirmationEmail(user.email);

    res.status(200).json({ message: "Subscription successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const unsubscribeUser = async (req, res) => {
  try {
    const { userId } = req.user; // Assurez-vous que req.user contient l'ID de l'utilisateur authentifié
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { newsletter: false }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Unsubscription successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  subscribeUser,
  unsubscribeUser,
};
