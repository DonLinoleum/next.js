import Head from "next/head"
import A from "./A"

const MainContainer = ({children,keywords}) => {
    return(
        <>
        <Head>
            <meta keywords={"хуй с маслом" + keywords}></meta>
            <title>Хуй с маслом</title>
        </Head>
           <div className="navbar">
                <A text="Главная"  href="/" />
                <A text="Пользователи"  href="/users" />    
            </div>
            <div>
                {children}
            </div>
            <style>
                {`.navbar{background: orange;padding:15px;}`}
            </style>
        </>
    )
}

export default MainContainer