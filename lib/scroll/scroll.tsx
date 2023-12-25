import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { scopeClassMaker } from "../utils/scopeClassMaker";
import "./index.scss";
import cs from "classnames";

export interface ScrollProps
  extends PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {
  height?: string | number;
  maxHeight?: string | number;
}
const scm = scopeClassMaker("boat-scroll");
const calcScrollWidth = () => {
  const div = document.createElement("div");
  div.style.overflow = "scroll";
  div.style.height = div.style.width = "100px";
  div.style.position = "absolute";
  div.style.top = div.style.left = "-9999px";
  document.body.appendChild(div);
  const width = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return width;
};
let isScroll: NodeJS.Timer | undefined = undefined;
const Scroll: FC<ScrollProps> = (props) => {
  const { height, maxHeight, style, children, className, ...rest } = props;
  const [scrollBarWidth, setScrollBarWidth] = useState(0);
  const [scrollBarHeight, setScrollBarHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const scrollHeight = useRef(0);
  const wrapHeight = useRef(0);
  const [showScrollBar, setShowScrollBar] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const curMouseY = useRef(0);
  const wrapStyle = {
    height,
    maxHeight,
  };
  const dragging = useRef(false);
  const scrollBarStyle = {
    height: scrollBarHeight,
    transform: `translateY(${scrollTop}px)`,
  };
  const transformScrollTop = (sTop: number) =>
    (sTop / scrollHeight.current) * wrapHeight.current;
  const onScroll = (e) => {
    setShowScrollBar(true);
    setScrollTop(transformScrollTop(e.currentTarget.scrollTop));
  };
  const initBar = (count = 0) => {
    if (count > 20) return;
    if (contentRef.current && wrapRef.current) {
      scrollHeight.current = contentRef.current.scrollHeight;
      wrapHeight.current = wrapRef.current.offsetHeight;
      const height = wrapRef.current.offsetHeight;
      const barHeight = Math.trunc(
        height * (height / contentRef.current.scrollHeight),
      );
      setScrollBarHeight(barHeight);
    } else {
      requestAnimationFrame(() => {
        initBar(count + 1);
      });
    }
  };
  const onMouseDown = (e) => {
    dragging.current = true;
    curMouseY.current = e.clientY;
  };

  const onMouseMove = (e) => {
    if (dragging.current) {
      const dis = e.clientY - curMouseY.current;
      curMouseY.current = e.clientY;
      setScrollTop((n) => {
        if (n < 0) {
          return 0;
        }
        const maxN = transformScrollTop(
          scrollHeight.current - wrapHeight.current,
        );
        if (n > maxN) {
          return maxN;
        }
        return n + dis;
      });
    }
  };
  const hideBar = () => {
    if (dragging.current) return;
    isScroll = setTimeout(() => {
      setShowScrollBar(false);
    }, 1000);
  };
  const showBar = () => {
    setShowScrollBar(true);
    if (isScroll) {
      clearTimeout(isScroll);
    }
  };
  const onMouseUp = (e) => {
    dragging.current = false;
    hideBar();
  };
  const onMouseEnter = () => {
    if (isScroll) {
      showBar();
    }
  };
  const onMouseLeave = () => {
    hideBar();
  };
  useEffect(() => {
    setScrollBarWidth(calcScrollWidth());
    initBar();
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);
  return (
    <div
      ref={wrapRef}
      {...rest}
      className={cs(scm(), className)}
      style={{ ...style, ...wrapStyle }}
    >
      <div
        ref={contentRef}
        className={scm("content")}
        style={{
          right: -scrollBarWidth,
          userSelect: dragging.current ? "none" : undefined,
        }}
        onScroll={onScroll}
      >
        {children}
      </div>
      {scrollBarWidth > 0 && (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={scm("track")}
        >
          <div
            onMouseDown={onMouseDown}
            className={cs(scm("scrollBar"), showScrollBar && "show")}
            style={scrollBarStyle}
          />
        </div>
      )}
    </div>
  );
};
export default Scroll;
