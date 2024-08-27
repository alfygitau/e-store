import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { createProduct } from "../../sdk/products/products";
import { storage } from "../../storage/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddProduct = () => {
  const fileInputRef = useRef(null);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productMeasureUnit, setProductMeasureUnit] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productCategories, setProductCategories] = useState([]);
  const [productImages, setProductImages] = useState([]);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.error("Upload failed:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setProductImages((prev) => [...prev, downloadURL]);
          });
        }
      );
    }
  };

  const createAProduct = async () => {
    try {
      const response = await createProduct({
        title: productName,
        description: productDescription,
        categoryId: 1,
        merchantId: 5,
        quantity: productQuantity,
        unitOfMeasurement: productMeasureUnit,
        stockBalance: productStock,
        price: productPrice,
        discount: 0,
        images: productImages,
      });
      if (response.status === 200 || response.status === 201) {
        toast.success("Product created successfully");
      }
    } catch (error) {
      toast.error(error?.response.data.message);
    }
  };
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
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter the product name"
              className="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">Product Description</label>
            <textarea
              type="text"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Enter the product description"
              className="h-[100px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">Product images</label>
            <div
              onClick={handleClick}
              className="w-full cursor-pointer h-[160px] border-2 border-dashed flex flex-col justify-center items-center gap-[10px]"
            >
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
              <p>Click here to upload more product images</p>
              <p className="text-[14px] italic text-[#9CA3AF]">
                png, jpeg, webp, and jpg images will be accepted
              </p>
              <input
                type="file"
                ref={fileInputRef}
                multiple
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept=".png,.jpeg,.webp,.jpg"
              />
            </div>
          </div>
          <div className="w-full flex items-center flex-wrap gap-[20px] my-[20px]">
            {productImages.length > 0 &&
              productImages.map((image) => (
                <div key={image} className="w-[45%] h-[200px]">
                  <img
                    src={image}
                    className="h-full w-full object-cover"
                    alt={image}
                  />
                </div>
              ))}
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="sku">Product SKU</label>
            <input
              type="text"
              placeholder="Enter the product SKU"
              className="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="sku">Product barcode</label>
            <input
              type="text"
              placeholder="Enter the product barcode"
              className="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="sku">Product category</label>
            <select
              type="text"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              placeholder="Enter the product barcode"
              className="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
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
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                placeholder="Enter the product price"
                className="h-[50px] w-[85%] text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">Product quantity</label>
            <input
              type="text"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
              placeholder="Enter the product quantity"
              className="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">Product slug</label>
            <input
              type="text"
              placeholder="Enter the product slug"
              className="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={createAProduct}
          className="h-[45px] text-white bg-[#12B981] px-[30px]"
        >
          Add product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
