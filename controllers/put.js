const libModel = require("../models/libmodel");
// const multer = require("multer");
const mongoose = require("mongoose");
const BookModel = require("../models/bookmodel");
const AccModel = require("../models/accmodel");
const StatusModel = require("../models/statusmodel");
const HistoryModel = require("../models/historymodel");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads"); // Specify the directory where you want to store the uploaded files
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname); // Generate a unique file name for the uploaded file
//   },
// });
// const upload = multer({ Storage: storage });
librarycon = {};
bookcon = {};
accountcon = {};
statuscon = {};
historycon = {};

//Library obj
librarycon.updateLibparam = async (req, res) => {
  console.log("hello");
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
      console.log(updatedparam);
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
      console.log(updatedparam);
      res.status(200).json({ message: "item updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// librarycon.handleImageUpload = (req, res, next) => {
//   console.log(req.params.libraryId);
//   console.log("222");
//   upload.single("image");
// };

librarycon.updateimg = async (req, res) => {
  console.log("223");
  const imageFile = req.file;
  console.log(imageFile);
  console.log(req.params.libraryId);
  const updatedparam = await libModel.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(req.params.libraryId) },
    {
      $set: {
        image: { data: imageFile.buffer, contentType: imageFile.mimetype },
      },
    },
    { new: true }
  );
  if (!updatedparam) {
    return res.status(404).json({ message: "Parameter not found" });
  }
  res.status(200).json({ message: "item updated successfully" });
};

librarycon.updateLib = async (req, res) => {
  console.log(req.params.libraryId);
  libraryId = new mongoose.Types.ObjectId(req.params.libraryId);
  console.log(libraryId);
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
      !links ||
      !image
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

//library obj ends : book obj starts

bookcon.updatebook = async (req, res) => {
  console.log(req.params.bookId);
  bookId = new mongoose.Types.ObjectId(req.params.bookId);
  console.log(bookId);
  try {
    const {
      libraryId,
      name,
      author,
      publishDate,
      publishInfo,
      isbn,
      format,
      edition,
      description,
      abstract,
      genre,
      image,
    } = req.body;
    if (
      !libraryId ||
      !name ||
      !author ||
      !publishDate ||
      !publishInfo ||
      !isbn ||
      !format ||
      !edition ||
      !description ||
      !abstract ||
      !genre ||
      !image
    ) {
      return res.status(400).json({ message: "All fields are requeired" });
    } else {
      const updatedbook = await BookModel.findByIdAndUpdate(bookId, {
        libraryId,
        name,
        author,
        publishDate,
        publishInfo,
        isbn,
        format,
        edition,
        description,
        abstract,
        genre,
        image,
      });

      console.log(updatedbook);
      if (!updatedbook) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.status(200).json({ message: "Book updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

bookcon.updatebookparam = async (req, res) => {
  try {
    const item = req.params.parameter;

    if (!item) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const itemName = req.body;
    const updatedparam = await BookModel.findByIdAndUpdate(
      req.params.bookId,
      {
        $set: { [item]: itemName },
      },
      { new: true }
    );
    console.log("hello");
    if (!updatedparam) {
      return res.status(404).json({ message: "Parameter not found" });
    }
    console.log(updatedparam);
    res.status(200).json({ message: "item updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

bookcon.updatebookimg = async (req, res) => {
  const imageFile = req.file;
  console.log(imageFile);
  console.log(req.params.bookId);
  const updatedimg = await BookModel.findByIdAndUpdate(
    req.params.bookId,
    {
      $set: {
        image: { data: imageFile.buffer, contentType: imageFile.mimetype },
      },
    },
    { new: true }
  );
  if (!updatedimg) {
    return res.status(404).json({ message: "Parameter not found" });
  }
  res.status(200).json({ message: "item updated successfully" });
};

//account starts
accountcon.updateaccount = async (req, res) => {
  accountId = new mongoose.Types.ObjectId(req.params.accountId);
  try {
    const {
      libraryId,
      firstName,
      lastName,
      address,
      phone,
      books,
      holds,
      image,
    } = req.body;
    if (
      !libraryId ||
      !firstName ||
      !lastName ||
      !address ||
      !phone ||
      !books ||
      !holds ||
      !image
    ) {
      return res.status(400).json({ message: "All fields are requeired" });
    } else {
      const updatedacc = await AccModel.findByIdAndUpdate(accountId, {
        libraryId,
        firstName,
        lastName,
        address,
        phone,
        books,
        holds,
        image,
      });

      console.log(updatedacc);
      if (!updatedacc) {
        return res.status(404).json({ message: "Account not found" });
      }
      res.status(200).json({ message: "Account updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

accountcon.updateaccountparam = async (req, res) => {
  try {
    const item = req.params.parameter;
    console.log(item);

    if (!item) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (item == "books" || item == "holds") {
      const itemName = req.body;
      console.log("1", itemName);
      const updatedparam = await AccModel.findByIdAndUpdate(
        req.params.accountId,
        {
          $push: { [item]: itemName },
        },
        { new: true }
      );

      if (!updatedparam) {
        return res.status(404).json({ message: "Parameter not found" });
      }
      console.log(updatedparam);
      res.status(200).json({ message: "item updated successfully" });
    } else {
      console.log("232");
      const itemName = req.body;
      console.log("2", itemName);
      const updatedparam = await AccModel.findByIdAndUpdate(
        req.params.accountId,
        {
          $set: { [item]: itemName },
        },
        { new: true }
      );
      console.log("hello");
      if (!updatedparam) {
        return res.status(404).json({ message: "Parameter not found" });
      }
      console.log(updatedparam);
      res.status(200).json({ message: "item updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

accountcon.updateaccountimg = async (req, res) => {
  console.log("223");
  const imageFile = req.file;
  console.log(imageFile);
  console.log(req.params.accountId);
  const updatedparam = await AccModel.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(req.params.accountId) },
    {
      $set: {
        image: { data: imageFile.buffer, contentType: imageFile.mimetype },
      },
    },
    { new: true }
  );
  if (!updatedparam) {
    return res.status(404).json({ message: "image not found" });
  }
  res.status(200).json({ message: "item updated successfully" });
};

//status start
statuscon.updatestatus = async (req, res) => {
  statusId = new mongoose.Types.ObjectId(req.params.statusId);
  console.log(statusId);
  try {
    const { bookId, accountId, checkedOut, returnDate, checkedIn } = req.body;
    console.log(req.body);
    if (
      !bookId ||
      !accountId ||
      checkedOut === undefined ||
      !returnDate ||
      checkedIn === undefined
    ) {
      return res.status(400).json({ message: "All fields are requeired" });
    } else {
      const updated = await StatusModel.findByIdAndUpdate(statusId, {
        bookId,
        accountId,
        checkedOut,
        returnDate,
        checkedIn,
      });

      console.log(updated);
      if (!updated) {
        return res.status(404).json({ message: "Status not found" });
      }
      res.status(200).json({ message: "Status updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

statuscon.updatestatusparam = async (req, res) => {
  try {
    const item = req.params.parameter;
    if (!item) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const itemName = req.body;
    const updatedparam = await StatusModel.findByIdAndUpdate(
      req.params.statusId,
      {
        $set: { [item]: itemName },
      },
      { new: true }
    );
    console.log("hello");
    if (!updatedparam) {
      return res.status(404).json({ message: "Parameter not found" });
    }
    console.log(updatedparam);
    res.status(200).json({ message: "item updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

//history start
historycon.updatestatus = async (req, res) => {
  historyId = new mongoose.Types.ObjectId(req.params.historyId);
  console.log(historyId);
  try {
    const {
      bookId,
      history: { statusId, accountId, checkedOut, returnDate, checkedIn },
    } = req.body;
    console.log(req.body);
    if (
      !bookId ||
      !accountId ||
      !statusId ||
      checkedOut === undefined ||
      !returnDate ||
      checkedIn === undefined
    ) {
      return res.status(400).json({ message: "All fields are requeired" });
    } else {
      const updated = await HistoryModel.findByIdAndUpdate(historyId, {
        bookId,
        history: { statusId, accountId, checkedOut, returnDate, checkedIn },
      });

      console.log(updated);
      if (!updated) {
        return res.status(404).json({ message: "Status not found" });
      }
      res.status(200).json({ message: "Status updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  librarycon,
  bookcon,
  accountcon,
  statuscon,
  historycon,
};
