// ========================================
// FILE: src/components/PlaceholderThumbnail.jsx
// TASK 3.1: Gradient placeholder shown whenever a thumbnail is an
//           Unsplash stock URL (or any time a real screenshot is absent).
// ========================================

const PlaceholderThumbnail = ({ title, gradient, technologies }) => (
  <div
    className={`w-full h-full bg-gradient-to-br ${gradient}
      flex flex-col items-center justify-center p-6 text-white`}
  >
    <h3 className="text-lg font-bold text-center mb-3 leading-tight">
      {title}
    </h3>
    <div className="flex flex-wrap gap-1 justify-center">
      {technologies.slice(0, 3).map((t) => (
        <span
          key={t}
          className="text-xs bg-white/20 px-2 py-1 rounded-full"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default PlaceholderThumbnail;