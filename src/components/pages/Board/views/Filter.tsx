import Container from 'components/Container/Container';
import { Box } from 'shared/style/theme/component';
import Typography from 'shared/style/theme/Typograhy';
import { ControlOutlined , SearchOutlined} from '@ant-design/icons';
import { ButtonFilter , SearchField , InputSearch , DrawerRadius} from '../../Board/shared/Filter.styles';
import { IIconText } from 'components/pages/Home/shared/home.interface';
import React, { useState } from 'react';
import { Input } from 'antd';
const Filter = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [placement, setPlacement] = useState<string>('bottom');
    const { Search } = Input;
    const onSearch = (value: any) => console.log(value);
    const IconText = ({ icon, text }: IIconText) => (
        <SearchField>
            {React.createElement(icon)}
            {text}
        </SearchField>
    );
    const showDrawer = () => {
        setVisible(true);
      };
    
      const onClose = () => {
        setVisible(false);
      };
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
            title="Privacy Policy"
            placement="bottom"
            closable={false}
            onClose={onClose}
            visible={visible}
            key={placement}
            getContainer={false}
            height={650}
            style={{ position: 'absolute', overflowY: 'hidden' }}
          ></DrawerRadius>
                <SearchField>
                    <InputSearch onClick={onSearch} placeholder="Search Form" prefix={<SearchOutlined />} />
                    <ButtonFilter onClick={showDrawer}><ControlOutlined style={{ color: '#8a8888', fontSize: '24px' }}/></ButtonFilter>
                </SearchField>
            </Box>
        </Container>
    );
};
export default Filter;
