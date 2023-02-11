import { isResSent } from "next/dist/shared/lib/utils"
import { useRouter } from "next/router"
import styles from "../../styles/user.module.scss"
import MainContainer from "../../components/MainContainer"


export default function User ({user}) {
    const {query} = useRouter()
   
    return (
        <MainContainer>
        <div className={styles.user}>
            <h1>Пользователь c id {query.id}</h1>
            <h2>Имя пользователя - {user.name}</h2>
        </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/"+params.id)
    const user = await response.json()
    return {
      props: {user}
    }
  }