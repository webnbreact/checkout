import styled from 'styled-components';

const Module = styled.div`
  height: 365px;
  border: 1px solid #ebebeb;
  margin-top: 76px;
  padding: 26px;
`;

const Wrapper = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0 0 0 51px;
  overflow: hidden;
  color: #484848;
  width: 377px;
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

export {
  Module,
  Wrapper,
  FlagWidget,
  Button,
  ButtonUnderline,
  ButtonSubmit,
  Divider,
  Price,
  Text,
  CenterText,
  StarStyle,
};
