//Array de metodos (C R U D)
const reviewsController = {};
import reviewsModel from "../models/reviews.js";

// SELECT
reviewsController.getreviews = async (req, res) => {
  const reviews = await reviewsModel.find().populate("idCustomer").populate("idProduct");
  res.json(reviews);
};

// INSERT review
reviewsController.createreviews = async (req, res) => {
  const { idCustomer, idProduct, date, comment, rating } = req.body;
  const newReview = new reviewsModel({ idCustomer, idProduct, date, comment, rating });
  await newReview.save();
  res.json({ message: "Review saved" });
};

// DELETE
reviewsController.deletereviews = async (req, res) => {
  const deletedReview = await reviewsModel.findByIdAndDelete(req.params.id);
  if (!deletedReview) {
    return res.comment(404).json({ message: "orden no encontrada" });
  }
  res.json({ message: "Review deleted" });
};

// UPDATE
reviewsController.updatereviews = async (req, res) => {
  // Solicito todos los valores
  const { idCustomer, idProduct, date, comment, rating } = req.body;
  // Actualizo
  await reviewsModel.findByIdAndUpdate(
    req.params.id,
    {
      
idCustomer, idProduct, date, comment, rating
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "Review updated" });
};

export default reviewsController;
