const libModel = require("../models/libmodel");
librarycon = {};
bookcon = {};
accountcon = {};
statuscon = {};
history = {};

librarycon.updateLibparam = async (req, res) => {
  try {
    const item = req.params.parameter;
    const itemName = req.body[item];
    if (!item) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const updatedparam = await libModel.findByIdAndUpdate(
      req.params.libraryId,
      {
        $set: { [item]: itemName },
      },
      { new: true }
    );
    if (!updatedparam) {
      return res.status(404).json({ message: "Parameter not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

librarycon.updateLib = async (req, res) => {
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
      const updatedLib = await libModel.findByIdAndUpdate(
        req.params.libraryId,
        {
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
        },
        { new: true }
      );
      if (!updatedLib) {
        return res.status(404).json({ message: "Library not found" });
      }
      res.status(200).json({ message: "Library updated successfully" });
    }
  } catch {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { librarycon, bookcon, accountcon, statuscon, history };
