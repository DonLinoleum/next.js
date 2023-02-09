import Link from "next/link"
const Index = () => {
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
            <h1>Главная</h1>
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

export default Index