import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const image_token = import.meta.env.VITE_Image_Token;

const AddCourse = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_token}`


    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    console.log('first imgURL', imgURL)
                    const { courseName, price, title } = data;
                    const newItem = { courseName, instructor: user?.displayName, price: parseFloat(price), title, status: "Pending", enrolled: 0, image: imgURL, email: user?.email }
                    console.log(newItem)
                    fetch('https://summer-camp-server-seven-pink.vercel.app/courses', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
                        },
                        body: JSON.stringify(newItem)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Course Added successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                }
            })
    }
    return (
        <div className="w-full p-5">
            <h1 className='text-5xl font-bold text-center mb-16'>Add a Course</h1>

            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Course Name</span>
                        </label>
                        <div className="form-control w-full ">
                            <select defaultValue="Select One" {...register("courseName")} required className="select select-bordered">
                                <option disabled selected>Select One - </option>
                                <option>Art</option>
                                <option>Mathematics</option>
                                <option>Higher Math</option>
                                <option>Physics</option>
                                <option>Biology</option>
                                <option>Chemistry</option>
                                <option>Bangla</option>
                                <option>English</option>
                                <option>ICT</option>
                                <option>Economics</option>
                                <option>Sociology</option>
                                <option>Philosophy</option>
                                <option>Social</option>
                                <option>Geography</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex mb-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Course Title</span>
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="title"
                                className="input input-success input-bordered w-full "
                                {...register("title")}
                            />
                        </div>

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Course Price</span>
                        </label>
                        <input
                            type="number"
                            required 
                            placeholder='৳ ****'
                            className="input input-success input-bordered w-full "
                            {...register("price")}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Course Image</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} required/>
                    </div>
                </div>

                <input className="btn w-full btn-sm btn-error mt-4" type="submit" value="Publish New Course" />
            </form>
        </div>

    );
};

export default AddCourse;