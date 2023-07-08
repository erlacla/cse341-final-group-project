const mongodb = require ('../db/connect')
const Id = require ('mongodb').ObjectId
const {body, validationResult, param} = require("express-validator");
const { all } = require('../routes/delete');

// const contactRules = () => {
//   return [
//       body("itemName").trim().escape().isLength({min:1}).withMessage("Error, Item Name is required."),
//       body("itemCost").trim().escape().isLength({min:1}).withMessage("Error, Item Cost is required."),
//       body("itemQuantityInStock").trim().escape().isLength({min:1}).withMessage("Error, Quantity Required"),
//       body("vendorID").trim().escape().isLength({min:1}).withMessage("Error, Vendor ID is required."),
//       body("vendorLocation").trim().escape().isLength({min:1}).withMessage("Error, Vendor Location is required."),
//       body("itemImagePath").trim().escape().isLength({min:1}).withMessage("Error, Item Image path is required."),
//       body("itemAlt").trim().escape().isLength({min:1}).withMessage("Error, Item Description is required."),
//   ]
// }

// const contactsValidator = (req, res, next) => {
//   let errors = [];
//   errors = validationResult(req)

//   if (errors.isEmpty()){
//       next();
//       return
//   }
//   else {
//       res.json(errors);
//   }

const deleteLibrary = async (req, res, next) => {
  try{
  const result = await mongodb.getDb().db('LibraryServe').collection('library').deleteMany({}, true);
  console.log(result);
  if (result.deletedCount > 0) {
    res.status(200).send();
  } 
  else {
    res.status(500).json(result.error);
  }
}
catch(error) {

  res.status(500).json({message : "Your request was not able to be processed"})
  
  }
};

// const deleteLibraryBySearchType = async (req, res, next) => {
//   try{
//   let searchType = req.params.searchType;
//   const result = await mongodb.getDb().db('LibraryServer').collection('libraryImage').deleteOne({searchType:  }, true);
//   console.log(result);
//   if (result.deletedCount > 0) {
//     res.status(200).send();
//   } 
//   else {
//     res.status(500).json(result.error);
//   }
// }
// catch(error) {

//   res.status(500).json({message : "Your request was not able to be processed"})
  
//   }
// };
const deleteLibraryById = async (req, res, next) => {
  try{
  const libraryId = new Id(req.params.id);
  if (!Id.isValid(req.params.id)) {
    throw new Error("Invalid ID")
   }
  const result = await mongodb.getDb().db('LibraryServe').collection('libraryImage').deleteOne({ _id: libraryId }, true);
  console.log(result);
  if (result.deletedCount > 0) {
    res.status(200).send();
  } 
  else {
    res.status(500).json(result.error);
  }
}
catch(error) {

  res.status(500).json({message : "Your request was not able to be processed"})
  
  }
};


  const deleteLibraryImage = async (req, res, next) => {
    try{
    const imageId = new Id(req.params.id);
    if (!Id.isValid(req.params.id)) {
      throw new Error("Invalid ID")
     }
    const result = await mongodb.getDb().db('LibraryServe').collection('libraryImage').deleteOne({ _id: imageId }, true);
    console.log(result);
    if (result.deletedCount > 0) {
      res.status(200).send();
    } 
    else {
      res.status(500).json(result.error);
    }
  }
  catch(error) {
  
    res.status(500).json({message : "Your request was not able to be processed"})
    
    }
  };

  const deleteBookByID = async (req, res, next) => {
    try{
    const bookId = new Id(req.params.id);
    if (!Id.isValid(req.params.id)) {
      throw new Error("Invalid ID")
     }
    const result = await mongodb.getDb().db('LibraryServe').collection('book').deleteOne({ _id: bookId }, true);
    console.log(result);
    if (result.deletedCount > 0) {
      res.status(200).send();
    } 
    else {
      res.status(500).json(result.error);
    }
  }
  catch(error) {
  
    res.status(500).json({message : "Your request was not able to be processed"})
    
    }
  };

  const deleteBookImage = async (req, res, next) => {
    try{
    const imageId = new Id(req.params.id);
    if (!Id.isValid(req.params.id)) {
      throw new Error("Invalid ID")
     }
    const result = await mongodb.getDb().db('LibraryServe').collection('bookImages').deleteOne({ _id: imageId }, true);
    console.log(result);
    if (result.deletedCount > 0) {
      res.status(200).send();
    } 
    else {
      res.status(500).json(result.error);
    }
  }
  catch(error) {
  
    res.status(500).json({message : "Your request was not able to be processed"})
    
    }
  };

  const deleteAccountByID = async (req, res, next) => {
    try{
    const accountId = new Id(req.params.id);
    if (!Id.isValid(req.params.id)) {
      throw new Error("Invalid ID")
     }
    const result = await mongodb.getDb().db('LibraryServe').collection('account').deleteOne({ _id: accountId }, true);
    console.log(result);
    if (result.deletedCount > 0) {
      res.status(200).send();
    } 
    else {
      res.status(500).json(result.error);
    }
  }
  catch(error) {
  
    res.status(500).json({message : "Your request was not able to be processed"})
    
    }
  };

  const deleteAccountImage = async (req, res, next) => {
    try{
    const imageId = new Id(req.params.id);
    if (!Id.isValid(req.params.id)) {
      throw new Error("Invalid ID")
     }
    const result = await mongodb.getDb().db('LibraryServe').collection('accountImage').deleteOne({ _id: imageId }, true);
    console.log(result);
    if (result.deletedCount > 0) {
      res.status(200).send();
    } 
    else {
      res.status(500).json(result.error);
    }
  }
  catch(error) {
  
    res.status(500).json({message : "Your request was not able to be processed"})
    
    }
  };



  const deleteHistoryByID = async (req, res, next) => {
    try{
    const historyId = new Id(req.params.id);
    if (!Id.isValid(req.params.id)) {
      throw new Error("Invalid ID")
     }
    const result = await mongodb.getDb().db('LibraryServe').collection('history').deleteOne({ _id: historyId }, true);
    console.log(result);
    if (result.deletedCount > 0) {
      res.status(200).send();
    } 
    else {
      res.status(500).json(result.error);
    }
  }
  catch(error) {
  
    res.status(500).json({message : "Your request was not able to be processed"})
    
    }
  };

