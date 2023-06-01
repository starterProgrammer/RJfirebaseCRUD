import { Link } from 'react-router-dom';



export const Nav = () => {
    return (
        <div style={{display:'flex' , justifyContent:'space-between' , alignItems:'center'}}>
            <Link to='/'>Home</Link>
            <Link to='login'>Login</Link>
            <Link to='movie'>Movies List </Link>
            <Link to='upload'>upload image </Link>
        </div>
    )
}

