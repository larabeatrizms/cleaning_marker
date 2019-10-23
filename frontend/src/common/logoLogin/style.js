import styled from 'styled-components';

const ImgLogo = styled.img`
  background: ${props => props.inputBg || "palevioletred"};
  with: 60px;
  max-width: 60px;
  max-height: 60px;
  margin: 10px 5px 10px 10px;
`;

const ImgLogoMarca = styled.img`
  height: 50px;
  max-height: 75px;
  margin: 10px 0px 10px 1px;
`;

export {ImgLogo, ImgLogoMarca};