module.exports = {deleteLibraryById, deleteLibraryImage, deleteAccountByID, deleteAccountImage, deleteBookByID, deleteBookImage, deleteHistoryByID}


// const searchType = req.params.searchType;
//       if (valid.includes(searchType)) {
//         const searchTerm = req.params.searchTerm;
//         if (searchType == "name") {
//           if (!ObjectId.isValid(searchTerm)) {
//             res
//               .status(400)
//               .json("ID must be alphanumeric, 24 characters long.");
//           } else {
//             const userId = new ObjectId(searchTerm);
//             const result = await getDb()
//               .db("trakResolve")
//               .collection("bugs")
//               .find({ _id: userId });
//             result.toArray().then((lists: any) => {
//               if (!lists[0]) {
//                 res
//                   .status(404)
//                   .json(`Bug report with ID ${userId} was not found.`);
//               } else {
//                 res.setHeader("Content-Type", "application/json");
//                 res.status(200).json(lists);
//               }
//             });
//           }
//         } else if (searchType == "email") {
//           const result = await getDb()
//             .db("trakResolve")
//             .collection("bugs")
//             .find({ reportedBy: { $regex: searchTerm } });
//           result.toArray().then((lists: any) => {
//             if (!lists[0]) {
//               res
//                 .status(404)
//                 .json(`Bug reports reported by ${searchTerm} were not found.`);
//             } else {
//               res.setHeader("Content-Type", "application/json");
//               res.status(200).json(lists);
//             }
//           });
//         } else if (searchType == "address") {
//           const result = await getDb()
//             .db("trakResolve")
//             .collection("bugs")
//             .find({ summary: { $regex: searchTerm } });
//           result.toArray().then((lists: any) => {
//             if (!lists[0]) {
//               res
//                 .status(404)
//                 .json(
//                   `Bug report with summary containing ${searchTerm} was not found.`
//                 );
//             } else {
//               res.setHeader("Content-Type", "application/json");
//               res.status(200).json(lists);
//             }
//           });
//         } else if (searchType == "phone") {
//           const result = await getDb()
//             .db("trakResolve")
//             .collection("bugs")
//             .find({ link: { $regex: searchTerm } });
//           result.toArray().then((lists: any) => {
//             if (!lists[0]) {
//               res
//                 .status(404)
//                 .json(
//                   `Bug report with link containing ${searchTerm} was not found.`
//                 );
//             } else {
//               res.setHeader("Content-Type", "application/json");
//               res.status(200).json(lists);
//             }
//           });
//         } else if (searchType == "hours") {
//           const userId = new ObjectId(req.params.id);
//           const result = await getDb()
//             .db("trakResolve")
//             .collection("bugs")
//             .find({ description: { $regex: searchTerm } });
//           result.toArray().then((lists: any) => {
//             if (!lists[0]) {
//               res
//                 .status(404)
//                 .json(
//                   `Bug report with description containing ${searchTerm} was not found.`
//                 );
//             } else {
//               res.setHeader("Content-Type", "application/json");
//               res.status(200).json(lists);
//             }
//           });
//         } else if (searchType == "schedule") {
//           const result = await getDb()
//             .db("trakResolve")
//             .collection("bugs")
//             .find({ resolved: searchTerm.toLowerCase() == "true" });
//           result.toArray().then((lists: any) => {
//             if (!lists[0]) {
//               res
//                 .status(404)
//                 .json(
//                   `Bug report with resolved value os ${searchTerm} was not found.`
//                 );
//             } else {
//               res.setHeader("Content-Type", "application/json");
//               res.status(200).json(lists);
//             }
//           });
//         } else if (searchType == "image") {
//           const result = await getDb()
//             .db("trakResolve")
//             .collection("bugs")
//             .find({ tags: { $regex: searchTerm } });
//           result.toArray().then((lists: any) => {
//             if (!lists[0]) {
//               res
//                 .status(404)
//                 .json(
//                   `Bug report with tags containing ${searchTerm} was not found.`
//                 );
//             } else {
//               res.setHeader("Content-Type", "application/json");
//               res.status(200).json(lists);
//             }
//           });
//         } else {
//           getAllBugReports;
//         }
//       } else {
//         res
//           .status(400)
//           .json(
//             "Search types are _id, summary, link, description, resolved and tag."
//           );
//       }
//     } catch (err) {
//       res.status(500).json("Bug report was not found. Try again later.");
//     }
//   }
// );