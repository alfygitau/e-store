import React, { useEffect, useRef, useState } from "react";
import { Select, Space } from "antd";
import { Link } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../storage/firebase";
import { toast } from "react-toastify";

const Mechanization = () => {
  const fileInputRef = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [county, setCounty] = useState("");
  const [subcounty, setSubCounty] = useState("");
  const [ward, setWard] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [idUrl, setIdUrl] = useState("");
  const [price, setPrice] = useState("");

  const [counties, setCounties] = useState([]);
  const [subcounties, setSubCounties] = useState([]);
  const [wards, setWards] = useState([]);
  const [roles, setRoles] = useState([]);

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
            setIdUrl(downloadURL);
          });
        }
      );
    }
  };

  const handleChange = (selectedValues) => {
    if (Array.isArray(selectedValues)) {
      setRolesId(selectedValues);
    } else if (typeof selectedValues === "string") {
      setRolesId(selectedValues.split(","));
    } else {
      setRolesId([selectedValues]);
    }
  };

  const handleCountyChange = (value) => {
    setCounty(value);
    let filteredCounty = counties.find(
      (county) => county.county_id === Number(value)
    );
    setSubCounties(filteredCounty.subcounties);
  };

  const handleSubCountyChange = (value) => {
    setSubCounty(value);
    let filteredSubCounty = subcounties.find(
      (subcounty) => subcounty.sub_county_id === Number(value)
    );
    setWards(filteredSubCounty.wards);
  };

  const getAllRoles = async () => {
    try {
      const response = await getRoles();
      if (response.status === 200) {
        const mappedRoles = response.data.message.map((role) => ({
          label: role.title,
          value: role.roleId,
          desc: role.title,
        }));
        setRoles(mappedRoles);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const getAllCounties = async () => {
    try {
      const response = await getCounties();
      if (response.status === 200 || response.status === 400) {
        setCounties(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getAllRoles();
    getAllCounties();
  }, []);

  const createMerchant = async () => {
    let payload = {
      wardId: ward,
      subscriptionStatus: "ACTIVE",
      subscriptionEndDate: "2030-06-15",
      businessName: businessName,
      merchantType: "INPUT_DISTRIBUTOR",
      firstName: firstName,
      lastName: lastName,
      email: email,
      msisdn: phone,
      username: phone,
      roles: rolesId,
      documents: [
        {
          title: "Id Number",
          imageUrl: idUrl,
          documentNumber: idNumber,
        },
      ],
    };
    try {
      const response = await addMerchant(payload);
      if (response.status === 201 || response.status === 200) {
        toast.success("Merchant added successfully");
        navigate("/dashboard/customers");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message);
    }
  };
  return (
    <div className="p-[20px] w-full h-full overflow-y-auto">
      <p className="text-[16px] font-bold my-[10px]">Mechanization profile</p>
      <div className="flex w-full justify-between sm:flex-col sm:w-[95%] sm:mx-auto">
        <div className="flex w-[45%] flex flex-col">
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="phone">Phone number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="phone">County</label>
            <select
              type="text"
              value={county}
              onChange={(e) => handleCountyChange(e.target.value)}
              placeholder="Enter your phone number"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            >
              <option value="">Select your county</option>
              {counties.length > 0 &&
                counties.map((county) => (
                  <option key={county.county_id} value={county.county_id}>
                    {county.county_title}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="phone">Sub County</label>
            <select
              type="text"
              value={subcounty}
              onChange={(e) => handleSubCountyChange(e.target.value)}
              placeholder="Enter your phone number"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            >
              <option value="">Select your subcounty</option>
              {subcounties?.map((subcounty) => (
                <option
                  key={subcounty?.sub_county_id}
                  value={subcounty?.sub_county_id}
                >
                  {subcounty?.sub_county_title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="phone">Ward</label>
            <select
              type="text"
              value={ward}
              onChange={(e) => setWard(e.target.value)}
              placeholder="Enter your phone number"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            >
              <option value="">Select your ward</option>
              {wards?.map((ward) => (
                <option key={ward.ward_id} value={ward.ward_id}>
                  {ward.ward_title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="vehicle-number">Select merchant role</label>
            <Select
              mode="multiple"
              style={{ width: "100%", height: "50px", borderRadius: "0px" }}
              placeholder="select your role"
              onChange={handleChange}
              options={roles}
              optionRender={(option) => <Space>{option.data.desc}</Space>}
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="license">Price per acre</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter your price per service session"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
        </div>
        <div className="flex w-[45%] flex flex-col">
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="license">Business name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Enter your business name"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="phone">Id number</label>
            <input
              type="text"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              placeholder="Enter your Id number"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">
              Upload an image of your Identification card
            </label>
            <div
              onClick={handleClick}
              className="w-full cursor-pointer p-[20px] h-[160px] border-2 border-dashed flex flex-col justify-center items-center gap-[10px]"
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
              <p>Click here to upload your Identification card</p>
              <p className="text-[14px] italic text-[#9CA3AF]">
                png, jpeg, webp, and jpg images will be accepted
              </p>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept=".png,.jpeg,.webp,.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-[20px] w-full flex items-center gap-[10px]">
        <input type="checkbox" name="terms" id="terms" />
        <span>
          I agree to the{" "}
          <Link className="text-[#0000FF] underline" to="/terms">
            Terms and conditions
          </Link>
        </span>
      </div>
      <div className="flex justify-end">
        <button
          onClick={createMerchant}
          className="h-[45px] text-white bg-[#12B981] px-[30px]"
        >
          Create Profile
        </button>
      </div>
    </div>
  );
};

export default Mechanization;
