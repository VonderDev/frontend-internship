import Container from 'components/Container/Container';
import { Box } from 'shared/style/theme/component';
import { ControlOutlined, SearchOutlined } from '@ant-design/icons';
import { ButtonFilter, SearchField, InputSearch } from '../../shared/Filter.styles';
import { useEffect, useState } from 'react';
import { ApiPostFilter, ApiPostSearch } from '../../apis/board.api';
import BoardCardComponent from './BoardCardComponent';
import FilterDrawer from './FilterDrawer';
const Filter = () => {
    //Catagories----------------------------------------------------------------------------------------------------------
    const [selectedCatagories, setSelectedCatagories] = useState<any>(Array);
    const handleChangeCatagories = (tag: string, checked: boolean) => {
        setSelectedCatagories(checked ? [...selectedCatagories, tag] : selectedCatagories.filter((t: any) => t !== tag));
    };

    //Tags----------------------------------------------------------------------------------------------------------------
    const [selectedTags, setSelectedTags] = useState<any>(Array);
    const handleChangeTag = (tag: string, checked: boolean) => {
        setSelectedTags(checked ? [...selectedTags, tag] : selectedTags.filter((t: any) => t !== tag));
    };

    //Set catagories and tags in to object-------------------------------------------------------------------------------
    const [contentData, setContentData] = useState<{ content_type: string[]; tag: string[] }>({
        content_type: [],
        tag: [],
    });

    //Data that response from api----------------------------------------------------------------------------------------
    const [tagFilterData, setTagFilterData] = useState<any | null>(null);

    //Filter Api เมื่อใช้ปุ่ม---------------------------------------------------------------------------------------------------------
    // เปลี่ยนเป็น useCallBack
    async function filterContentData() {
        if (!searchValue) {
            const res = await ApiPostFilter(contentData);
            setTagFilterData(res);
        } else if (searchValue) {
            const res = await ApiPostSearch(searchValue, contentData);
            setTagFilterData(res);
        }
    }

    //Filter and close drawer in one click-----------------------------------------------------------------------------------------
    const onclickFilter = () => {
        filterContentData();
        setVisible(!visible);
    };

    //Drawer Function----------------------------------------------------------------------------------------------------
    const [visible, setVisible] = useState<boolean>(false);
    const showDrawer = () => {
        setVisible(!visible);
    };

    //Search Function (Realtime and Manual Button)----------------------------------------------------------------------------------------------------
    const [searchValue, setSearchValue] = useState<any | null>('');
    useEffect(() => {
        const delayTime = setTimeout(() => {
            async function realTime() {
                if (!searchValue) {
                    const res = await ApiPostFilter(contentData);
                    setTagFilterData(res);
                } else if (searchValue) {
                    const res = await ApiPostSearch(searchValue, contentData);
                    setTagFilterData(res);
                }
            }
            realTime();
        }, 500);

        return () => clearTimeout(delayTime);
    }, [searchValue]);

    useEffect(() => {
        console.log('tagFilterData', tagFilterData);
    }, [tagFilterData]);

    useEffect(() => {
        console.log('searchValue', searchValue);
    }, [searchValue]);

    useEffect(() => {
        setContentData({
            ...contentData,
            content_type: selectedCatagories,
            tag: selectedTags,
        });
    }, [selectedCatagories, selectedTags]);

    return (
        <Container
            header={{
                left: 'back',
                title: 'ตัวกรอง',
                right: '',
            }}
        >
            <FilterDrawer
                tagFilterData={tagFilterData}
                showDrawer={showDrawer}
                visible={visible}
                selectedCatagories={selectedCatagories}
                selectedTags={selectedTags}
                handleChangeCatagories={handleChangeCatagories}
                handleChangeTag={handleChangeTag}
                onclickFilter={onclickFilter}
            />
            <Box style={{ marginLeft: '20px', marginRight: '20px' }} align="flex-start" direction="column">
                <SearchField style={{ marginBottom: '20px' }}>
                    <InputSearch allowClear onChange={(e) => setSearchValue(e.target.value)} placeholder="Search Form" prefix={<SearchOutlined />} />
                    <ButtonFilter onClick={showDrawer}>
                        <ControlOutlined style={{ color: '#8a8888', fontSize: '24px' }} />
                    </ButtonFilter>
                </SearchField>
                <BoardCardComponent data={tagFilterData} />
            </Box>
        </Container>
    );
};
export default Filter;
