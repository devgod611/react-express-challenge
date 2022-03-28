import styled from "@emotion/styled";
import { GENERICS, MIXINS } from "./GlobalStyle";
import { FaBook, FaCogs, FaSearch, FaSignOutAlt } from "react-icons/fa";
import {
  useLogoutMutation,
  useMeQuery,
} from "../generated/graphql";
import { useHistory, Link } from "react-router-dom";
import { clearToken } from "../helper/auth";
import { useState } from "react";
import { debounceFn } from "../helper/debounce";
import { useEffect } from "react";

export function Navigation() {
  const { replace } = useHistory();
  const [submitLogout, { client }] = useLogoutMutation();
  const { data } = useMeQuery();
  const [searchText, setSearchText] = useState<string>("");

  const navItems = [
    { icon : <FaBook />, label: "Introduction", link: "/technology" },
    { icon : <FaCogs />, label: "Installation", link: "/install" }
  ];

  const [navs, setNavs] = useState<Array<any>>(navItems);

  const onLogoutHandler = async () => {
    try {
      await submitLogout();
      await client.resetStore();
      clearToken();
      replace("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const onSearchHandler = debounceFn(async () => {
    setNavs(navItems.filter(nav => {
      return nav.label.toLowerCase().includes(searchText.trim().toLowerCase());
    }))
  }, 1000);

  useEffect(() => {
    onSearchHandler();
  }, [searchText]);

  return (
    <NavigationStyled>
      <div className="user-profile">
        <div>{data?.me?.username.substr(0, 1).toUpperCase()}</div>
        <span>{data?.me?.username}</span>
        <span onClick={onLogoutHandler}>
          <FaSignOutAlt />
        </span>
      </div>
      <div className="search-container">
        <FaSearch />
        <input
          placeholder="Search"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
      </div>
      <ul className="navs-menu">
        {navs.map(nav => {
          return (<Link key={nav.link} className="link" to={nav.link}>
            {nav.icon}
            <span className="li-item">{nav.label}</span>
          </Link>)
        })}
      </ul>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  background-color: ${GENERICS.colorBlack};
  color: #ccc;

  .link {
    display: block;
    padding: 20px 10px 20px 35px;
  }

  .link:hover {
    background-color: grey;
  }

  .li-item {
    padding-left: 10px;
  }

  .user-profile {
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    align-items: center;
    padding: 20px;
    gap: 10px;
    > div:first-of-type {
      background-color: ${GENERICS.primaryColor};
      color: white;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      ${MIXINS.va()}
    }

    > span:nth-of-type(1) {
      white-space: nowrap;
    }

    > span:last-child {
      justify-self: flex-end;
      cursor: pointer;
      transition: 0.3s;
      padding: 5px;

      &:hover {
        color: red;
      }
    }
  }

  .search-container {
    ${MIXINS.va()}
    padding: 10px 20px;
    border-radius: 30px;
    background-color: ${GENERICS.colorBlackCalm};
    margin: 0 20px;
    margin-bottom: 14px;

    > input {
      background-color: transparent;
      color: #ccc;
      border: none;
      margin-left: 10px;
      font-size: 16px;
      outline: none;
    }
  }

  .newArticle-button {
    ${MIXINS.va("left")}
    cursor: pointer;
    gap: 10px;
    color: white;
    border-radius: 30px;
    padding: 10px 20px;
    margin: 0 20px;
    background-color: ${GENERICS.primaryColor};
    &:hover {
      background-color: ${GENERICS.primaryColorDark};
    }
  }

  .active {
    background-color: #444;
    color: white;
  }
  .navs-menu {
    margin-top: 20px;
    > li {
      ${MIXINS.va("left")}
      gap: 10px;
      padding: 10px 40px;
      cursor: pointer;
      &:hover {
        background-color: #333;
      }
    }
  }
`;
