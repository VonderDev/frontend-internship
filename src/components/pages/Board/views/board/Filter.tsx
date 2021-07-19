import Container from 'components/Container/Container';
import { Box } from 'shared/style/theme/component';
import { ControlOutlined, SearchOutlined } from '@ant-design/icons';
import { ButtonFilter, SearchField, InputSearch } from '../../shared/Filter.styles';
import { useCallback, useEffect, useState } from 'react';
import { ApiPostFilter, ApiGetSearch } from '../../apis/board.api';
import FilterCard from './FilterCard';
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
    // เปลี่ยนเป็น useCallBack
    async function filterContentData() {
        const res = await ApiPostFilter(contentData);
        setTagFilterData(res);
    }
    useEffect(() => {
        console.log('content data', contentData);
    }, [contentData]);

    //Drawer Function----------------------------------------------------------------------------------------------------
    const [visible, setVisible] = useState<boolean>(false);
    const showDrawer = () => {
        setVisible(!visible);
    };
    
    //Search Function (Not Finish)----------------------------------------------------------------------------------------------------
    const [searchValue, setSearchValue] = useState<string>();
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          console.log(searchValue)
          if(!searchValue){
          }else
          ApiGetSearch(searchValue);
        }, 1000)
        return () => clearTimeout(delayDebounceFn)
      }, [searchValue])

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
                showDrawer={showDrawer}
                visible={visible}
                selectedCatagories={selectedCatagories}
                selectedTags={selectedTags}
                handleChangeCatagories={handleChangeCatagories}
                handleChangeTag={handleChangeTag}
                filterContentData={filterContentData}
            />
            <Box style={{ marginLeft: '20px', marginRight: '20px' }} align="flex-start" direction="column">
                <SearchField style={{ marginBottom: '20px' }}>
                    <InputSearch
                        onChange={(e) => setSearchValue(e.target.value)}
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
