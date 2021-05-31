declare module '*.jpg';
declare module '*.png';
// declare module '*.svg?inline' {
//   const content: any;
//   export default content;
// }
//
// declare module '*.svg' {
//   const content: any;
//   export default content;
// }
declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

  const src: string;
  export default src;
}
