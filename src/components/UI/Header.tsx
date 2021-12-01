import PropTypes from 'prop-types';
import { FunctionComponent } from 'react'; 

import { PageData } from "../../models/pages";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

interface Props {
    pageData? : PageData;
    timeout?: any;
    onOpenArticle? : any;
}


const Header: FunctionComponent<Props> = ({ pageData, timeout}) => (
    <header id="header" style={timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-diamond"></span>*/}
        </div>
        <div className="content">
            <div className="inner">
                <h1>{pageData?.name}</h1>
                <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
                for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li>Intro</li>
                <li>Work</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
)

export default Header
