import styled from 'styled-components';

const Module = styled.div`
  box-sizing: border-box;
  height: 365px;
  border: 1px solid #ebebeb;
  margin-top: 76px;
  padding: 26px;
`;

const MainWrapper = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0 0 0 51px;
  overflow: hidden;
  color: #484848;
  width: 377px;
`;

const BoxWrapper = styled.div`
  height: 42px;
  width: 327px;
  border: 1px solid #ebebeb;
  border-radius: 2px;
`;

const FlagWidget = styled.div`
  text-align: center;
  margin: 15px;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 0;
`;

const ButtonUnderline = styled(Button)`
  font-size: 13.5px;
  font-weight: 300;
  &:hover {
    text-decoration: underline;
  };
`;

const ButtonSubmit = styled(Button)`
  width: 100%;
  height: 3em;
  background-color: #fd5a5f;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  border-radius: 4px;
  margin-top: 26px;
`;

const GuestMenuBtn = styled(Button)`
  width: 100%;
  height: 100%;
  text-align: unset;
`;

const Divider = styled.hr`
  background-color: transparent;
  border: 0.5px solid #ebebeb;
`;

const Price = styled.span`
  font-size: x-large;
  font-weight: bold;
`;

const Text = styled.span`
  font-size: small;
  font-weight: 500;
`;

const BoxText = styled.div`
  font-size: medium;
  font-weight: 300;
  position: relative;
  float: left;
  left: 18px;
`;

const BoxIcon = styled.div`
  position: relative;
  float: right;
  right: 18px;
`;

const CenterText = styled(FlagWidget)`
  margin: 10px;
  font-weight: 500;
  font-size: 12px;
`;

const StarStyle = styled.span`
  color: #108489;
  position: relative;
  bottom: 2.5px;
`;

const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
`;

const CalSelect = styled.input`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 150px;
  height: 100%;
  font-size: medium;
  padding-left: 18px;
  border: none;
`;

export {
  Module,
  MainWrapper,
  BoxWrapper,
  FlagWidget,
  Button,
  ButtonUnderline,
  ButtonSubmit,
  GuestMenuBtn,
  Divider,
  Price,
  Text,
  BoxText,
  BoxIcon,
  CenterText,
  StarStyle,
  FlexBox,
  CalSelect,
};
