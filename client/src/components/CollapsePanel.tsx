import React from 'react';
import Collapse, { CollapseProps } from '@material-ui/core/Collapse';

interface Props {
    expanded: boolean,
    children: Array<React.ReactChildren>,
}

// TODO: fix the warning about children
const SimpleCollapse = ({ expanded, children }: Props) => <aside>
        <>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </>
    </aside>

export default SimpleCollapse;
