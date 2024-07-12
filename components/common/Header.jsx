// Dependencies
import Link from "next/link";
import SVG from "react-inlinesvg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Data
import { contentCN, contentEN } from "@/data";

// Store
import { localeUpdate, uiUpdateNavOpen } from "@/store/actions";
import { LOCALE_ENGLISH, LOCALE_CHINESE } from "@/store/constants";

// Component
export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { ui, locale } = useSelector((state) => state);
  const [activeLocale, setActiveLocale] = useState(LOCALE_ENGLISH);

  //
  const changeLocale = (key) => {
    if (key === LOCALE_CHINESE) {
      dispatch(localeUpdate(contentCN));
    } else {
      dispatch(localeUpdate(contentEN));
    }

    setActiveLocale(key);
  };

  //
  const toggleNavOpen = () => dispatch(uiUpdateNavOpen(!ui.navOpen));

  //
  return (
    <header className="global__header" data-theme={ui.headerTheme}>
      <div className="left">
        <button
          className="hamburger"
          onClick={toggleNavOpen}
          data-active={ui.navOpen}
        >
          <div className="lines"></div>
        </button>
      </div>

      <div className="center">
        <Link href="/" className="btn__logo">
          <SVG
            src={`${process.env.BASE_PATH}/img/common/Logo-Tailor-01-White-188x30.svg`}
          />
        </Link>
      </div>

      <div className="right">
        <div className="locale">
          <button
            data-active={activeLocale === LOCALE_ENGLISH}
            onClick={() => changeLocale(LOCALE_ENGLISH)}
          >
            EN
          </button>
          <span></span>
          <button
            data-active={activeLocale === LOCALE_CHINESE}
            onClick={() => changeLocale(LOCALE_CHINESE)}
          >
            中文
          </button>
        </div>
      </div>
    </header>
  );
}
