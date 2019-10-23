import styled from 'styled-components';

import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`
    border: 0;
    border-radius: 2px;
    padding: 5px 20px;
    font-size: 16px;
    font-weight: bold;
    color: "white";
    cursor: pointer;
    margin: 0 2px;

    :hover {
        background: "hover_btn";
    }
`;

export { StyledButton };