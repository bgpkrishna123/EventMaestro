import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const NavDropdownItem = ({ title, items }) => (
    <NavDropdown title={title} id={`${title.toLowerCase().replace(/ /g, '-')}-dropdown`}>
        {items.map((item, index) => (
            item.items ? (
                <NavDropdownItem key={index} title={item.title} items={item.items} />
            ) : (
                <NavDropdown.Item key={index} href={item.link}>
                    {item.title}
                </NavDropdown.Item>
            )
        ))}
    </NavDropdown>
);

export default NavDropdownItem;
