import './Header.css';

const Header = (props) => {
    // JS:
    let appTitle = props.title;

  return (
    <header className="appBar">
      <h2 className='heading'> { appTitle } </h2>
    </header>
  );
}

export default Header;
