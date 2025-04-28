import { Link } from "react-router-dom";
import {
  blogItems,
  candidateItems,
  findJobItems,
  homeItems,
  pageItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useLocation } from "react-router-dom";

const HeaderNavContent = () => {
  const { pathname } = useLocation();
  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* Home Menu */}
          <li
            className={`${isActiveParent(homeItems, pathname) ? "current" : ""
              } dropdown`}
          >
            <span>Home</span>
            <div className="mega-menu">
              <div className="mega-menu-bar row pt-0">
                {homeItems.map((item) => (
                  <div
                    className="column col-lg-3 col-md-3 col-sm-12"
                    key={item.id}
                  >
                    <ul>
                      {item.items.map((menu, i) => (
                        <li
                          className={
                            isActiveLink(menu.routePath, pathname)
                              ? "current"
                              : ""
                          }
                          key={i}
                        >
                          <Link to={menu.routePath}>{menu.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>

          {/* Find Jobs Menu */}
          <li
            className={`${isActiveParent(findJobItems, pathname) ? "current" : ""
              } dropdown has-mega-menu`}
            id="has-mega-menu"
          >
            <span>Find Jobs</span>
            <div className="mega-menu">
              <div className="mega-menu-bar row">
                {findJobItems.map((item) => (
                  <div
                    className="column col-lg-3 col-md-3 col-sm-12"
                    key={item.id}
                  >
                    <h3>{item.title}</h3>
                    <ul>
                      {item.items.map((menu, i) => (
                        <li
                          className={
                            isActiveLink(menu.routePath, pathname)
                              ? "current"
                              : ""
                          }
                          key={i}
                        >
                          <Link to={menu.routePath}>{menu.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>

          {/* Simplified Employers Menu - Direct Link */}
          <li className={pathname.includes("employers-dashboard") ? "current" : ""}>
            <Link to="/employers-dashboard/dashboard">Employers</Link>
          </li>

          {/* Candidates Menu */}
          <li
            className={`${isActiveParent(candidateItems, pathname) ||
              pathname?.split("/")[1] === "candidates-dashboard"
              ? "current"
              : ""
              } dropdown`}
          >
            <span>Candidates</span>
            <ul>
              {candidateItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, pathname)
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, pathname)
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link to={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li
                className={
                  pathname?.includes("/candidates-dashboard/")
                    ? "current"
                    : ""
                }
              >
                <Link to="/candidates-dashboard/dashboard">
                  Candidates Dashboard
                </Link>
              </li>
            </ul>
          </li>

          {/* Blog Menu */}
          <li
            className={`${isActiveParentChaild(blogItems, pathname) ? "current" : ""
              } dropdown`}
          >
            <span>Blog</span>
            <ul>
              {blogItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, pathname) ? "current" : ""
                  }
                  key={i}
                >
                  <Link to={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Pages Menu */}
  <li
  className={`${
    isActiveParentChaild(pageItems, pathname) ? "current " : ""
  } dropdown`}
  > 
  <span>Pages</span>
  <ul>
    {pageItems.map((item, i) => (
      <li
        className={
          isActiveLink(item.routePath, pathname) ? "current" : ""
        }
        key={i}
      >
        <Link to={item.routePath}>{item.name}</Link>
      </li>
    ))}
  </ul>
</li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;