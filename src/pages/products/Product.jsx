import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../static/products";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let productDetails = products.find((product) => product.id === id);

  let otherProducts = products.filter(
    (product) =>
      product.category === productDetails.category && product.id != id
  );

  return (
    <div className="p-[20px] w-full h-full overflow-y-auto">
      <p className="text-[20px] my-[20px] font-bold">{productDetails.name}</p>
      <div className="w-full max-h-[600px] h-[600px] min-h-[400px] flex justify-between">
        <div className="w-[40%] flex items-center justify-center h-full">
          <img
            className="w-[100%] h-[100%] object-fit"
            src="/jembe.webp"
            alt="jember"
          />
        </div>
        <div className="w-[60%] flex flex-col p-[20px]">
          <div className="flex items-center gap-[10px]">
            <p>Status:</p>
            <div className="bg-[#0000FF] text-white text-[12px] px-[5px] rounded-md">
              <p>{productDetails.status}</p>
            </div>
          </div>
          <p className="text-[20px] font-bold">{productDetails.name}</p>
          <p className="text-[24px] fontnormal my-[20px]">
            KSHS.{" "}
            {Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
            }).format(Number(productDetails.salePrice))}
          </p>
          <div className="bg-[#D1FAE6] w-[100px] flex items-center justify-center text-[#229D72] text-[12px] px-[5px] rounded-md">
            In stock
          </div>
          <div className="flex items-center mb-[20px] gap-[10px]">
            <p className="text-[18px]">QUANTITY:</p>
            <p className="text-[18px]">{productDetails.stock}</p>
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
                  onClick={() => navigate(`/dashboard/products/${product.id}`)}
                  className="bg-gray-300 cursor-pointer w-[200px] mb-[10px] flex items-center justify-center rounded-lg"
                >
                  <p className="text-[13px]">{product.name}</p>
                </div>
              ))
            ) : (
              <p className="text-[13px] mb-[10px]">No related products</p>
            )}
          </div>
          <div className="w-full">
            <button className="bg-[#12B981] h-[50px] w-full my-[20px] text-white">
              Edit product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
