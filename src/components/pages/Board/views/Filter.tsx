import Container from 'components/Container/Container';
import { Box } from 'shared/style/theme/component';
import { ControlOutlined, SearchOutlined } from '@ant-design/icons';
import { ButtonFilter, SearchField, InputSearch, DrawerRadius, CustomTag, CustomCheckableTag } from '../../Board/shared/Filter.styles';
import { useEffect, useState } from 'react';
const Filter = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const [selectedCatagories, setSelectedCatagories] = useState<any>(Array);
    const [selectedTags, setSelectedTags] = useState<any>(Array);

    const handleChangeCatagories = (tag: any, checked: any) => {
        const nextSelectedCatagories = checked ? [...selectedCatagories, tag] : selectedCatagories.filter((t: any) => t !== tag);
        setSelectedCatagories(nextSelectedCatagories);
    };
    const handleChangeTag = (tag: any, checked: any) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t: any) => t !== tag);
        setSelectedTags(nextSelectedTags);
    };

    useEffect(() => {
        console.log('Catagories ', selectedCatagories);
    }, [selectedCatagories]);
    useEffect(() => {
        console.log('Tag ', selectedTags);
    }, [selectedTags]);

    const catagories = [
        { tag: 'บทความ', value: 'board' },
        { tag: 'คำถาม', value: 'question' },
    ];
    const hashtag = [
        { tag: 'ภาษา', value: 'word smart' },
        { tag: 'ตรรกกะ', value: 'logic smart' },
        { tag: 'ดนตรี', value: 'music smart' },
        { tag: 'ธรรมชาติ', value: 'nature smart' },
        { tag: 'มิติสัมพันธ์', value: 'picture smart' },
        { tag: 'การเคลื่อนไหว', value: 'body smart' },
        { tag: 'มนุษยสัมพันธ์', value: 'people smart' },
        { tag: 'เข้าใจตนเอง', value: 'self smart' },
    ];
    const [visible, setVisible] = useState<boolean>(false);
    //const { Search } = Input;
    const onSearch = (value: any) => console.log(value);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    //console.log(isActive);
    return (
        <Container
            header={{
                left: '',
                title: 'ตัวกรอง',
                right: '',
            }}
        >
            <Box style={{ marginLeft: '20px', marginRight: '20px' }} justify="flex-start" align="flex-start" direction="column">
                <DrawerRadius
                    title="ตัวกรอง"
                    placement="bottom"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    getContainer={false}
                    height={650}
                    style={{ position: 'absolute', overflowY: 'hidden' }}
                >
                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>ประเภทของกระทู้</span>
                    <div style={{ flexFlow: 'row wrap', display: 'flex', fontWeight: 'bolder' }}>
                        {catagories.map((item) => (
                            <CustomCheckableTag key={item.value} checked={selectedCatagories.indexOf(item.value) > -1} onChange={(checked) => handleChangeCatagories(item.value, checked)}>
                                {item.tag}
                            </CustomCheckableTag>
                        ))}
                    </div>
                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>แฮชแท็กของกระทู้</span>
                    <div style={{ flexFlow: 'row wrap', display: 'flex' }}>
                        {hashtag.map((item) => (
                            <CustomCheckableTag key={item.value} checked={selectedTags.indexOf(item.value) > -1} onChange={(checked) => handleChangeTag(item.value, checked)}>
                                #{item.tag}
                            </CustomCheckableTag>
                        ))}
                    </div>
                </DrawerRadius>
                <SearchField>
                    <InputSearch onClick={onSearch} placeholder="Search Form" prefix={<SearchOutlined />} />
                    <ButtonFilter onClick={showDrawer}>
                        <ControlOutlined style={{ color: '#8a8888', fontSize: '24px' }} />
                    </ButtonFilter>
                </SearchField>
            </Box>
        </Container>
    );
};
export default Filter;
