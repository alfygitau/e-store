import React, { useRef, useState } from "react";
import { Select, Space } from "antd";
import { Link } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../storage/firebase";

const Aggregator = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [county, setCounty] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [gender, setGender] = useState("");
  const fileInputRef = useRef(null);
  const registrationFileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleClickRegistration = () => {
    if (registrationFileInputRef.current) {
      registrationFileInputRef.current.click();
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
            console.log(downloadURL);
          });
        }
      );
    }
  };
  const handleFileChangeRegistration = (event) => {
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
            console.log(downloadURL);
          });
        }
      );
    }
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const options = [
    {
      label: "Sorgum",
      value: "sorgum",
      desc: "Sorgum",
    },
    {
      label: "Millet",
      value: "millet",
      desc: "Millet",
    },
    {
      label: "Maize",
      value: "maize",
      desc: "Maize",
    },
    {
      label: "Soya",
      value: "Soya",
      desc: "Soya",
    },
  ];
  return (
    <div className="p-[20px] w-full h-full overflow-y-auto">
      <p className="text-[16px] font-bold my-[10px]">Aggregator profile</p>
      <div className="flex w-full justify-between">
        <div className="flex w-[45%] flex flex-col">
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
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
              onChange={(e) => setCounty(e.target.value)}
              placeholder="Enter your phone number"
              class="h-[50px] w-full text-[14px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            >
              <option value="">Select your county</option>
              <option value="busia">Busia</option>
              <option value="siaya">Siaya</option>
            </select>
          </div>
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="phone">Value chains</label>
            <Select
              mode="multiple"
              style={{ width: "100%", height: "50px", borderRadius: "0px" }}
              placeholder="select one country"
              onChange={handleChange}
              options={options}
              optionRender={(option) => <Space>{option.data.desc}</Space>}
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
        </div>
        <div className="flex w-[45%] flex flex-col">
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">Upload your identification card</label>
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
              <p>Click here to upload your id</p>
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
          <div className="flex flex-col w-full mb-[20px]">
            <label htmlFor="name">
              Upload your business registration certificate
            </label>
            <div
              onClick={handleClickRegistration}
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
              <p>Click here to upload a registration certificate</p>
              <p className="text-[14px] italic text-[#9CA3AF]">
                png, jpeg, webp, and jpg images will be accepted
              </p>
              <input
                type="file"
                ref={registrationFileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChangeRegistration}
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
        <button className="h-[45px] text-white bg-[#12B981] px-[30px]">
          Create Profile
        </button>
      </div>
    </div>
  );
};

export default Aggregator;
