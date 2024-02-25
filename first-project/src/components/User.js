import PropTypes from "prop-types";

function User(props){
return (
    <div className="px-24">
        <div className="mb-20 items-center flex flex-col mt-10 border rounded-lg border-black p-4 bg-smoke">
            <h2 className="ml-10 capitalize">Kullanıcı: {props.name} {props.surname}</h2>
            <h2 className="ml-10">Meslek: {props.job}</h2>
            <h2 className="ml-10">Yaş: {props.age}</h2>
            <h1 className="ml-10 mt-4 text-2xl">ARAÇLAR</h1>
            <ul>
            { props.cars.map((car) => (
                <li> - {car}</li>
            ))}
            </ul>
        </div>
    </div>
)};

User.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    job: PropTypes.string,
    age: PropTypes.number,
    car: PropTypes.array,
}


export default User;
