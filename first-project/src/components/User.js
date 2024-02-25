import PropTypes from "prop-types";




function User(props){

const users = [
    {
        name: "yusuf",
        surname: "damar",
        age: 21,
        job: "react.js",
        cars: ["volvo","tesla"]
    },
    {
        name: "kerem",
        surname: "damar",
        age: 21,
        job: "react.js",
        cars: ["tofaş","volvo"]
    }
]
return (
    <div className="px-24">
        
        { users.map(user  => 
        <div className="mb-20 items-center flex flex-col mt-10 border rounded-lg border-black p-4 bg-smoke">
            <h2 className="ml-10 capitalize">Kullanıcı: {user.name} {user.surname}</h2>
            <h2 className="ml-10">Meslek: {user.job}</h2>
            <h2 className="ml-10">Yaş: {user.age}</h2>
            <h1 className="ml-10 mt-4 text-2xl">ARAÇLAR</h1>
            <ul>
            { user.cars.map((car) => (
                <li> - {car}</li>
            ))}
            </ul>
        </div>
        )}
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
