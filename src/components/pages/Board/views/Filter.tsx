import Container from 'components/Container/Container';
import { Box } from 'shared/style/theme/component';
import { ControlOutlined, SearchOutlined } from '@ant-design/icons';
import { ButtonFilter, SearchField, InputSearch, DrawerRadius, CustomCheckableTag, TagBox, Topic, ButtonUseFilter } from '../../Board/shared/Filter.styles';
import { useEffect, useState } from 'react';
import { ApiPostFilter } from '../apis/board.api';
import { BoardCard, CardText, CommentIcon, HeartIcon, HistoryImage, HistoryText, RowStyled } from 'components/pages/Profile/shared/Profile.styles';
import { Col, Row } from 'antd';
const Filter = () => {
    /*--------------------------------------------------------------------------------*/
    const [selectedCatagories, setSelectedCatagories] = useState<any>(Array);
    const [selectedTags, setSelectedTags] = useState<any>(Array);
    const [responseData , setResponseData] = useState<any | null >(null);
    const [contentData, setContentData] = useState<{ content_type: Array<string>; tag: Array<string> }>({
        content_type: [],
        tag: [],
    });

    const handleChangeCatagories = (tag: string, checked: boolean) => {
        setSelectedCatagories(checked ? [...selectedCatagories, tag] : selectedCatagories.filter((t: any) => t !== tag));
    };
    const handleChangeTag = (tag: string, checked: boolean) => {
        setSelectedTags(checked ? [...selectedTags, tag] : selectedTags.filter((t: any) => t !== tag));
    };

    useEffect(() => {
        setContentData({
            ...contentData,
            content_type: selectedCatagories,
            tag: selectedTags
        });
    }, [selectedCatagories , selectedTags]);

    async function filterContentData() {
        var res = await ApiPostFilter(contentData);
        setResponseData(res);
    }

    useEffect(() => {
        console.log('content data', contentData);
    }, [contentData]);

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
                <div style={{ paddingBottom: '24px', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', height: '60%' }}>
                    <ButtonUseFilter onClick={filterContentData}>กรอง</ButtonUseFilter>
                    {/* <ButtonUseFilter onClick={postContentData}>post</ButtonUseFilter> */}
                </div>
            </DrawerRadius>
            <Box style={{ marginLeft: '20px', marginRight: '20px' }} justify="flex-start" align="flex-start" direction="column">
                <SearchField>
                    <InputSearch onClick={onSearch} placeholder="Search Form" prefix={<SearchOutlined />} />
                    <ButtonFilter onClick={showDrawer}>
                        <ControlOutlined style={{ color: '#8a8888', fontSize: '24px' }} />
                    </ButtonFilter>
                </SearchField>
                {responseData? responseData.map((item: any, index: any) => {
                        return (
                            <BoardCard
                                key={index}
                                // onClick={history.pushState(`/board`)}
                            >
                                <RowStyled>
                                    <Col span={7}>
                                        <HistoryImage src={""} />
                                    </Col>
                                    <Col span={17}>
                                        <CardText>
                                            <Row>
                                                <HistoryText>{item.title}</HistoryText>
                                            </Row>
                                            <Row>
                                                <HistoryText>{item.content_body}</HistoryText>
                                            </Row>
                                            <Row>
                                                <Col span={2}>
                                                    <CommentIcon />
                                                </Col>
                                                <Col span={10}>
                                                    <HistoryText>{"name"}</HistoryText>
                                                </Col>
                                                <Col span={8}>
                                                    <HistoryText>{item.created_at}</HistoryText>
                                                </Col>
                                                <Col span={2}>
                                                    <HeartIcon />
                                                </Col>
                                                <Col span={2}>
                                                    <HistoryText>12</HistoryText>
                                                </Col>
                                            </Row>
                                        </CardText>
                                    </Col>
                                </RowStyled>
                            </BoardCard>
                        )
                    }):null}
            </Box>
        </Container>
    );
};
export default Filter;
