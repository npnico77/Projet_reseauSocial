const UserModel = require("../models/user.model");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const { upLoadErrors } = require("../utils/errors.utils");
const pipeline = promisify(require("stream").pipeline);

module.exports.uploadProfil = async (req, res) => {
  try {
    const validMimeTypes = ["image/jpg", "image/png", "image/jpeg"];
    if (!validMimeTypes.includes(req.file.detectedMimeType)) {
      throw new Error("invalid file");
    }
    if (req.file.size > 750000) {
      throw new Error("max size");
    }

    const fileName = req.body.name + ".jpg";
    const filePath = path.join(
      __dirname,
      "../client/public/uploads/profil/",
      fileName
    );

    await pipeline(req.file.stream, fs.createWriteStream(filePath));

    const updatedUser = await UserModel.findByIdAndUpdate(
      req.body.userId,
      { $set: { picture: `./uploads/profil/${fileName}` } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.send(updatedUser);
  } catch (err) {
    const errors = upLoadErrors(err);
    res.status(400).json({ errors });
  }
};
