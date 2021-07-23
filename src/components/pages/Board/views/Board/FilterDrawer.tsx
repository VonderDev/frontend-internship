import { DrawerRadius } from 'components/pages/Authentication/shared/style';
import { Topic, TagBox, CustomCheckableTag, ButtonUseFilter } from '../../shared/Filter.styles';
import { catagories, hashtag } from '../../shared/FixedTag';
import { CheckCircleOutlined } from '@ant-design/icons';

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

const FilterDrawer: React.FC<DrawerProps> = ({ showDrawer, visible, selectedCatagories, selectedTags, handleChangeCatagories, handleChangeTag, onclickFilter}) => {
    return (
        <DrawerRadius title="ตัวกรอง" placement="bottom" closable={true} onClose={showDrawer} visible={visible} height={768}>
            <div>
                <Topic>ประเภทของกระทู้</Topic>
                <TagBox style={{ fontWeight: 'bolder' }}>
                    {catagories.map((item, index) => (
                        <div key={index} style={{ marginRight: '10px', marginBottom: '5px' }}>
                            <CustomCheckableTag key={item.value} checked={selectedCatagories.indexOf(item.value) > -1} onChange={(checked) => handleChangeCatagories(item.value, checked)}>
                                {item.tag}
                                <div style={{ marginLeft: '3px', transform: 'translateY(1px)' }}>
                                    <CheckCircleOutlined />
                                </div>
                            </CustomCheckableTag>
                        </div>
                    ))}
                </TagBox>
                <Topic>แฮชแท็กของกระทู้</Topic>
                <TagBox>
                    {hashtag.map((item, index) => (
                        <div key={index} style={{ marginRight: '10px', marginBottom: '5px' }}>
                            <CustomCheckableTag key={item.value} checked={selectedTags.indexOf(item.value) > -1} onChange={(checked) => handleChangeTag(item.value, checked)}>
                                #{item.tag}
                                <div style={{ marginLeft: '3px', transform: 'translateY(1px)' }}>
                                    <CheckCircleOutlined />
                                </div>
                            </CustomCheckableTag>
                        </div>
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
