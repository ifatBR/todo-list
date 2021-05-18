// import { NavLink, withRouter } from 'react-router-dom';
import './AppHeader.scss';
// const _AppHeader = (props) => {
export function AppHeader(){
    return (
        <header className="flex justify-start align-center app-header">
            <img src={require("../../assets/img/logo.png").default} alt="logo" className="logo"/>
            <h2>
                DO
            </h2>
            <div>
                {/* <NavLink exact to="/" className="nav-link home" activeClassName="active-nav" title="Home">
                </NavLink>
                <NavLink to="/contact" className="nav-link contact" activeClassName="active-nav" title="Contacts">
                </NavLink>
                <NavLink to="/statistic" className="nav-link statistic" activeClassName="active-nav" title="Statistics">
                </NavLink> */}
            </div>
        </header>
    );
};

// export const AppHeader = withRouter(_AppHeader);
