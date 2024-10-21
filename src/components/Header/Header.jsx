import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
    header<h1 className='text-4xl font-bold'>Knowledge Cafe </h1>
    header<img src={profile} alt="" />
        </header>
    );
};

export default Header;