const ReviewCard = ({ review }) => (
  <div className="bg-white shadow p-6 rounded-lg">
    <p className="text-gray-700 mb-3">“{review.text}”</p>
    <p className="font-semibold">- {review.author}</p>
  </div>
);

export default ReviewCard;
