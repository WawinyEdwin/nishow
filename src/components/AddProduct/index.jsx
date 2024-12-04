"use client";
import { getCategories } from "../../lib/db";
import { useEffect, useState } from "react";

// const handleSubmit = async () => {};

export default function AddProduct() {
  const [categories, setCategories] = useState(null);
  const [name, setName] = useState("");
  const [short_description, setShort] = useState("");
  const [long_description, setLong] = useState("");
  const [link, setLink] = useState("")
  const [logo_url, setLogoURL] = useState("")
  const [cat, setCat] = useState("")

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching Categories", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = () => {

  }

  return (
    <div className="flex items-start justify-center  md:items-center">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-8 text-4xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight md:text-3xl md:leading-tight">
          List your product in the showcase directory
        </h1>
        <div className="relative mb-6">
          <label className="mb-2 flex items-center text-sm font-medium text-gray-600">
            name of the product
            <svg
              width="7"
              height="7"
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow-xs block h-11 w-full  border border-gray-300 bg-transparent  px-5 py-2.5 text-base font-normal leading-7  focus:outline-none "
            placeholder=""
          ></input>
        </div>
        <div className="relative mb-6">
          <label className="mb-2  flex items-center text-sm font-medium text-gray-600">
            product logo url
            <svg
              width="7"
              height="7"
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <input
            type="text"
            id="link"
            value={logo_url}
            onChange={(e) => setLogoURL(e.target.value)}
            className="shadow-xs block h-11 w-full border border-gray-300 bg-transparent px-5 py-2.5 text-base font-normal leading-7  focus:outline-none "
            placeholder=""
          ></input>
        </div>
        <div className="relative mb-6">
          <label className="mb-2  flex items-center text-sm font-medium text-gray-600">
            one line description of the product
            <svg
              width="7"
              height="7"
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <input
            value={short_description}
            type="text"
            id="short_description"
            onChange={(e) => setShort(e.target.value)}
            className="shadow-xs block h-11 w-full border border-gray-300 bg-transparent px-5 py-2.5 text-base font-normal leading-7  focus:outline-none "
            placeholder=""
          ></input>
        </div>
        <div className="relative mb-6">
          <label className="mb-2  flex items-center text-sm font-medium text-gray-600">
            web link / playstore link
            <svg
              width="7"
              height="7"
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <input
            type="text"
            id="link"
            onChange={(e) => setLink(e.target.value)}
            className="shadow-xs block h-11 w-full border border-gray-300 bg-transparent px-5 py-2.5 text-base font-normal leading-7  focus:outline-none "
            placeholder=""
          ></input>
        </div>
        <div className="relative mb-6">
          <label className="mb-2  flex items-center text-sm font-medium text-gray-600">
            Category
            <svg
              width="7"
              height="7"
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <select
            name="category"
            id="category"
            className="form-select focus:border-dark-500 focus:ring-dark-500 mt-1 block w-full w-full rounded-md border border-gray-300 px-4 py-2 text-base focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            <option value="">Choose Category</option>
            {categories && categories.length > 1 ? (
              <>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </>
            ) : (
              <option value="">No categories to be selected</option>
            )}
          </select>
        </div>
        <div className="relative mb-6">
          <label className="mb-2  flex items-center text-sm font-medium text-gray-600">
            Long description about your product
          </label>
          <textarea
            name="long_description"
            id="long_description"
            cols={70}
            rows={5}
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button className="shadow-xs mb-6 h-12 w-52 bg-indigo-600 text-center text-base font-semibold leading-6 text-white transition-all duration-700 hover:bg-indigo-800">
            Add product
          </button>
        </div>
      </form>
    </div>
  );
}
