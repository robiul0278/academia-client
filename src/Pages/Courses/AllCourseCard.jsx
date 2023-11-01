import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const AllCourseCard = ({ course }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [cart, refetch] = useCart();
    const { courseName, price, image, _id, title } = course;
    console.log(cart)

    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { courseId: _id, courseName, image, price, email: user.email }
            fetch('https://summer-camp-server-seven-pink.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
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
        else {
            Swal.fire({
                title: 'Please login to order the Course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <>
            <div className="card card-compact w-full border rounded-md hover:border-green-600 transition duration-300 ease-in-out">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{courseName}</h2>
                    <p className="font-semibold font-sans">{title}</p>
                    <div className="card-actions justify-start">
                        <p className="font-bold text-green-600">৳ {price}</p>
                        <span onClick={() => handleAddToCart(course)} className=" hover:text-green-600 transition duration-300 text-md ease-in-out"><FontAwesomeIcon icon={faCartPlus} /></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllCourseCard;
