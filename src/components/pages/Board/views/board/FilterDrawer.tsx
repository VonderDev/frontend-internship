import { DrawerRadius } from 'components/pages/Authentication/shared/style';
import { Topic, TagBox, CustomCheckableTag, ButtonUseFilter } from '../../shared/Filter.styles';
import { catagories, hashtag } from '../../shared/FixedTag';

interface DrawerProps {
    tagFilterData: any | null;
    closeDrawer: (e: any) => void;
    visible: boolean;
    selectedCatagories: Array<string>;
    selectedTags: Array<string>;
    handleChangeCatagories: Function;
    handleChangeTag: Function;
    filterContentData: (e: any) => void;
}

const FilterDrawer: React.FC<DrawerProps> = ({ closeDrawer, visible, selectedCatagories, selectedTags, handleChangeCatagories, handleChangeTag, filterContentData }) => {
    return (
        <DrawerRadius title="ตัวกรอง" placement="bottom" closable={false} onClose={closeDrawer} visible={visible} height={650}>
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
                <ButtonUseFilter onClick={filterContentData}>กรอง</ButtonUseFilter>
            </div>
        </DrawerRadius>
    );
};
export default FilterDrawer;
