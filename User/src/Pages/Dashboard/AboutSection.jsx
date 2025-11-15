import { Play, Award, BookOpen } from "lucide-react";

export default function AboutSection() {
  const features = [
    { id: 1, icon: <Play className="w-8 h-8" />, text: "Live Interactive Classes" },
    { id: 2, icon: <BookOpen className="w-8 h-8" />, text: "Easy to Understand Content" },
    { id: 3, icon: <Award className="w-8 h-8" />, text: "Certificate After Completion" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose CPC Courses?</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          A trusted platform providing quality education with proper guidance
          and structured learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition shadow-gray-200"
            >
              {/* ✅ Square Icon Box */}
              <div className="w-20 h-20 bg-blue-100 rounded-lg flex justify-center items-center text-blue-600">
                {item.icon}
              </div>

              <p className="mt-6 text-lg font-semibold text-gray-800">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
