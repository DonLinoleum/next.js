import {useState} from 'react'
import Link from "next/link"
const Users = () => {
    const [users,setUsers] = useState([
        {id:1,name:"Хуй1"},
        {id:2,name:"Хуй2"}
    ])
    return (
        <div>
        <div className="navbar">
        <Link className="link" href="/">
            Главная
        </Link>
        <Link className="link" href="/users">
         Пользователи
        </Link> 
    </div>
        <div>
            <h1>Юзерсы!</h1>
            <ul>
                {users.map(el=>
                <li key={el.id}>
                    <Link href={`/users/${el.id}`}>{el.name}</Link>
                </li>
                )}
            </ul>
        </div>
        <style>
                {`.navbar{background: orange;padding:15px;}
                .link{
                    text-decoration: none;
                    color:white;
                    font-size:20px;
                    margin:10px;
                }
                `}
            </style>
        </div>  
    )
}

export default Users