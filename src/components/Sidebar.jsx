// Sidebar.js
import React from 'react';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Sidebar.module.sass'; // Assuming Sass modules

function Sidebar({ isOpen, onClose }) {
    return (
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
            <DrawerOverlay />
            <DrawerContent className={styles.content}>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                    <VStack spacing={4} align="flex-start">
                        <Link as={RouterLink} to="/" onClick={onClose}>
                            Home
                        </Link>
                        <Link as={RouterLink} to="/Trainer" onClick={onClose}>
                            Trainer
                        </Link>
                        <Link as={RouterLink} to="/Trade" onClick={onClose}>
                            Trade
                        </Link>
                        <Link as={RouterLink} to="/Pokemon" onClick={onClose}>
                            Pokemon
                        </Link>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default Sidebar;