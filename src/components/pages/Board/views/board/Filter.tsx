import Container from 'components/Container/Container';
import { Box } from 'shared/style/theme/component';
import { ControlOutlined, SearchOutlined } from '@ant-design/icons';
import { ButtonFilter, SearchField, InputSearch, DrawerRadius, CustomCheckableTag, TagBox, Topic, ButtonUseFilter } from '../../shared/Filter.styles';
import { useEffect, useState } from 'react';
import { ApiPostFilter, ApiGetSearch } from '../../apis/board.api';
import FilterCard from './FilterCard';
import { catagories, hashtag } from '../../shared/FixedTag';
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
    const [contentData, setContentData] = useState<{ content_type: Array<string>; tag: Array<string> }>({
        content_type: [],
        tag: [],
    });
    useEffect(() => {
        setContentData({
            ...contentData,
            content_type: selectedCatagories,
            tag: selectedTags,
        });
    }, [selectedCatagories, selectedTags]);

    //Data that response from api----------------------------------------------------------------------------------------
    const [tagFilterData, setTagFilterData] = useState<any | null>(null);
    const [searchData, setSearchData] = useState<any | null>(null);

    //Filter Api---------------------------------------------------------------------------------------------------------
    async function filterContentData() {
        var res = await ApiPostFilter(contentData);
        setTagFilterData(res);
    }
    useEffect(() => {
        console.log('content data', contentData);
    }, [contentData]);

    //Drawer Function----------------------------------------------------------------------------------------------------
    const [visible, setVisible] = useState<boolean>(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const closeDrawer = () => {
        setVisible(false);
    };

    //Search Function (Not Finish)----------------------------------------------------------------------------------------------------
    const [searchValue, setSearchValue] = useState<string>();
    //console.log('search value', searchValue);
    useEffect(() => {
        if (searchValue === '') {
        } else {
            var res = ApiGetSearch(searchValue);
            setSearchData(res);
        }
    }, [searchValue]);
    const handleChangeSearch = (value: string) => {
        setSearchValue(value);
    };

    return (
        <Container
            header={{
                left: '',
                title: 'ตัวกรอง',
                right: '',
            }}
        >
            <FilterDrawer
                tagFilterData={tagFilterData}
                closeDrawer={closeDrawer}
                visible={visible}
                selectedCatagories={selectedCatagories}
                selectedTags={selectedTags}
                handleChangeCatagories={handleChangeCatagories}
                handleChangeTag={handleChangeTag}
                filterContentData={filterContentData}
            />
            <Box style={{ marginLeft: '20px', marginRight: '20px' }} justify="flex-start" align="flex-start" direction="column">
                <SearchField>
                    <InputSearch
                        onChange={({ target: { value } }) => {
                            handleChangeSearch(value);
                        }}
                        placeholder="Search Form"
                        prefix={<SearchOutlined />}
                    />
                    <ButtonFilter onClick={showDrawer}>
                        <ControlOutlined style={{ color: '#8a8888', fontSize: '24px' }} />
                    </ButtonFilter>
                </SearchField>
                <FilterCard tagFilterData={tagFilterData} />
            </Box>
        </Container>
    );
};
export default Filter;
