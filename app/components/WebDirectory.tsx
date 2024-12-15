import { PixelBorder } from "./PixelBorder";

const categories = [
  {
    name: "Arts & Entertainment",
    subcategories: ["Music", "Movies", "Television"],
  },
  {
    name: "Business & Economy",
    subcategories: ["Companies", "Finance", "Jobs"],
  },
  {
    name: "Computers & Internet",
    subcategories: ["Hardware", "Software", "Web Design"],
  },
  {
    name: "News & Media",
    subcategories: ["Newspapers", "Magazines", "Weather"],
  },
  {
    name: "Recreation & Sports",
    subcategories: ["Games", "Travel", "Outdoors"],
  },
];

export function WebDirectory() {
  return (
    <PixelBorder>
      <div className="bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4 bg-purple-600 text-white p-1 text-center">
          Web Directory
        </h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <details>
                <summary className="cursor-pointer text-blue-600 hover:underline">
                  {category.name}
                </summary>
                <ul className="ml-4 mt-2 space-y-1">
                  {category.subcategories.map((subcat) => (
                    <li key={subcat}>
                      <a href="#" className="text-blue-600 hover:underline">
                        {subcat}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </PixelBorder>
  );
}
