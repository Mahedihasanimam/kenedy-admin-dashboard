import { message } from 'antd';
import React, { useRef, useState } from 'react';

const EditContent = () => {
  
    const [blogTitle, setblogiTitle] = useState('Our rooms are incredible');
    const [blogdecription, setblogDecription] = useState('Surrounded by nature, this cozy cabin provides a peaceful retreat with a rustic charm. A warm fireplace and a king-sized bed make this room perfect for a quiet, comfortable stay away from the hustle of the city.');
    const [blogImage, setBlogImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleSubmit3 = (e) => {
        e.preventDefault();
        // Here, you would typically handle the submission,
        // e.g., sending the data to your server or saving it locally.
        console.log({
            blogTitle,
            blogdecription,
           
        });
        message.success('Blotg Content saved successfully!');
    };
  

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setBlogImage(file);
        }
    };
    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            setBlogImage(file);
        }
    };
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const handleDivClick = () => {
        fileInputRef.current.click();
    };
    return (
        <div className=' p-5 rounded-lg min-h-screen bg-primary '>
            
        <div className="bg-white p-8 rounded-lg ">
        <div className=''>
                <h1 className='text-2xl font-bold mb-5'>Edit/Add Banner Content</h1>
                <form onSubmit={handleSubmit3} className='space-y-4'>
                    <div>
                        <label className='block text-lg'>Banner Title</label>
                        <input
                            type='text'
                            defaultValue={blogTitle}
                            onChange={(e) => setblogiTitle(e.target.value)}
                            className='w-full p-2 bg-[#38383817] text-black font-medium opacity-70 rounded'
                            placeholder='Enter about hero title'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>Banner Description</label>
                        <textarea
                            defaultValue={blogdecription}
                            onChange={(e) => setblogDecription(e.target.value)}
                            className='w-full p-2 bg-[#38383817] text-black font-medium opacity-70 rounded'
                            placeholder='Enter about hero description'
                            rows='3'
                        />
                    </div>
                    <div>
                    <label className='block text-lg'>Banner Image</label>
                    <div
                        className='w-full p-6 bg-[#38383817] text-black opacity-70 rounded border-2 border-dashed border-gray-500 flex justify-center items-center cursor-pointer'
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onClick={handleDivClick}
                    >
                        {blogImage ? (
                            <p>{blogImage.name}</p>
                        ) : (
                            <p>Drag & drop an image here or click to upload</p>
                        )}
                        <input
                            type='file'
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            className='hidden'
                            name='image'
                            accept='image/*'
                        />
                    </div>
                </div>
                 
                    <button
                        type='submit'
                        className='px-4 py-2 bg-[#FF0048] text-white font-semibold'
                        

                    >
                        Save Changes
                    </button>
                </form>
        </div>
        </div>
        </div>
    );
};

export default EditContent;
