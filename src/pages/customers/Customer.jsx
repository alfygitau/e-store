import React from "react";
import { useParams } from "react-router-dom";
import { customers } from "../../static/customers";

const Customer = () => {
  const { id } = useParams();

  const merchant = customers.find((customer) => customer.id === id);

  return (
    <div className="p-[20px] w-full h-full overflow-y-auto">
      <p className="text-[18px] font-bold mb-[20px]">
        {merchant.fullName} - {merchant.role}
      </p>
      <p className="text-[15px]">Basic information</p>
      <div className="bg-white border h-[250px] mb-[20px] w-full flex flex-col justify-between p-[10px]">
        <div className="flex items-center gap-[10px]">
          <p className="text-[15px] font-semibold">Full Name</p>
          <p className="text-[15px]">{merchant.fullName}</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[15px] font-semibold">Gender</p>
          <p className="text-[15px]">Male</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[15px] font-semibold">Id number</p>
          <p className="text-[15px]">345000888</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[15px] font-semibold">Email</p>
          <p className="text-[15px]">{merchant.email}</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[15px] font-semibold">Phone number</p>
          <p className="text-[15px]">{merchant.phoneNumber}</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[15px] font-semibold">Date</p>
          <p className="text-[15px]">{merchant.date}</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-[15px] font-semibold">County</p>
          <p className="text-[15px]">Busia</p>
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
                  Document Name
                </th>
                <th class="px-4 py-2 text-left border border-gray-300 truncate">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="text-[14px]">
              <tr>
                <td class="px-4 py-3 border border-gray-300 truncate">1</td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  Certificate of business registration
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
              <tr>
                <td class="px-4 py-3 border border-gray-300 truncate">2</td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  Kephis certificate
                </td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  <a
                    href="docs/document2.pdf"
                    class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 truncate"
                    download
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 border border-gray-300 truncate">3</td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  Agro-business registration certificate
                </td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  <a
                    href="docs/document3.pdf"
                    class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 truncate"
                    download
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 border border-gray-300 truncate">4</td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  Identification document
                </td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  <a
                    href="docs/document4.pdf"
                    class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 truncate"
                    download
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 border border-gray-300 truncate">5</td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  Driving license
                </td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  <a
                    href="docs/document5.pdf"
                    class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 truncate"
                    download
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 border border-gray-300 truncate">6</td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  Vehicle registration certificate
                </td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  <a
                    href="docs/document5.pdf"
                    class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 truncate"
                    download
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 border border-gray-300 truncate">7</td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  Image of your vehicle
                </td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  <a
                    href="docs/document5.pdf"
                    class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 truncate"
                    download
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 border border-gray-300 truncate">8</td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  Education certificate (for service providers)
                </td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  <a
                    href="docs/document5.pdf"
                    class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 truncate"
                    download
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 border border-gray-300 truncate">9</td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  KEBs registration certificate
                </td>
                <td class="px-4 py-3 border border-gray-300 truncate">
                  <a
                    href="docs/document5.pdf"
                    class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 truncate"
                    download
                  >
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customer;
