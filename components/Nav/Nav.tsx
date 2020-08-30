import React from "react";
import Link from 'next/link'

import {
  SHeaderWrapper,
  SHeader,
  SBrandWrapper,
  SBrand,
  SNavWrapper,
  SNav,
  SNavItem,
} from "./style";

type Props = {};

const Nav: React.FC<Props> = () => {
  const navs = [
    {
      title: "首页",
      href: "/",
    },
    {
      title: "用户案例",
      href: "/showcases",
    },
    {
      title: "GitHub",
      href: "https://github.com/apache/apisix",
    },
  ];

  return (
    <SHeaderWrapper>
      <SHeader>
        <SBrandWrapper>
          <SBrand
            src="https://static.apiseven.com/2020/05/Jietu20200312-103300-removebg-preview.png"
            alt=""
          />
        </SBrandWrapper>

        <SNavWrapper>
          <SNav>
            {navs.map((nav) => (
              <SNavItem key={nav.href}>
                <Link href={nav.href}>{nav.title}</Link>
              </SNavItem>
            ))}
          </SNav>
        </SNavWrapper>
      </SHeader>
    </SHeaderWrapper>
  );
};

export default Nav;
