import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
    width: 160px;

    .select__value-container {
        padding: 0px 8px;
    }

    .select__control {
        min-height: 20px;
    }

    .select__indicator {
        padding: 0px 8px;
    }
`;