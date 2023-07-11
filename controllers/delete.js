const mongodb = require ('../db/connect')
const Id = require ('mongodb').ObjectId

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

