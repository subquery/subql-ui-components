// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Card } from './Card';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from '../typography';
import icon from '../../../assets/Card-logo.svg';

export default {
  title: 'General/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ ...args }) => (
  <div>
    <Card {...args}></Card>
  </div>
);

export const Default = Template.bind({});

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/sCAngiTf2mPOWPo9kcoEE7/SubQuery-Design-System?node-id=2260%3A11147&t=8RygzxK5chQ3vEnG-0',
  },
};

Default.args = {
  description: '0 SQT',
  cardTitle: { title: 'You are DELEGATING' },
};

export const tooltipCard = Template.bind({});
tooltipCard.args = {
  description: '0 SQT',
  cardTitle: { title: 'You are DELEGATING', tooltip: 'Delegating' },
};

export const tooltipIconCard = Template.bind({});
tooltipIconCard.args = {
  icon: icon,
  description: '0 SQT',
  cardTitle: { title: 'You are DELEGATING', tooltip: 'Delegating' },
};

export const tooltipIconDropdownCard = Template.bind({});
tooltipIconDropdownCard.args = {
  icon: icon,
  description: '0 SQT',
  cardTitle: { title: 'You are DELEGATING', tooltip: 'Delegating' },
  action: {
    items: [
      {
        label: '1st menu item',
        key: '1',
      },
      {
        label: '2nd menu item',
        key: '2',
      },
      {
        label: '3rd menu item',
        key: '3',
      },
    ],
    onClick: () => {
      alert('yes');
    },
  },
};

export const tooltipDropdownButtonCard = Template.bind({});
tooltipDropdownButtonCard.args = {
  description: '0 SQT',
  cardTitle: { title: 'You are DELEGATING', tooltip: 'Delegating' },
  button: {
    label: 'Delegate to an Indexer',
    onClick: () => {
      alert('yes');
    },
  },
  action: {
    items: [
      {
        label: '1st menu item',
        key: '1',
      },
      {
        label: '2nd menu item',
        key: '2',
      },
      {
        label: '3rd menu item',
        key: '3',
      },
    ],
    onClick: () => {
      alert('yes');
    },
  },
};