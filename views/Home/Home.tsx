import React from "react";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { SBlock1, SSection, SBlock2, SButton } from "./style";

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <SBlock1>
        <span>驱动企业数字化转型</span>
        <br />
        <span>
          管理并可视化 API
          和微服务等企业关键业务流量，通过大数据和人工智能（AI）加速企业业务决策
        </span>
      </SBlock1>
      <SSection>
        <span className="title">下一代云原生 API 管理平台</span>
        <span className="desc">
          支持混合云、多数据中心、Kubernetes
          等部署方式，帮助您快速、安全地处理业务数据，并进行动态扩展
        </span>
        <img
          className="block-2-img"
          src="https://static.apiseven.com/2020/05/1594881772-Canvas-1.png"
          alt=""
        />
        <div className="feature-list">
          <div className="feature-item">
            <span className="title">极致性能</span>
            <img
              src="https://static.apiseven.com/2020/05/mouse-globe.png"
              alt=""
            />
            <span className="desc">
              微秒级延时，单核心 2 万 QPS，性能超出同类产品 10 倍
            </span>
            <a href="https://www.apiseven.com/api-%e7%bd%91%e5%85%b3-apache-apisix-%e5%92%8c-kong-%e7%9a%84%e9%80%89%e5%9e%8b%e5%af%b9%e6%af%94/">
              <SButton>性能对比测试</SButton>
            </a>
          </div>
          <div className="feature-item">
            <span className="title">开源驱动</span>
            <img
              src="https://static.apiseven.com/2020/05/laptop-cloud.png"
              alt=""
            />
            <span className="desc">
              活跃的开源社区，快速的产品迭代，不锁定用户
            </span>
            <a href="https://www.apiseven.com/category/%e7%94%a8%e6%88%b7%e6%a1%88%e4%be%8b/">
              <SButton>这些公司都在使用</SButton>
            </a>
          </div>
          <div className="feature-item">
            <span className="title">热加载</span>
            <img
              src="https://static.apiseven.com/2020/05/plug-cloud.png"
              alt=""
            />
            <span className="desc">
              函数与插件热加载机制，更适合 Serverless 与 IoT
            </span>
            <a href="https://www.apiseven.com/apache-apisix-vs-api7/">
              <SButton>了解更多功能</SButton>
            </a>
          </div>
        </div>
      </SSection>
      <SSection>
        <span className="title">为全球领先企业所信任</span>
        <div className="showcases">
          <div>
            <img
              src="https://static.apiseven.com/2020/05/WechatIMG618.png"
              alt=""
            />
          </div>
          <div>
            <img src="https://static.apiseven.com/2020/05/NASA.png" alt="" />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/%E4%B8%AD%E5%9B%BD%E8%88%AA%E4%BF%A1.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/HelloTalk.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588907633-WechatIMG630.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/%E8%85%BE%E8%AE%AF%E4%BA%91-768x273.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588840167-airwallexreview.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588907762-WechatIMG2916.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588907453-ezgif-3-6c2dbe3cc8cd.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588907670-WechatIMG631.png"
              alt=""
            />
          </div>
        </div>
      </SSection>
      <SBlock2>
        <span>想知道 API7 能为您做些什么吗？</span>
        <a href="https://www.apiseven.com/form-api7-trial" target="_blank">
          <SButton>免费试用</SButton>
        </a>
      </SBlock2>
      <Footer />
    </>
  );
};

export default Home;
