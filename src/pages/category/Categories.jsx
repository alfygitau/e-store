import React from "react";
import { categories } from "../../static/categories";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="p-[20px] w-full h-full overflow-y-auto">
      <div className="h-[120px] px-[20px] flex items-center justify-between bg-white w-full border my-[20px]">
        <div className="flex items-center gap-[15px]">
          <button className="bg-white border px-[20px] h-[45px] text-[#000] flex items-center justify-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M42 27c0 6-4 16-18 16S6 33 6 27M24.008 5.1V33M12 17L24 5l12 12"
              />
            </svg>
            Export categories
          </button>
          <button className="bg-white border px-[20px] h-[45px] text-[#000] flex items-center justify-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14.47 10.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V4a.75.75 0 0 1 1.5 0v8.19z"
              />
              <path
                fill="currentColor"
                d="M20.75 12a.75.75 0 0 0-1.5 0a7.25 7.25 0 1 1-14.5 0a.75.75 0 0 0-1.5 0a8.75 8.75 0 1 0 17.5 0"
              />
            </svg>
            Import categories
          </button>
        </div>
        <div className="flex items-center gap-[15px]">
          <button className="bg-[#FF938D] px-[20px] h-[45px] text-[#fff] flex items-center justify-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 12 12"
            >
              <path
                fill="currentColor"
                d="M5 3h2a1 1 0 0 0-2 0M4 3a2 2 0 1 1 4 0h2.5a.5.5 0 0 1 0 1h-.441l-.443 5.17A2 2 0 0 1 7.623 11H4.377a2 2 0 0 1-1.993-1.83L1.941 4H1.5a.5.5 0 0 1 0-1zm3.5 3a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zM5 5.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V6a.5.5 0 0 0-.5-.5"
              />
            </svg>
            Delete
          </button>
          <button
            onClick={() => navigate("/dashboard/add-category")}
            className="bg-[#12B981] px-[20px] h-[45px] text-[#fff] flex items-center justify-center gap-[10px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 12 12"
            >
              <path
                fill="currentColor"
                d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5z"
              />
            </svg>
            Add Category
          </button>
        </div>
      </div>
      <div className="h-[120px] px-[20px] flex items-center justify-between bg-white w-full border my-[20px]">
        <input
          type="text"
          placeholder="Search a category(s)"
          class="h-[50px] w-[72%] text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
        />
        <div className="w-[24%] flex items-center justify-between">
          <button className="h-[50px] bg-[#057856] px-[20px] text-white w-[45%]">
            Filter
          </button>
          <button className="h-[50px] bg-[#E6E7EB] px-[20px] text-[#000] w-[45%]">
            Reset
          </button>
        </div>
      </div>
      <div className="border bg-white p-[10px]">
        <div className="flex font-bold border-b-2 h-[50px] items-center">
          <div className="w-[5%]">
            <input type="checkbox" name="export" id="export" />
          </div>
          <p className="w-[10%]">Id</p>
          <p className="w-[15%]">Category name</p>
          <p className="w-[30%]">Description</p>
          <p className="w-[10%]">Status</p>
          <p className="w-[15%]">Published</p>
          <p className="w-[15%]">Actions</p>
        </div>
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex text-[14px] border-b h-[50px] items-center"
          >
            <div className="w-[5%]">
              <input type="checkbox" name="export" id="export" />
            </div>
            <p className="w-[10%]">{category.id}</p>
            <p className="w-[15%]">{category.name}</p>
            <p className="w-[30%] truncate">{category.description}</p>
            <p className="w-[10%]">{category.status}</p>
            <p className="w-[15%]">{category.published ? "Yes" : "No"}</p>
            <div className="w-[15%] flex items-center gap-[10px] truncate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m14.304 4.844l2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565l6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M20.188 10.934c.388.472.582.707.582 1.066c0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066c0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934Z" />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="m18.412 6.5l-.801 13.617A2 2 0 0 1 15.614 22H8.386a2 2 0 0 1-1.997-1.883L5.59 6.5H3.5v-1A.5.5 0 0 1 4 5h16a.5.5 0 0 1 .5.5v1zM10 2.5h4a.5.5 0 0 1 .5.5v1h-5V3a.5.5 0 0 1 .5-.5M9 9l.5 9H11l-.4-9zm4.5 0l-.5 9h1.5l.5-9z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
