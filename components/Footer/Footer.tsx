export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 text-xs py-4 mt-12 border-t">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        <p>© {new Date().getFullYear()} Charlotte Jeanningros. All rights reserved.</p>
        <p>
          webdev j4ngolino
        </p>
      </div>
    </footer>
  );
}