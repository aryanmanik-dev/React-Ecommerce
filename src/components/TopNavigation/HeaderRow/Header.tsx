import Bag from "@assets/SvgIcons/Bag";
import { ReactComponent as Search } from "@assets/SvgIcons/Search.svg";
import { ReactComponent as User } from "@assets/SvgIcons/User.svg";
import Whishlist from "@assets/SvgIcons/Whishlist";
import { Link } from "react-router-dom";
import "./Header.scss";
import NowTrending from "../NowTrending/NowTrending";
import { useState } from "react";
import Women from "../Women/Women";
import Men from "../Men/Men";
import Boys from "../Boys/Boys";
import Girls from "../Girls/Girls";
import Toddler from "../Toddler/Toddler";
const Header = () => {
  const [showContentDiv, setContentDiv] = useState(false);

  const getUserStatus = sessionStorage.getItem("status");

  const logourl =
    "https://www.zillidubai.com/cdn/shop/files/ZILLI-01.png?v=1687503384&width=250";
  return (
    <div onMouseLeave={() => setContentDiv(false)}>
      <div className="fixed top-0 left-0 right-0 z-10 bg-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="h-10 w-10 rounded-full cursor-pointer"
              src={logourl}
              alt="Placeholder"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-20">
          <div>
            <span
              className="hover-trigger"
              onMouseEnter={() => setContentDiv(!showContentDiv)}
            >
              Now Trending
            </span>
            <NowTrending show={showContentDiv} />
          </div>

          <div>
            <span
              className="hover-trigger"
              onMouseEnter={() => setContentDiv(true)}
            >
              Women
            </span>
            <Women show={showContentDiv} />
          </div>

          <div>
            <span
              className="hover-trigger"
              onMouseEnter={() => setContentDiv(!showContentDiv)}
            >
              Mens
            </span>
            <Men show={showContentDiv} />
          </div>

          <div>
            <span
              className="hover-trigger"
              onMouseEnter={() => setContentDiv(!showContentDiv)}
            >
              Boys
            </span>
            <Boys show={showContentDiv} />
          </div>

          <div>
            <span
              className="hover-trigger"
              onMouseEnter={() => setContentDiv(!showContentDiv)}
            >
              Girls
            </span>
            <Girls show={showContentDiv} />
          </div>

          <div>
            <span
              className="hover-trigger"
              onMouseEnter={() => setContentDiv(!showContentDiv)}
            >
              Toddler
            </span>
            <Toddler show={showContentDiv} />
          </div>

          <div>
            <span
              className="hover-trigger"
              onMouseEnter={() => setContentDiv(!showContentDiv)}
            >
              Baby
            </span>
            <NowTrending show={showContentDiv} />
          </div>

          <div>
            <span
              className="hover-trigger"
              onMouseEnter={() => setContentDiv(!showContentDiv)}
            >
              Maternity
            </span>
            <NowTrending show={showContentDiv} />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Search />

          {!getUserStatus ? (
            <Link to="/account/login">
              <User />
            </Link>
          ) : null}

          <Whishlist />
          <Bag />
        </div>
      </div>
    </div>
  );
};

export default Header;
