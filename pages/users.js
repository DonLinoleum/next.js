import {useEffect, useState} from 'react'
import Link from "next/link"
import MainContainer from '../components/MainContainer'

const Users = ({users}) => {
    return (
        <MainContainer>
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
        </MainContainer>
    )
}

export default Users

export async function getStaticProps(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    return {
      props: {users}
    }
  }