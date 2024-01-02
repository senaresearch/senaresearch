import React, { useState, useEffect, useContext } from "react";
import Modal from "../../components/Modal";
import { axiosAPI } from "../../axios";
import APIContext from "../../context/APIContext";
import { toast } from "react-toastify";

const UserServices = () => {
  const notifyError = (message) =>
    toast.error(message, {
      position: "top-left",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-left",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyWarning = (message) =>
    toast.warning(message, {
      position: "top-left",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const [services, setServices] = useState([]);
  const authToken = localStorage.getItem("authToken");
  const [file, setFile] = useState(null);
  const [removeModal, setRemoveModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [newServiceModal, setNewServiceModal] = useState(false);
  const { get_categories, categories } = useContext(APIContext);

  const services_list = async () => {
    try {
      const { data } = await axiosAPI({
        url: "/services-list/",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${authToken}`,
        },
      });
      setServices(data);
    } catch (error) {
      console.error(error);
    }
  };
  // GET SERVICES LIST ON FIRST RENDER
  useEffect(() => {
    services_list();
    get_categories();
  }, []);
  const [selectedService, setSelectedService] = useState({
    name: "",
    description: "",
    price: "",
    category: {},
    imageURL: "",
  });

  const service_delete = async () => {
    try {
      const data = await axiosAPI({
        url: `/service-delete/${selectedService.id}`,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${authToken}`,
        },
      });
      setServices(data.data);
      setRemoveModal(false);
      notifySuccess("تم حذف الخدمة بنجاح.");
    } catch (error) {
      console.error(error);
    }
  };
  const service_update = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", selectedService?.name);
    formData.append("description", selectedService?.description);
    formData.append("price", selectedService?.price);
    formData.append("category", selectedService?.category);
    file && formData.append("image", file);
    console.log(JSON.parse(selectedService?.category));
    console.log(typeof JSON.parse(selectedService?.category));
    console.log(formData);
    try {
      const { data } = await axiosAPI({
        url: `/service-update/${selectedService.id}`,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${authToken}`,
        },
        data: formData,
      });
      setEditModal(false);
      setServices(data);
      notifySuccess("تم تحديث الخدمة بنجاح.");
    } catch (error) {
      console.error(error);
    }
  };
  const service_create = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", selectedService?.name);
    formData.append("description", selectedService?.description);
    formData.append("price", selectedService?.price);
    formData.append("category", selectedService?.category.id);
    formData.append("image", file);
    try {
      const { data } = await axiosAPI({
        url: `/service-create`,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${authToken}`,
        },
        data: formData,
      });
      setNewServiceModal(false);
      setServices(data);
      notifySuccess("تمت إضافة الخدمة بنجاح.");
    } catch (error) {
      console.error(error);
    }
  };
  const Create_new_service_onclick_handler = () => {
    setSelectedService({
      name: "",
      description: "",
      price: "",
      category: {},
      imageURL: "",
    });
    setFile("");
    setNewServiceModal(true);
  };
  useEffect(() => {
    if (!editModal) {
      setFile(null);
    }
  }, [editModal]);

  return (
    <div
      className="font-[Montserrat-Arabic] mt-16 lg:p-4 mx-auto lg:w-9/12 h-fit
                    w-full"
    >
      <div className="w-11/12 lg:w-full text-right mx-auto flex flex-col overflow-x-auto ">
        <h1 className="font-extrabold text-2xl text-primary leading-5 w-full text-center mb-12">
          الخدمات المقدمة
        </h1>
        <div className="mb-4">
          <button
            onClick={Create_new_service_onclick_handler}
            className="bg-primary text-white px-4 py-2 rounded-xl"
            type="button"
          >
            أظف خدمـة جديـدة{" "}
          </button>
        </div>
        <div className="w-full overflow-auto max-h-96 ">
          <table class="borde text-right text-gray-500 min-w-full">
            <thead class="font-bold sticky top-0 text-center text-lg leading-4 text-primary bg-gray-100">
              <tr className=" table-bordered ">
                {/* <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th> */}
                <th scope="col" class="px-6 py-3">
                  العمليات
                </th>
                <th scope="col" class="px-6 py-3">
                  الحالة
                </th>
                {/* <th scope="col" class="px-6 py-3">
                                وصف الخدمة  
                            </th> */}
                <th scope="col" class="px-6 py-3">
                  االسعر
                </th>
                <th scope="col" class="px-6 py-3">
                  نوع الخدمة
                </th>
                <th scope="col" class="px-6 py-3">
                  اسم الخدمة
                </th>
                <th scope="col" class="px-6 py-3">
                  #
                </th>
              </tr>
            </thead>
            <tbody className="text-center text-base overflow-auto max-h-96">
              {services.length !== 0 &&
                services?.map((service, index) => (
                  <tr
                    key={service?.id}
                    class="bg-white transition duration-300 ease-in-out cursor-pointer border-b h-4 overflow-hidden text-clip w-full hover:bg-gray-50"
                  >
                    <td class="flex items-center px-6 py-4 justify-center">
                      <button
                        onClick={() => {
                          setRemoveModal(true);
                          setSelectedService(service);
                        }}
                        type="button"
                        class="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        حذف
                      </button>
                      {/* <span>|</span> */}
                      {/* <button onClick={()=>{setEditModal(true);setSelectedService(service)}} type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button> */}
                    </td>
                    <td class="px-6 py-4">
                      {service?.status === "Approved"
                        ? "مقبول"
                        : service?.status === "Rejected"
                        ? "مرفوض"
                        : "يتم معالجته"}
                    </td>
                    {/* <td class="px-6 py-4 w-full h-8 bg-red-300">
                                    {service?.description}
                                    </td> */}
                    <td class="px-6 py-4">{service?.price + " DA"}</td>
                    <td class="px-6 py-4">{service?.category.name}</td>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {service?.name}
                    </th>
                    <th class="whitespace-nowrap px-6 py-4 font-medium text-center">
                      {index}
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
          {services.length === 0 && (
            <p className="w-full text-gray-600 text-cente hover:border-t  py-10 flex justify-center items-center box-border transition-colors duration-300 ease-in-out cursor-pointer border-b bg-gray-50 hover:bg-gray-100">
              ليـست هنالك اي خدمات تقدمهـا لحد الان
            </p>
          )}
        </div>
      </div>

      <Modal
        trigger={removeModal}
        setTrigger={setRemoveModal}
        header={"حذف الخدمـة"}
        modalWidth={"500px"}
      >
        <p className="text-right">هل أنت متأكد من رغبتك في حذف هذه الخدمة؟</p>
        <div class="flex gap-3 flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 pt-4 mr-3 dark:border-opacity-50">
          <button
            onClick={() => setRemoveModal(false)}
            type="button"
            class="inline-block hover:bg-gray-200 rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700  duration-150 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 transition-colors ease-linear duration-400"
          >
            رجوع
          </button>
          <button
            onClick={service_delete}
            type="button"
            class="ml-1  inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            حـذف
          </button>
        </div>
      </Modal>
      <Modal
        trigger={editModal}
        setTrigger={setEditModal}
        header={" تحـــديث الخدمة"}
        modalWidth={"1000px"}
      >
        <form
          method="POST"
          enctype="multipart/form-data"
          onSubmit={service_update}
          className="flex-col gap-6 px-4 mx-auto items-center md:flex-row md:flex-wrap md:justify-center lg:grid grid-cols-12"
        >
          <input
            required
            value={selectedService?.name}
            onChange={(e) => {
              setSelectedService((prevState) => ({
                ...prevState,
                name: e.target.value,
              }));
            }}
            className="w-full lg:col-span-12 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8] "
            type="text"
            placeholder="اسم الخدمة"
          />

          <select
            required
            onChange={(e) => {
              setSelectedService((prevState) => ({
                ...prevState,
                category: e.target.value,
              }));
            }}
            name="category"
            id="category"
            className="w-full lg:col-span-6 placeholder:text-sm text-primary placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8]"
          >
            <option value="">نـوع الخدمة</option>
            <option
              selected
              value={JSON.stringify(selectedService?.category.id)}
            >
              {selectedService?.category.name}
            </option>
            {categories &&
              categories.map(
                (category) =>
                  selectedService?.category.id !== category.id && (
                    <option
                      value={JSON.stringify(category)}
                      key={category.id}
                      className=" px-6 py-7 "
                    >
                      {category?.name}
                    </option>
                  )
              )}
          </select>

          <input
            required
            value={selectedService?.price}
            onChange={(e) =>
              setSelectedService((prevState) => ({
                ...prevState,
                price: e.target.value,
              }))
            }
            className="w-full lg:col-span-6 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8]"
            type="text"
            placeholder="االسعر "
          />
          <textarea
            required
            value={selectedService?.description}
            onChange={(e) =>
              setSelectedService((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
            className="w-full lg:col-span-full placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8]"
            placeholder="وصف الخدمة"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input
            required={!selectedService?.image && true}
            onChange={(event) => {
              setSelectedService((prevState) => ({ ...prevState, image: "" }));
              setFile(event.target.files[0]);
              console.log(event.target.files[0]);
            }}
            className="col-span-full text-left placeholder:text-sm placeholder:text-primary placeholder:leading-4 px-2 py-2 rounded-lg bg-[#F1F3F8]"
            type="file"
            accept="image/*"
            placeholder="اختـر صورة "
          />
          {(selectedService?.image || file) && (
            <div className="col-span-full">
              <div className="w-full h-auto relative">
                <span
                  onClick={(e) => {
                    setSelectedService((prevState) => ({
                      ...prevState,
                      image: "",
                    }));
                    setFile(null);
                    e.target.parentElement.parentElement.parentElement.previousElementSibling.value =
                      "";
                  }}
                  className=" absolute p-1 rounded-full hover:bg-gray-300 shadow-md transition ease-in-out cursor-pointer right-1 top-1 duration-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </span>
                <img
                  className="w-full h-auto rounded-lg shadow-xl"
                  src={`${
                    selectedService?.image
                      ? process.env.REACT_APP_DOMAIN + selectedService?.image
                      : file && URL.createObjectURL(file)
                  }`}
                  alt="service"
                />
              </div>
            </div>
          )}
          <div class="flex col-span-full gap-3 flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 pt-4 mt-4 mr-1 dark:border-opacity-50">
            <button
              onClick={() => setEditModal(false)}
              type="button"
              class="inline-block hover:bg-gray-200 rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700  duration-150 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 transition-colors ease-linear duration-400"
            >
              رجوع
            </button>
            <button
              type="submit"
              class="ml-1  inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
              تحـــديث
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        trigger={newServiceModal}
        setTrigger={setNewServiceModal}
        header={"إضـافة خدمـة جديـدة"}
        modalWidth={"1000px"}
      >
        <form
          enctype="multipart/form-data"
          onSubmit={service_create}
          className="flex flex-col gap-6 px-4 mx-auto items-center md:flex-row md:flex-wrap md:justify-center lg:grid lg:grid-cols-12"
        >
          <input
            required
            value={selectedService?.name}
            onChange={(e) =>
              setSelectedService((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
            className="w-full lg:col-span-12 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8] "
            type="text"
            placeholder="اسم الخدمة"
          />
          <select
            required
            onChange={(e) => {
              setSelectedService((prevState) => ({
                ...prevState,
                category: { ...prevState?.category, id: e.target.value },
              }));
              console.log(selectedService);
            }}
            name="category"
            id="category"
            className="w-full lg:col-span-6 placeholder:text-sm text-primary placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8]"
          >
            <option value="" disabled selected>
              نـوع الخدمة
            </option>
            {categories &&
              categories.map((category) => (
                <option
                  value={category?.id}
                  key={category.id}
                  className=" px-6 py-7 "
                >
                  {category?.name}
                </option>
              ))}
          </select>
          <input
            required
            value={selectedService?.price}
            onChange={(e) =>
              setSelectedService((prevState) => ({
                ...prevState,
                price: e.target.value,
              }))
            }
            className="w-full lg:col-span-6 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8]"
            type="number"
            placeholder="االسعر "
          />
          <textarea
            required
            value={selectedService?.description}
            onChange={(e) =>
              setSelectedService((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
            className="w-full lg:col-span-full placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8]"
            placeholder="وصف الخدمة"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input
            required
            onChange={(event) => setFile(event.target.files[0])}
            className="col-span-full w-full text-left placeholder:text-sm placeholder:text-primary placeholder:leading-4 px-2 py-2 rounded-lg bg-[#F1F3F8]"
            type="file"
            accept="image/*"
            placeholder="اختـر صورة "
          />
          {file && (
            <div className="col-span-full">
              <div className="w-full h-auto relative">
                <span
                  onClick={(e) => {
                    setSelectedService((prevState) => ({
                      ...prevState,
                      image: "",
                    }));
                    setFile(null);
                    e.target.parentElement.parentElement.parentElement.previousElementSibling.value =
                      "";
                  }}
                  className=" absolute p-1 rounded-full hover:bg-gray-300 shadow-md transition ease-in-out cursor-pointer right-1 top-1 duration-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </span>
                <img
                  className="w-full h-auto rounded-lg shadow-xl"
                  src={URL.createObjectURL(file)}
                  alt="service"
                />
              </div>
            </div>
          )}
          <div class="flex col-span-full gap-3 flex-shrink-0 flex-wrap items-center justify-between w-full rounded-b-md border-t-2 border-neutral-100 border-opacity-100 pt-4 mt-4 mr-1 dark:border-opacity-50">
            <button
              onClick={() => {
                setNewServiceModal(false);
              }}
              type="button"
              class="inline-block hover:bg-gray-200 rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700  duration-150 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 transition-colors ease-linear duration-400"
            >
              رجوع
            </button>
            <button
              type="submit"
              class="ml-1  inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
              إضـافة خدمـة{" "}
            </button>
          </div>
        </form>
      </Modal>
    </div>
    // </div>
  );
};

export default UserServices;
