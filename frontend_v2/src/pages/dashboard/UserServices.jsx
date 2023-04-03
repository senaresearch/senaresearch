import React, { useState } from 'react'
import Modal from '../../components/Modal'

const UserServices = () => {
    const [removeModal, setRemoveModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
  return (
    <div className='font-[Montserrat-Arabic] mt-16 lg:p-4 mx-auto lg:w-9/12 h-fit
                    w-full'>
        <div className='w-11/12 lg:w-full text-right mx-auto flex flex-col overflow-x-auto '>
            <h1 className='font-extrabold text-2xl text-primary leading-5 w-full text-center mb-12'>الخدمات المقدمة</h1>
            <div className='w-full overflow-auto max-h-96 bg-orange-200'>
                <table class="borde text-right text-gray-500 min-w-full">
                    <thead class="font-bold sticky top-0 text-center text-lg leading-4 text-primary bg-gray-100">
                        <tr className=' table-bordered '>
                            {/* <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th> */}
                            <th scope="col" class="px-6 py-3">
                                العمليات  
                            </th>
                            <th scope="col" class="px-6 py-3">
                                الحالة  
                            </th>
                            <th scope="col" class="px-6 py-3">
                                وصف الخدمة  
                            </th>
                            <th scope="col" class="px-6 py-3">
                                االسعر  
                            </th>
                            <th scope="col" class="px-6 py-3">
                            نوع الخدمة     
                            </th>
                            <th scope="col" class="px-6 py-3">
                                اسم الخدمة
                            </th>
                            <th scope="col" class="px-6 py-3">#</th>
                        </tr>
                    </thead>
                    <tbody className='text-right text-base overflow-auto h-96 bg-green-200'>
                        
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button onClick={()=>setRemoveModal(true)} data-te-toggle="modal"
                                    data-te-target="#exampleModalCenter"
                                    data-te-ripple-init
                                    data-te-ripple-color="light" type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">
                                    حذف
                                </button>
                                <span>|</span>
                                <button onClick={()=>setEditModal(true)} type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">1</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">2</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">3</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">4</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">1</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">2</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">3</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">4</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">4</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">1</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">2</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">3</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">4</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">4</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">1</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">2</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">3</td>
                        </tr>
                        <tr class="bg-white transition duration-300 ease-in-out cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="flex items-center px-6 py-4 space-x-3">
                                <button type='button' class="font-medium text-red-600 dark:text-red-500 hover:underline">حذف</button>
                                <span>|</span>
                                <button type='button' class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> تعديل</button>
                            </td>
                            <td class="px-6 py-4">
                                مقبول
                            </td>
                            <td class="px-6 py-4">
                            Long description
                            </td>
                            <td class="px-6 py-4">
                                3200DA
                            </td>
                            <td class="px-6 py-4">
                            تدقيق لغوي
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                الترجمة من اللغة الفرنسية الى العربية
                            </th>
                            <td class="whitespace-nowrap px-6 py-4 font-medium text-center">4</td>
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
       
        <Modal trigger={removeModal} setTrigger={setRemoveModal} mainAction={"حـذف"} back={'رجوع'} body={"This is a vertically centered modal Content."} header={'حذف الخدمـة'} modalWidth={'500px'}/>
        <Modal trigger={editModal} setTrigger={setEditModal} mainAction={"تحـــديث"} back={'رجوع'}  header={' تحـــديث الخدمة'}modalWidth={'1000px'}>
            <form className=' bg-gray-30 
                            flex flex-col gap-6 px-4 mx-auto items-center
                            md:flex-row md:flex-wrap md:justify-center
                            lg:grid grid-cols-12' action="">
                <input className='w-full lg:col-span-12 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8] ' type="text" placeholder='اسم الخدمة' />
                <input className='w-full lg:col-span-6 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8] ' type="text" placeholder='نوع الخدمة' />
                <input className='w-full lg:col-span-6 placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8]' type="text" placeholder='االسعر ' />
                <textarea className='w-full lg:col-span-full placeholder:text-sm placeholder:text-primary placeholder:leading-4 text-right px-2 py-2 rounded-lg bg-[#F1F3F8]' placeholder='وصف الخدمة' name="" id="" cols="30" rows="10"></textarea>
            </form>
        </Modal>
    </div>
    // </div>
  )
}

export default UserServices