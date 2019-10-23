import styled from 'styled-components';

import { Button, Form } from 'react-bootstrap';

const StyledButton = styled(Button)`
    border: 0;
    border-radius: 2px;
    padding: 5px 20px;
    font-size: 16px;
    font-weight: bold;
    background: #FF0066;
    color: #fff;
    cursor: pointer;

    :hover {
        background: #b00046;
    }
`;

const StyledFormRow = styled(Form.Row)`
    padding: 0px 7px;
`;

export { StyledButton, StyledFormRow };