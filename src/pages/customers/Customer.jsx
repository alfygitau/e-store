import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { customers } from "../../static/customers";
import { toast } from "react-toastify";
import { getAMerchant } from "../../sdk/merchants/merchant";

const Customer = () => {
  const { id } = useParams();
  const [merchant, setMerchant] = useState({});

  const fetchMerchant = async () => {
    try {
      const response = await getAMerchant(id);
      if (response.status === 200) {
        setMerchant(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message);
    }
  };

  useEffect(() => {
    fetchMerchant();
  }, [id]);

  return (
    <div className="p-[20px] w-full h-full overflow-y-auto">
      <p className="text-[18px] font-bold mb-[20px]">
        {merchant?.firstName} {merchant?.lastName}
      </p>
      <p className="text-[15px]">Basic information</p>
      <div className="bg-white border h-[250px] mb-[20px] w-full flex flex-col justify-between p-[10px]">
        <div className="flex items-center gap-[10px]">
          <p className="text-[15px] font-semibold">Full Name</p>
          <p className="text-[15px]">
            {merchant.firstName} {merchant.lastName}
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[15px] font-semibold">Gender</p>
          <p className="text-[15px]">Male</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[15px] font-semibold">Id number</p>
          <p className="text-[15px]">
            {merchant?.documents?.length > 0
              ? merchant?.documents[0]?.documentNumber
              : "N/A"}
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[15px] font-semibold">Email</p>
          <p className="text-[15px]">{merchant.email}</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[15px] font-semibold">Business name</p>
          <p className="text-[15px]">{merchant.businessName}</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[15px] font-semibold">Date</p>
          <p className="text-[15px]">{merchant.createdAt}</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[15px] font-semibold">Merchant Type</p>
          <p className="text-[15px]">{merchant.merchantType}</p>
        </div>
      </div>
      <p className="text-[15px]">More information</p>
      <div className="h-[600px] w-full bg-white border p-[10px]">
        <div className="w-full h-full">
          <table class="min-w-full bg-white border border-gray-300">
            <thead class="bg-gray-200 text-[14px]">
              <tr>
                <th class="px-4 py-2 text-left border border-gray-300 truncate">
                  Serial
                </th>
                <th class="px-4 py-2 text-left border border-gray-300 truncate">
                  Document Number
                </th>
                <th class="px-4 py-2 text-left border border-gray-300 truncate">
                  Document Name
                </th>
                <th class="px-4 py-2 text-left border border-gray-300 truncate">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="text-[14px]">
              {merchant?.documents?.length > 0 &&
                merchant.documents.map((doc, index) => (
                  <tr key={doc.documentNumber}>
                    <td class="px-4 py-3 border border-gray-300 truncate">
                      {index + 1}
                    </td>
                    <td class="px-4 py-3 border border-gray-300 truncate">
                      {doc.documentNumber}
                    </td>
                    <td class="px-4 py-3 border border-gray-300 truncate">
                      {doc.title}
                    </td>
                    <td class="px-4 py-3 border border-gray-300 truncate">
                      <a
                        href="docs/document1.pdf"
                        class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 truncate"
                        download
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customer;
