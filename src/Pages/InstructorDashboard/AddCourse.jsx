import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const image_token=import.meta.env.VITE_Image_Token;

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
                    const { courseName, instructor, price, availableSeats,status } = data;
                    const newItem = { courseName, instructor, price: parseFloat(price), availableSeats,status, image: imgURL }
                    console.log(newItem)
                        fetch('http://localhost:5000/courses', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
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
        <div className="w-full px-10">
            <h1 className='text-5xl font-bold text-center mb-16'>Add a Course</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex mb-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Course Name</span>
                        </label>
                        <div className="form-control w-full ">
                        <select defaultValue="Select One" {...register("courseName")} className="select select-bordered">
                            <option disabled>Select One</option>
                            <option>Mathematics</option>
                            <option>Physics</option>
                            <option>Biology</option>
                            <option>Chemistry</option>
                            <option>Bangla</option>
                            <option>History</option>
                            <option>ICT</option>
                            <option>Art</option>
                            <option>Economics</option>
                            <option>Sociology</option>
                            <option>Philosophy</option>
                        </select>
                    </div>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input
                            defaultValue={user?.displayName}
                            readOnly
                            type="text"
                            className="input input-success input-bordered w-full "
                            {...register("instructor")}
                        />
                    </div>
                </div>
                <div className='flex mb-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Available seats</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Available seats"
                            className="input input-success input-bordered w-full "
                            {...register("availableSeats")}
                        />
                    </div>
                    <div className="form-control ml-4 w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor email</span>
                        </label>
                        <input
                            defaultValue={user?.email}
                            readOnly
                            type="text"
                            className="input input-success input-bordered w-full "
                            {...register("email")}
                        />
                    </div>
                </div>
                <div className='flex'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Course Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder='Course Price'
                            className="input input-success input-bordered w-full "
                            {...register("price")}
                        />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Course Status</span>
                        </label>
                        <select defaultValue="Status" {...register("status", { required: true })} className="select input-success select-bordered">
                            <option disabled>Select</option>
                            <option>pending</option>
                        </select>
                    </div>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input className="btn btn-accent mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddCourse;