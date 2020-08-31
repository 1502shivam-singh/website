import styled from 'styled-components'

export const SBlock1 = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://static.apiseven.com/2020/05/1588827227-skyscrapers-looking-up-scaled.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  span {
    padding: 0 25px;
    font-size: 40px;
    &:nth-child(1) {
      font-size: 90px;
    }
  }

  @media (min-width: 1200px) {
    span {
      font-size: 40px;
      &:nth-child(1) {
        font-size: 80px;
      }
    }
  }
`

export const SButton = styled.button`
  background-color: ${props => props.theme.color.primary};
  padding: 12px 24px;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 36px;
  a:link, a:visited {
    color: #fff;
    &:hover {
      text-decoration: none;
    }
  }

  @media (min-width: 1200px) {
    font-size: 18px;
  }
`

export const SSection = styled.div`
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat;
  color: #3c4858;
  box-sizing: border-box;
  padding: 0 25px;
  span {
    display: block;
  }
  .block-2-img {
    width: 100%;
    margin: 35px 0;
  }
  .title {
    font-size: 60px;
    font-weight: bold;
  }
  .desc {
    font-size: 35px;
    margin-top: 15px;
  }
  .feature-list {
    display: grid;
    grid-template-columns: 1fr;
  }
  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 49px;
      font-weight: bold;
    }
    .desc {
      margin-top: -10px;
      margin-bottom: 15px;
      font-size: 34px;
    }
    &:not(:last-child) {
      margin-bottom: 70px;
    }
  }

  .showcases {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 80px);
    grid-row-gap: 80px;
    margin-top: 60px;
    padding: 0 25px;
    div {
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
        object-fit: contain;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1140px;
    padding: 0;

    .title {
      font-size: 60px;
    }

    .desc {
      font-size: 25px;
      margin-top: 15px;
    }

    .block-2-img {
      width: auto;
      height: 420px;
      margin: 35px 0;
    }

    .feature-list {
      grid-template-columns: repeat(3, 1fr);
    }

    .feature-item {
      .title {
        font-size: 29px;
      }
      .desc {
        margin-top: -10px;
        margin-bottom: 15px;
        font-size: 15px;
      }
      &:not(:last-child) {
        margin-bottom: 0;
      }
    }

    .showcases {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 80px);
    }
  }
`

export const SBlock2 = styled.div`
  background-image: url(https://static.apiseven.com/2020/05/admin-ajax.jpeg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  font-size: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 180px;
  div {
    display: flex;
    align-items: center;
  }

  @media (min-width: 1200px) {
    div {
      width: 1170px;
    }
  }
`
