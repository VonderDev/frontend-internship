import Container from 'components/Container/Container';
import { Box } from 'shared/style/theme/component';
import { ButtonFilter, SearchField, InputSearch, TagBox, CustomCheckableTag, CancleTag, SearchIcon } from '../../shared/Filter.styles';
import { useEffect, useState } from 'react';
import { ApiPostFilter, ApiPostSearch } from '../../apis/board.api';
import BoardCardComponent from './BoardCardComponent';
import FilterDrawer from './FilterDrawer';
import { transalateToThai } from 'utils/transalator/transalator';
import { DrawerContainer, MoveCenter } from 'components/pages/Authentication/shared/style';
import { CreateContentIcon } from 'components/pages/Home/shared/style/homepage.styles';
import { useHistory } from 'react-router-dom';

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

    const onclickClear = () => {
        setSelectedTags([]);
        setSelectedCatagories([]);
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
    }, [searchValue, contentData]);

    useEffect(() => {
        // console.log('tagFilterData', tagFilterData);
        console.log('select tag', selectedTags);
        console.log('select categories', selectedCatagories);
    }, [tagFilterData, selectedTags, selectedCatagories]);

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
    const history = useHistory();

    return (
        <Container header={{ left: 'back', right: 'menu', title: 'กระทู้' }}>
            <DrawerContainer>
                <div>
                    <FilterDrawer
                        tagFilterData={tagFilterData}
                        showDrawer={showDrawer}
                        visible={visible}
                        selectedCatagories={selectedCatagories}
                        selectedTags={selectedTags}
                        handleChangeCatagories={handleChangeCatagories}
                        handleChangeTag={handleChangeTag}
                        onclickFilter={onclickFilter}
                        onclickClear={onclickClear}
                    />
                </div>
                <Box style={{ marginLeft: '20px', marginRight: '20px' }} align="flex-start" direction="column">
                    <SearchField>
                        <InputSearch allowClear onChange={(e: any) => setSearchValue(e.target.value)} placeholder="ค้นหา" prefix={<SearchIcon />} />
                        <ButtonFilter onClick={showDrawer}>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.5398 12.3637C11.153 12.3637 10.7821 12.2101 10.5086 11.9366C10.2351 11.6631 10.0815 11.2922 10.0815 10.9054V5.40749C10.0815 5.02072 10.2351 4.64978 10.5086 4.37629C10.7821 4.1028 11.153 3.94916 11.5398 3.94916C11.9266 3.94916 12.2975 4.1028 12.571 4.37629C12.8445 4.64978 12.9981 5.02072 12.9981 5.40749V10.9054C12.9981 11.2922 12.8445 11.6631 12.571 11.9366C12.2975 12.2101 11.9266 12.3637 11.5398 12.3637Z"
                                    fill="#9EA0AC"
                                />
                                <path
                                    d="M11.5398 30.9546C11.153 30.9546 10.7821 30.801 10.5086 30.5275C10.2351 30.254 10.0815 29.883 10.0815 29.4963V22.8871C10.0815 22.5003 10.2351 22.1294 10.5086 21.8559C10.7821 21.5824 11.153 21.4288 11.5398 21.4288C11.9266 21.4288 12.2975 21.5824 12.571 21.8559C12.8445 22.1294 12.9981 22.5003 12.9981 22.8871V29.4963C12.9981 29.883 12.8445 30.254 12.571 30.5275C12.2975 30.801 11.9266 30.9546 11.5398 30.9546Z"
                                    fill="#9EA0AC"
                                />
                                <path
                                    d="M24.2492 17.5481C23.8624 17.5481 23.4915 17.3945 23.218 17.121C22.9445 16.8475 22.7908 16.4766 22.7908 16.0898V5.40749C22.7908 5.02072 22.9445 4.64978 23.218 4.37629C23.4915 4.1028 23.8624 3.94916 24.2492 3.94916C24.6359 3.94916 25.0069 4.1028 25.2804 4.37629C25.5539 4.64978 25.7075 5.02072 25.7075 5.40749V16.0898C25.7075 16.4766 25.5539 16.8475 25.2804 17.121C25.0069 17.3945 24.6359 17.5481 24.2492 17.5481Z"
                                    fill="#9EA0AC"
                                />
                                <path
                                    d="M24.2492 30.9546C23.8624 30.9546 23.4915 30.8009 23.218 30.5274C22.9445 30.254 22.7908 29.883 22.7908 29.4962V27.914C22.7908 27.5272 22.9445 27.1563 23.218 26.8828C23.4915 26.6093 23.8624 26.4556 24.2492 26.4556C24.6359 26.4556 25.0069 26.6093 25.2804 26.8828C25.5539 27.1563 25.7075 27.5272 25.7075 27.914V29.4962C25.7075 29.883 25.5539 30.254 25.2804 30.5274C25.0069 30.8009 24.6359 30.9546 24.2492 30.9546Z"
                                    fill="#9EA0AC"
                                />
                                <path
                                    d="M14.7831 14.9785H8.64937C8.16854 14.9785 7.77875 15.3683 7.77875 15.8491V17.9448C7.77875 18.4256 8.16854 18.8154 8.64937 18.8154H14.7831C15.264 18.8154 15.6537 18.4256 15.6537 17.9448V15.8491C15.6537 15.3683 15.264 14.9785 14.7831 14.9785Z"
                                    fill="#9EA0AC"
                                />
                                <path
                                    d="M27.3146 20.125H21.1808C20.7 20.125 20.3102 20.5148 20.3102 20.9956V23.0912C20.3102 23.5721 20.7 23.9619 21.1808 23.9619H27.3146C27.7954 23.9619 28.1852 23.5721 28.1852 23.0912V20.9956C28.1852 20.5148 27.7954 20.125 27.3146 20.125Z"
                                    fill="#9EA0AC"
                                />
                            </svg>
                        </ButtonFilter>
                    </SearchField>
                    <div style={{ marginTop: '16px', fontSize: '16px', color: 'var(--Gray-400)', fontWeight: 'bold' }}>ตัวกรอง ({contentData.content_type.length + contentData.tag.length})</div>
                    <TagBox style={{ fontWeight: 'bolder', marginBottom: '20px', marginTop: '0px' }}>
                        {contentData.content_type.map((item: any, index) => (
                            <div key={index} style={{ marginRight: '10px', marginBottom: '5px' }}>
                                <CustomCheckableTag key={index} checked={selectedCatagories.indexOf(item) > -1} onChange={(checked) => handleChangeCatagories(item, checked)}>
                                    {transalateToThai(item)}
                                    <div style={{ marginLeft: '3px', transform: 'translateY(1px)' }}>
                                        <CancleTag />
                                    </div>
                                </CustomCheckableTag>
                            </div>
                        ))}
                        {contentData.tag.map((item: any, index) => (
                            <div key={index} style={{ marginRight: '10px', marginBottom: '5px' }}>
                                <CustomCheckableTag style={{ fontWeight: 'normal' }} key={index} checked={selectedTags.indexOf(item) > -1} onChange={(checked) => handleChangeTag(item, checked)}>
                                    #{transalateToThai(item)}
                                    <div style={{ marginLeft: '3px', transform: 'translateY(1px)' }}>
                                        <CancleTag />
                                    </div>
                                </CustomCheckableTag>
                            </div>
                        ))}
                    </TagBox>
                    <BoardCardComponent data={tagFilterData} />
                </Box>
            </DrawerContainer>
            <CreateContentIcon onClick={() => history.push('/boardcreate')} />
        </Container>
    );
};
export default Filter;
