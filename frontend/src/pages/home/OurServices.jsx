import React, { useEffect, useState } from "react";
import Service from "../../components/Service";

import { axiosAPI } from "../../axios";

const OurServices = () => {
  const [categories, setCategories] = useState([]);
  const get_categories = async () => {
    try {
      const { data } = await axiosAPI({
        url: `/categories`,
        method: "GET",
        header: {
          "Content-Type": "application/json",
          //   "Access-Control-Request" : true
        },
      });
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get_categories();
  }, []);
  useEffect(() => {
    // console.log('categories');
    console.log(categories);
  }, [categories]);
  return (
    <div id="ourServices" className="pb-16 pt-10 ">
      <div className="text-center mb-16 sm:mb-24">
        <h1 className="text-primary font-semibold text-[25px] sm:text-[50px] leading-[30.47px] sm:leading-[60.95px] ">
          خدماتـنــا
        </h1>
        {/* TEXT HEAD ANIMATION */}
        <div className="hidden"></div>
      </div>
      {/* SERVICES */}
      <div
        id="servicesList"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 gap-12 gap-y-24 w-4/6 md:w-5/6 mx-auto"
      >
        {Array.isArray(categories) &&
          categories.length > 0 &&
          categories.map((category) => (
            <Service key={category?.id} category={category} />
          ))}
        {/* <Service serviceName={'دورات تعـــليميــــة'} redirectTo={''} servicePicture={service2Pic} serviceDescription={'.موسبيإ ميرول صن نم خسن ىلع اًضيأ توح يتلاو ركيام جياب سودلأ لثم ينورتكلإلا رشنلا جمارب روهظ عم اَرخؤم ىرخأ ةرم رشتنيل داعو ،صنلا اذه'}  />
        <Service serviceName={'تدقــيق لغوي'} redirectTo={''} servicePicture={service3Pic} serviceDescription={'.موسبيإ ميرول صن نم خسن ىلع اًضيأ توح يتلاو ركيام جياب سودلأ لثم ينورتكلإلا رشنلا جمارب روهظ عم اَرخؤم ىرخأ ةرم رشتنيل داعو ،صنلا اذه'}  />
        <Service serviceName={'دروس دعم'} redirectTo={''} servicePicture={service4Pic} serviceDescription={'.موسبيإ ميرول صن نم خسن ىلع اًضيأ توح يتلاو ركيام جياب سودلأ لثم ينورتكلإلا رشنلا جمارب روهظ عم اَرخؤم ىرخأ ةرم رشتنيل داعو ،صنلا اذه'}  /> */}
      </div>
    </div>
  );
};

export default OurServices;
