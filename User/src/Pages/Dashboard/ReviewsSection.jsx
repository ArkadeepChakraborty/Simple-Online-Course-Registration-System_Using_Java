import { reviews } from "../../data/reviews";
import ReviewCard from "../../components/ReviewCard";

const ReviewsSection = () => {
  return (
    <section className="-mt-5 py-16 bg-gray-50 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">What Students Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((rev) => (
          <ReviewCard key={rev.id} review={rev} />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
