import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

interface Props {
    children: Array<React.ReactChildren>,
    location: {pathname: string},
}

const ScrollToTop = ({ children, location: { pathname } }: Props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children;
};

// export default withRouter(ScrollToTop);
export default ScrollToTop
