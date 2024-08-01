import React from "react";

const AddProduct = () => {
  return (
    <div className="p-[20px] h-full w-full overflow-y-auto">
      <p className="font-bold text-[16px] my-[20px]">
        Add a product to the catalog
      </p>
      <div className="flex w-full justify-between">
        <div className="flex w-[45%] flex flex-col">
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">Product name</label>
            <input
              type="text"
              placeholder="Enter the product name"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">Product Description</label>
            <textarea
              type="text"
              placeholder="Enter the product description"
              class="h-[100px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">Product images</label>
            <div className="w-full h-[160px] border-2 border-dashed flex flex-col justify-center items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#12B981"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M11.678 20.271C7.275 21.318 4 25.277 4 30c0 5.523 4.477 10 10 10c.947 0 1.864-.132 2.733-.378m19.322-19.351c4.403 1.047 7.677 5.006 7.677 9.729c0 5.523-4.477 10-10 10c-.947 0-1.864-.132-2.732-.378M36 20c0-6.627-5.373-12-12-12s-12 5.373-12 12m5.065 7.881L24 20.924L31.132 28M24 38V24.462"
                />
              </svg>
              <p>Click here to upload a product image</p>
              <p className="text-[14px] italic text-[#9CA3AF]">
                png, jpeg, webp, and jpg images will be accepted
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="sku">Product SKU</label>
            <input
              type="text"
              placeholder="Enter the product SKU"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="sku">Product barcode</label>
            <input
              type="text"
              placeholder="Enter the product barcode"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="sku">Product category</label>
            <select
              type="text"
              placeholder="Enter the product barcode"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            >
              <option value="">Select a category</option>
              <option value="farm-inputs">Farm inputs</option>
            </select>
          </div>
        </div>
        <div className="flex w-[45%] flex flex-col">
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">Product price</label>
            <div className="flex items-center">
              <div className="h-[50px] w-[15%] border flex items-center justify-center">
                KSH
              </div>
              <input
                type="text"
                placeholder="Enter the product price"
                class="h-[50px] w-[85%] text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">Product quantity</label>
            <input
              type="text"
              placeholder="Enter the product quantity"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">Product slug</label>
            <input
              type="text"
              placeholder="Enter the product slug"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="h-[45px] text-white bg-[#12B981] px-[30px]">
          Add product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
