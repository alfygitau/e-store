import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../static/products";
import { toast } from "react-toastify";
import { getProduct, getProducts } from "../../sdk/products/products";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await getProduct(id);
      if (response.status === 200) {
        setProductDetails(response.data.message);
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
    fetchProduct();
    fetchProducts();
  }, []);

  return (
    <div className="p-[20px] w-full h-full overflow-y-auto">
      <p className="text-[20px] my-[20px] font-bold">{productDetails.title}</p>
      <div className="w-full max-h-[600px] h-[600px] min-h-[400px] flex justify-between">
        <div className="w-[40%] flex items-center justify-center h-full">
          <img
            className="w-[100%] h-[100%] object-fit"
            src={
              productDetails?.images?.length > 0
                ? productDetails?.images[0]?.image_url
                : "/jembe.webp"
            }
            alt="jember"
          />
        </div>
        <div className="w-[60%] flex flex-col p-[20px]">
          <div className="flex items-center gap-[10px]">
            <p>Status:</p>
            <div className="bg-[#0000FF] text-white text-[12px] px-[5px] rounded-md">
              <p>Active</p>
            </div>
          </div>
          <p className="text-[20px] font-bold">{productDetails.title}</p>
          <p className="text-[24px] fontnormal my-[20px]">
            KSHS.{" "}
            {Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
            }).format(Number(productDetails.price))}
          </p>
          <div className="bg-[#D1FAE6] w-[100px] flex items-center justify-center text-[#229D72] text-[12px] px-[5px] rounded-md">
            In stock
          </div>
          <div className="flex items-center mb-[20px] gap-[10px]">
            <p className="text-[18px]">QUANTITY:</p>
            <p className="text-[18px]">{productDetails.quantity}</p>
          </div>
          <div className="my-[20px]">
            <p className="text-[16px] font-semibold">Description</p>
            <p className="text-[15px]">{productDetails.description}</p>
          </div>
          <div className="my-[20px]">
            <p className="text-[16px] font-semibold">Categories</p>
            <p className="text-[15px]">{productDetails.category}</p>
          </div>
          <div>
            <p className="text-[16px] font-semibold mb-[10px]">
              Others products in the category
            </p>
            {otherProducts.length > 0 ? (
              otherProducts.map((product) => (
                <div
                  onClick={() =>
                    navigate(`/dashboard/products/${product.productId}`)
                  }
                  className="bg-gray-300 cursor-pointer w-[200px] mb-[10px] flex items-center justify-center rounded-lg"
                >
                  <p className="text-[13px]">{product.title}</p>
                </div>
              ))
            ) : (
              <p className="text-[13px] mb-[10px]">No related products</p>
            )}
          </div>
          <div className="w-full">
            <button
              onClick={() =>
                navigate(`/dashboard/products/${productDetails.product_id}/edit`)
              }
              className="bg-[#12B981] h-[50px] w-full my-[20px] text-white"
            >
              Edit product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
