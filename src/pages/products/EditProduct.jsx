import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  editProduct,
  getProduct,
  getProducts,
} from "../../sdk/products/products";
import { getCategories } from "../../sdk/product-category/category";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productMeasureUnit, setProductMeasureUnit] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productCategories, setProductCategories] = useState([]);

  const getProductCategories = async () => {
    try {
      const response = await getCategories();
      if (response.status === 200) {
        setProductCategories(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response.data.message);
    }
  };

  const fetchProduct = async () => {
    try {
      const response = await getProduct(id);
      if (response.status === 200) {
        setProductDetails(response.data.message);
        setProductName(response.data.message.title);
        setProductDescription(response.data.message.description);
        setProductPrice(response.data.message.price);
        setProductQuantity(response.data.message.quantity);
        setProductStock(response.data.message.stock_balance);
        setProductMeasureUnit(response.data.message.unit_of_measurement);
        setProductCategory(response.data.message.categoryId);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      if (response.status == 200) {
        setAllProducts(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message);
    }
  };

  let otherProducts = allProducts?.filter(
    (product) =>
      product.categoryId === productDetails.categoryId &&
      product.product_id !== id
  );

  useEffect(() => {
    getProductCategories();
    fetchProduct();
    fetchProducts();
  }, []);

  const EditAProduct = async () => {
    try {
      const response = await editProduct(id, {
        title: productName,
        description: productDescription,
        quantity: productQuantity,
        unitOfMeasurement: productMeasureUnit,
        stockBalance: productStock,
        price: productPrice,
      });
      if (response.status === 200 || response.status === 201) {
        toast.success("Product updated successfully");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message);
    }
  };
  return (
    <div className="p-[20px] h-full w-full overflow-y-auto">
      <div className="flex items-center w-full my-[20px] justify-between">
        <p className="font-bold text-[16px]">Edit the product</p>
      </div>
      <div className="flex w-full gap-[40px]">
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
          <div className="flex w-full items-center justify-between">
            <label htmlFor="name">Product images</label>
            <button
              onClick={() =>
                navigate(
                  `/dashboard/products/${productDetails.product_id}/add-images`
                )
              }
              className="bg-[#12B981] flex items-center justify-center gap-[10px] h-[40px] px-[10px] text-white rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="-4.5 -4.5 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8.9 6.9v-5a1 1 0 1 0-2 0v5h-5a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2z"
                />
              </svg>
              Add product images
            </button>
          </div>
          <div className="w-full flex items-center flex-wrap gap-[20px] my-[20px]">
            {productDetails?.images?.length > 0 &&
              productDetails?.images.map((image) => (
                <div key={image} className="w-[45%] h-[200px]">
                  <img
                    src={image.image_url}
                    className="h-full w-full object-cover"
                    alt={image.image_url}
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
            <label htmlFor="sku">Product brand</label>
            <input
              type="text"
              placeholder="Enter the product brand"
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
              {productCategories.map((category) => (
                <option key={category.categoryId} value={category.categoryId}>
                  {category.name}
                </option>
              ))}
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
          <div className="flex gap-[20px] flex-col w-full mb-[20px]">
            <label htmlFor="name">Related products</label>
            <div>
              {otherProducts?.length > 0 &&
                otherProducts.map((product) => (
                  <div
                    onClick={() =>
                      navigate(`/dashboard/products/${product.productId}`)
                    }
                    className="bg-gray-300 cursor-pointer w-full h-[40px] mb-[10px] flex items-center justify-center rounded-lg"
                  >
                    <p className="text-[13px]">{product.title}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={EditAProduct}
          className="h-[45px] text-white bg-[#12B981] px-[30px]"
        >
          Edit product
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
