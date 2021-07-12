import Container from 'components/Container/Container';
import { Box } from 'shared/style/theme/component';
import { ControlOutlined, SearchOutlined } from '@ant-design/icons';
import { ButtonFilter, SearchField, InputSearch, DrawerRadius, CustomCheckableTag, TagBox, Topic } from '../../shared/Filter.styles';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { ApiPostFilter } from '../../apis/boardCreate.api';
const Filter = () => {
    /*--------------------------------------------------------------------------------*/
    const [selectedCatagories, setSelectedCatagories] = useState<any>(Array);
    const [selectedTags, setSelectedTags] = useState<any>(Array);
    const [contentData, setContentData] = useState<{ content_type: Array<string>; tag: Array<string> }>({
        content_type: [],
        tag: [],
    });

    const handleChangeCatagories = (tag: string, checked: boolean) => {
        const nextSelectedCatagories = checked ? [...selectedCatagories, tag] : selectedCatagories.filter((t: any) => t !== tag);
        setSelectedCatagories(nextSelectedCatagories);
    };
    const handleChangeTag = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t: any) => t !== tag);
        setSelectedTags(nextSelectedTags);
    };

    function filterContentData() {
        setContentData({
            ...contentData,
            content_type: selectedCatagories,
            tag: selectedTags,
        });
        ApiPostFilter(contentData);
    }

    useEffect(() => {
        console.log('content data', contentData);
    }, [contentData]);
    console.log(typeof selectedCatagories);
    useEffect(() => {
        console.log('ContentType ', selectedCatagories);
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
    /*--------------------------------------------------------------------------------*/
    const [visible, setVisible] = useState<boolean>(false);
    //const { Search } = Input;
    const onSearch = (value: any) => console.log(value);
    const showDrawer = () => {
        setVisible(true);
    };
    const closeDrawer = () => {
        setVisible(false);
    };
    /*--------------------------------------------------------------------------------*/
    return (
        <Container
            header={{
                left: '',
                title: 'ตัวกรอง',
                right: '',
            }}
        >
            <DrawerRadius title="ตัวกรอง" placement="bottom" closable={false} onClose={closeDrawer} visible={visible} height={650}>
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
                <Button onClick={filterContentData}>ใช้เเท็ก</Button>
            </DrawerRadius>
            <Box style={{ marginLeft: '20px', marginRight: '20px' }} justify="flex-start" align="flex-start" direction="column">
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
