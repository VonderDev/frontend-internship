import { DrawerRadius } from 'components/pages/Authentication/shared/style';
import { Topic, TagBox, CustomCheckableTag, ButtonUseFilter } from '../../shared/Filter.styles';
import { catagories, hashtag } from '../../shared/FixedTag';

interface DrawerProps {
    tagFilterData: any[];
    showDrawer: (e: any) => void;
    visible: boolean;
    selectedCatagories: Array<string>;
    selectedTags: Array<string>;
    handleChangeCatagories: Function;
    handleChangeTag: Function;
    onclickFilter: (e: any) => void;
}

const FilterDrawer: React.FC<DrawerProps> = ({ showDrawer, visible, selectedCatagories, selectedTags, handleChangeCatagories, handleChangeTag, onclickFilter }) => {
    return (
        <DrawerRadius title="ตัวกรอง" placement="bottom" closable={false} onClose={showDrawer} visible={visible} height={650}>
            <div>
                <Topic>ประเภทของกระทู้</Topic>
                <TagBox style={{ fontWeight: 'bolder' }}>
                    {catagories.map((item) => (
                        <CustomCheckableTag key={item.value} checked={selectedCatagories.indexOf(item.value) > -1} onChange={(checked) => handleChangeCatagories(item.value, checked)}>
                            {item.tag}
                        </CustomCheckableTag>
                    ))}
                </TagBox>
                <Topic>แฮชแท็กของกระทู้</Topic>
                <TagBox>
                    {hashtag.map((item) => (
                        <CustomCheckableTag key={item.value} checked={selectedTags.indexOf(item.value) > -1} onChange={(checked) => handleChangeTag(item.value, checked)}>
                            #{item.tag}
                        </CustomCheckableTag>
                    ))}
                </TagBox>
            </div>
            <div style={{ paddingBottom: '24px', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', height: '60%' }}>
                <ButtonUseFilter onClick={onclickFilter}>กรอง</ButtonUseFilter>
            </div>
        </DrawerRadius>
    );
};
export default FilterDrawer;
