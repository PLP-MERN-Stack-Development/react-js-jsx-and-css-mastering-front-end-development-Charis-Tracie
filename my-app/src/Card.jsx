export default function Card({ title, content }) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
