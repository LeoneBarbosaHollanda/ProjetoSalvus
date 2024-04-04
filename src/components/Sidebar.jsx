import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Link as RouterLink } from 'react-router-dom';
import {
    SidebarPusher,
    SidebarPushable,
    MenuItem,
    GridColumn,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
} from 'semantic-ui-react';

const Sidebar = () => {
    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    };

    return (
        <Grid columns={1}>


            <GridColumn>
                <SidebarPushable as={Segment}>
                    <Menu
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={() => setVisible(false)}
                        vertical
                        width='thin'
                    >
                        <MenuItem as='a'>
                            <Icon name='home' />
                            <RouterLink to="/" onClick={onClose}>Home</RouterLink>
                        </MenuItem>
                        <MenuItem as='a'>
                            <Icon name='exchange' />
                            <RouterLink to="/Trade" onClick={onClose}>Trocas</RouterLink>
                        </MenuItem>
                        <MenuItem as='a'>
                            <Icon name='camera' />
                            <RouterLink to="/pokemon" onClick={onClose}>Pokemon</RouterLink>
                        </MenuItem>
                        <MenuItem as='a'>
                            <Icon name='user' />
                            <RouterLink to="/Trainer" onClick={onClose}>Treinador</RouterLink>
                        </MenuItem>
                    </Menu>
                </SidebarPushable>
            </GridColumn>
        </Grid>
    );
};

export default Sidebar;
