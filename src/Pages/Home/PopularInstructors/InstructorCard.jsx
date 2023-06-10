
const InstructorCard = ({ instructor }) => {
    const { name,  email, image } = instructor;
    return (
        <div className="card w-full bg-base-100 shadow-sm rounded-none">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions border rounded">
                    <p className="px-1">{email}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;