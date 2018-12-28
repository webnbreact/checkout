import styled, { keyframes } from 'styled-components';

export const BookStyle = styled.div`
  margin-top: 15px;
  position: relative;
  z-index: 1;
`;

export const BoldText = styled.span`
  font-size: small;
  font-weight: 500;
`;

export const BoxIcon = styled.div`
  position: relative;
  float: right;
  right: 18px;
`;

export const BoxText = styled.div`
  font-size: medium;
  font-weight: 300;
  position: relative;
  float: left;
  left: 18px;
`;

export const BoxWrapper = styled.div`
  height: 42px;
  width: 324px;
  border: 1px solid #ebebeb;
  border-radius: 2px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const ButtonQuest = styled(Button)`
  font-size: 15px;
  padding-left: 5px;
  &:hover {
    color: rgb(0, 132, 137);
  };
`;

export const ButtonSubmit = styled(Button)`
  width: 100%;
  height: 3em;
  background-color: #fd5a5f;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  border-radius: 4px;
  margin-top: 26px;
  margin-left: 1px;
`;

export const ButtonUnderline = styled(Button)`
  font-size: 13.5px;
  font-weight: 300;
  &:hover {
    text-decoration: underline;
  };
`;

export const FlagWidget = styled.div`
  text-align: center;
  margin: 15px;
`;

export const CenterText = styled(FlagWidget)`
  margin: 10px;
  font-weight: 500;
  font-size: 12px;
`;

export const CalSelect = styled.input`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 148px;
  height: 100%;
  font-size: medium;
  padding-left: 18px;
  border: none;
`;

export const Divider = styled.hr`
  background-color: transparent;
  border: 0.5px solid #ebebeb;
`;

export const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
`;

export const GuestsStyle = styled.div`
  margin-top: 12px;
`;

export const GuestDropdownStyle = styled.div`
  height: 329px;
  width: 100%;
  border: 0.5px solid #dedede;
  box-shadow: 0 0 1px black;
  overflow: hidden;
  position: relative;
  z-index: 10;
  background-color: white;
`;

export const GuestMenuBtn = styled(Button)`
  width: 100%;
  height: 100%;
  text-align: unset;
`;

export const Module = styled.div`
  box-sizing: border-box;
  min-height: 365px;
  border: 1px solid #ebebeb;
  margin-top: 66px;
  padding: 18px 26px;
  overflow: hidden;
`;

export const MainWrapper = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0 0 0 51px;
  overflow: hidden;
  color: #484848;
  width: 377px;
`;

export const Price = styled.span`
  font-size: x-large;
  font-weight: bold;
`;

export const PriceSummaryStyle = styled.div`
  box-sizing: border-box;
  height: 131px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 18px;
`;

export const PriceSummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
  font-size: medium;
  font-weight: 300;
  padding-top: 3px;
  box-sizing: border-box;
`;

const slide = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-150px);
  }
  50% {
    max-height: 150px;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    max-height: 150px;
    transform: translateY(0);
  }
`;

export const SlideDown = styled.div`
  animation: 2s ${slide};
  animation-delay: 2s;
  animation-fill-mode: forwards;
  overflow-y: hidden;
  max-height: 0;
  position: relative;
  z-index: 1;
`;

export const StarStyle = styled.span`
  color: #108489;
  position: relative;
  bottom: 2.5px;
`;

export const Text = styled.div`
  font-size: 14.75px;
  padding: 8px 0;
`;
