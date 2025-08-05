import { useState } from "react";
const ViewUsers = () => {
    const [Users] = useState([
        {
            id: 101,
            firstName: "Jayaprakash",
            lastName: "CP",
            email: "Jayaprakash1964@gmail.com",
            password: "nbxvnhf",
            age: 60,
            phnum: 9754874756,
            address: "kjhsadjfyweg,sudchuqwtfd,isdfuugd",
            skills: ['Java', 'React'],
            gender: 'Male',
        },
        {
            id: 102,
            firstName: "Jesna",
            lastName: "JP",
            email: "JesnaJayaprakash1994@gmail.com",
            password: "kcnxjc",
            age: 30,
            phnum: 9984760987,
            address: "idyfye,duhy,sdldiuuhy,iludh",
            skills: ['Java', 'React', 'MySqL'],
            gender: 'Female',
        }
    ]);

    return (
        <>
            <div className="box">
                <div>Users List :</div>
                {Users.map((User) => (
                    <div key={User.id}>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th scope="row">{User.id}</th>
                                    <td>{User.firstName}</td>
                                    <td>{User.lastName}</td>
                                    <td>{User.email}</td>
                                    <td>{User.password}</td>
                                    <td>{User.age}</td>
                                    <td>{User.phnum}</td>
                                    <td>{User.address}</td>
                                    <td>{User.skills}</td>
                                    <td>{User.gender}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                ))}


            </div >







        </>
    )
}
export default ViewUsers;