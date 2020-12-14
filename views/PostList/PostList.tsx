import React from "react";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FooterLinks from "@/components/FooterLinks";

import { withTranslation } from "../../i18n";
import { SWrapper } from "./style";
import data from "../../data.json";

type Props = {
  t: TFunction;
  type: "usercases" | "blog";
  list: Post[];
};

const PostList: NextPage<Props, any> = ({ t, type, list = [] }) => {
  return (
    <SWrapper>
      <NextSeo title={t(`common:${type}`)} />
      <div>
        <Nav />
        <div className="cover">
          <div className="background"></div>
          <div className="box">
            <h1>{t(`common:${type}`)}</h1>
          </div>
        </div>
        <div className="slogan">
          <p>
            全球已经有数百家企业用户在使用 Apache APISIX
            处理核心的业务流量，包括金融、互联网、制造、零售、运营商等多个行业。
          </p>
        </div>
        <div className="cards">
          {list.map((item) => (
            <div className="card" key={item.title}>
              <img src={item.cover} alt="" />
              <a href={`${item.path}`}>
                <h2>{item.title}</h2>
              </a>
            </div>
          ))}
        </div>
        <FooterLinks />
        <Footer />
      </div>
    </SWrapper>
  );
};

PostList.getInitialProps = async (context) => {
  const { pathname } = context;
  let type = pathname.slice(1);

  if (type === "usercases") {
    type = "usercase";
  }

  const { lng = "zh-CN" } = (context.req as any) || {};

  const posts = data[type][lng];

  return {
    namespacesRequired: ["common"],
    type,
    list: posts,
  };
};

export default withTranslation("postlist")(PostList as any);
