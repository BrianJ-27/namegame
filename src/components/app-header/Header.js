
const Header = ({ showMenu }) => {
    return (
      <div style={{ marginLeft:"20px" }}>
        <svg onClick={showMenu} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" fill="white" d="M16 7H3.8L9.4 1.4L8 0L0 8L8 16L9.4 14.6L3.8 9H16V7Z" />
        </svg>
        <h2>Practice Mode</h2>
      </div> 
    )
}

export default Header;