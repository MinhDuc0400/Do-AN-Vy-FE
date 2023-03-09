import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'In Out List',
    icon: 'list-outline',
    link: '/pages/in-out-list',
  },
  {
    title: 'Payment',
    icon: 'diagonal-arrow-left-down-outline',
    link: '/pages/payment',
  },
  {
    title: 'Door Management',
    icon: 'options-outline',
    link: '/pages/admin',
  },
  {
    title: 'User Management',
    icon: 'person-outline',
    link: '/pages/user',
    hidden: localStorage.getItem('userType') === 'user',
  },
  {
    title: 'Statistic',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Vehicle',
        link: '/pages/statistic/vehicle',
      },
      {
        title: 'Profit',
        link: '/pages/statistic/profit',
      },
    ],
  },
  {
    title: 'Pre Paid',
    icon: 'credit-card-outline',
    link: '/pages/pre-paid',
  },
];
