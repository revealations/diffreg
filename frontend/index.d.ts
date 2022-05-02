declare module "image" {
  import { ReactElement, ReactElement, SVGProps } from "react";
  const src: (props: SVGProps<SVGImageElement>) => ReactElement;
  export default content;
}

declare module "useScrollFadeIn" {
  import { MutableRefObject } from "react";
  const src: (props: MutableRefObject) => ReactElement;
  export default content;
}

declare module "react-naver-maps" {
  import { ReactElement } from "react";
  const src: () => ReactElement;
  declare function RenderAfterNavermapsLoaded(): (
    props: {
      loading: PropTypes.node;
      error: PropTypes.node;
      clientId: string;
      ncpClientId: cliendIdRequired;
      children: PropTypes.node<T>;
    },
    defaultProps: { loading: null; error: null },
  ) => ReactElement;
  declare function NaverMap(
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
  ): ReactElement;
  export { RenderAfterNavermapsLoaded, NaverMap };
}
