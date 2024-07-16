import { useMemo } from 'react';
import useElementId from './use-element-id';
import getDropdownId from '../helpers/get-dropdown-id';
import getOptionIdCommon from '../helpers/get-option-id';

interface SelectElementsIds {
    containerId: string;
    dropdownId: string;
    getOptionId: (optionId: number) => string;
}

const useElementsIds = (id?: string): SelectElementsIds => {
    const containerId = useElementId(id);

    return useMemo(() => {
        return {
            containerId,
            dropdownId: getDropdownId(containerId),
            getOptionId: (optionIndex: number) => getOptionIdCommon(containerId, optionIndex),
        };
    }, [containerId]);
};

export default useElementsIds;
