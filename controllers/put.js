const libModel = require("../models/libmodel");
const multer = require("multer");
const mongoose = require("mongoose");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Specify the directory where you want to store the uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate a unique file name for the uploaded file
  },
});
const upload = multer({ Storage: storage });
librarycon = {};
bookcon = {};
accountcon = {};
statuscon = {};
history = {};

//Library obj
librarycon.updateLibparam = async (req, res) => {
  try {
    const item = req.params.parameter;

    if (!item) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (item == "links") {
      const itemName = req.body;

      const updatedparam = await libModel.findByIdAndUpdate(
        req.params.libraryId,
        {
          $push: { [item]: itemName },
        },
        { new: true }
      );
      if (!updatedparam) {
        return res.status(404).json({ message: "Parameter not found" });
      }
      res.status(200).json({ message: "item updated successfully" });
    } else if (item == "image") {
      upload.single("image");
      // const itemName = req.body;
      const imageFile = req.file;
      console.log(imageFile);
      console.log(req.params.libraryId);
      const updatedparam = await libModel.findByIdAndUpdate(
        req.params.libraryId,
        {
          $set: {
            [item]: { data: imageFile.buffer, contentType: imageFile.mimetype },
          },
        },
        { new: true }
      );
      if (!updatedparam) {
        return res.status(404).json({ message: "Parameter not found" });
      }
      res.status(200).json({ message: "item updated successfully" });
    } else {
      const itemName = req.body;

      const updatedparam = await libModel.findByIdAndUpdate(
        req.params.libraryId,
        {
          $set: { [item]: itemName },
        },
        { new: true }
      );
      console.log("hello");
      if (!updatedparam) {
        return res.status(404).json({ message: "Parameter not found" });
      }
      res.status(200).json({ message: "item updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

librarycon.handleImageUpload = (req, res, next) => {
  if (req.params.parameter === "image") {
    upload.single("image")(req, res, next);
  } else {
    next();
  }
};

librarycon.updateLib = async (req, res) => {
  console.log("hey");
  libraryId = new mongoose.Types.ObjectId(req.params.libraryId);
  try {
    const { name, email, address, phone, hours, schedule, links, image } =
      req.body;
    if (
      !name ||
      !email ||
      !address ||
      !phone ||
      !hours ||
      !schedule ||
      !links
    ) {
      return res.status(400).json({ message: "All fields are requeired" });
    } else {
      const updatedLib = await libModel.findByIdAndUpdate(libraryId, {
        name,
        email,
        address,
        phone,
        hours,
        schedule,
        links,
        image,
      });

      console.log(updatedLib);
      if (!updatedLib) {
        return res.status(404).json({ message: "Library not found" });
      }
      res.status(200).json({ message: "Library updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

//library obj ends

module.exports = {
  librarycon,
  bookcon,
  accountcon,
  statuscon,
  history,
};
