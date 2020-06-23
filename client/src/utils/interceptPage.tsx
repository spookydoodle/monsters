import { withNext, withPush } from './routingDecorators';
import { withRouter } from 'react-router';

// HOC for pages rendered as a side effect of accessing another page, e.g.
// a Login form displayed when rendering a forbidded page.
//
// Injects utilities for redirecting back to the original page.
export const interceptPage: any = (wrappedComponent: any) => withRouter(withPush(withNext(wrappedComponent)));
