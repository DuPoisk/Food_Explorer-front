import styled from "styled-components";

export const Container = styled.header`
grid-area: header;

width: 100%
height: 114px;

/*border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_100};*/

display: flex;
justify-content: space-between;

padding: 0 80px;

background: ${({ theme }) => theme.COLORS.DARK_700};
`;

export const Company = styled.text`
display: flex;
justify-content: space-between;
`