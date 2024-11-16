import React, { useState } from 'react';
import CoverSection from '../Shares/CoverSection/CoverSection';
import orderImg from '../../assets/shop/order.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const Oder = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert','drinks', 'offered' ];
    const {category} = useParams();
    console.log(category)
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu();
    const salad = menu.filter(item =>item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <CoverSection img={orderImg} title='Our Shop' details='Would you like to try a dish' />
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                    <Tab>Offered</Tab>
                </TabList>
                <TabPanel>
                   <OrderTab item={salad} />
                </TabPanel>
                <TabPanel>
                <OrderTab item={pizza} />
                </TabPanel>
                <TabPanel>
                <OrderTab item={soup} />
                </TabPanel>
                <TabPanel>
                <OrderTab item={dessert} />
                </TabPanel>
                <TabPanel>
                <OrderTab item={drinks} />
                </TabPanel>
                <TabPanel>
                <OrderTab item={offered} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Oder;