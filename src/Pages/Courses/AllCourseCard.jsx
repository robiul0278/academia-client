import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const AllCourseCard = ({ course }) => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [cart , refetch] = useCart();
    const { courseName, instructor, price, image, availableSeats, _id } = course;
    console.log(cart)

    const handleAddToCart = item => {
        console.log(item);
        if(user && user.email){
            const cartItem = {courseId: _id, courseName, image, price, instructor,  email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the Course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <>
            <div className="card w-full bg-base-100 shadow-sm">
                <figure className="px-10 pt-10"><img src={image} alt="course image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {courseName}
                    </h2>
                    <p>Instructor : {instructor}</p>


                    <div className="card-actions justify-end">
                        <button className="border btn-wid btn-sm">Price : ${price}</button>

                        <button className="border btn-wid btn-sm">Available seats: : {availableSeats}</button>
                    </div>
                        <button onClick={() => handleAddToCart(course)} className="btn btn-accent">Add to Cart</button>
                </div>
            </div>
        </>
    );
};

export default AllCourseCard;