import { useRef } from 'react';

export const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)