import {
  AlertCircle,
  Bold,
  Droplet,
  Gift,
  HelpCircle,
  Home,
  Image,
  Link,
  MapPin,
  MessageCircle,
  Navigation,
  PieChart,
  Sidebar,
  Terminal,
  Type,
  Underline,
  User,
} from "react-feather";

export default [
  {
    path: "/",
    name: "Home",
    icon: <Home strokeWidth={1} size={16} />,
  },
  {
    name: "Nhà tuyển dụng",
    icon: <MessageCircle strokeWidth={1} size={16} />,
    children: [
      {
        path: "/admin/jobs",
        name: "Danh sách công việc",
      },
    ],
  },
  // {
  //   name: 'Apps',
  //   icon: <MessageCircle strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/base/apps/calendar',
  //       name: 'Calendar'
  //     },
  //     {
  //       path: '/base/apps/messages',
  //       name: 'Messages'
  //     },
  //     {
  //       path: '/base/apps/social',
  //       name: 'Social'
  //     },
  //     {
  //       path: '/base/apps/chat',
  //       name: 'Chat'
  //     }
  //   ]
  // },
  // {
  //   path: '/base/widgets',
  //   name: 'Widgets',
  //   icon: <Droplet strokeWidth={1} size={16} />,
  //   badge: {
  //     value: '5'
  //   }
  // },
  // {
  //   path: '/base/taskboard',
  //   name: 'Taskboard',
  //   icon: <Sidebar strokeWidth={1} size={16} />,
  //   badge: {
  //     value: 'New'
  //   }
  // },
  // {
  //   name: 'Charts',
  //   icon: <PieChart strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/base/charts/plots',
  //       name: 'Plots'
  //     },
  //     {
  //       path: '/base/charts/axes',
  //       name: 'Axes'
  //     },
  //     {
  //       path: '/base/charts/legends',
  //       name: 'Legends'
  //     },
  //     {
  //       path: '/base/charts/sunburst',
  //       name: 'Sunburst'
  //     },
  //     {
  //       path: '/base/charts/radial',
  //       name: 'Radial'
  //     },
  //     {
  //       path: '/base/charts/sankeys',
  //       name: 'Sankeys'
  //     },
  //     {
  //       path: '/base/charts/treemaps',
  //       name: 'Treemaps'
  //     },
  //     {
  //       path: '/base/charts/radar',
  //       name: 'Radar charts'
  //     },
  //     {
  //       path: '/base/charts/misc',
  //       name: 'Misc'
  //     }
  //   ]
  // },
  // {
  //   name: 'Media',
  //   icon: <Image strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/base/media/grid',
  //       name: 'Grid'
  //     },
  //     {
  //       path: '/base/media/tile',
  //       name: 'Tile'
  //     }
  //   ]
  // },
  // {
  //   name: 'Maps',
  //   icon: <MapPin strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/base/maps/markers',
  //       name: 'Markers'
  //     },
  //     {
  //       path: '/base/maps/geojson',
  //       name: 'Geo JSON'
  //     }
  //   ]
  // },
  // {
  //   name: 'Extras',
  //   icon: <Gift strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/base/extras/invoice',
  //       name: 'Invoice'
  //     },
  //     {
  //       path: '/base/extras/timeline',
  //       name: 'Timeline'
  //     },
  //     {
  //       path: '/base/extras/blank',
  //       name: 'Blank'
  //     },
  //     {
  //       path: '/base/extras/pricing',
  //       name: 'Pricing'
  //     }
  //   ]
  // },
  // {
  //   name: 'Authentication',
  //   icon: <User strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/base/signin',
  //       name: 'Signin'
  //     },
  //     {
  //       path: '/base/signup',
  //       name: 'Signup'
  //     },
  //     {
  //       path: '/base/forgot',
  //       name: 'Forgot'
  //     },
  //     {
  //       path: '/base/lockscreen',
  //       name: 'Lockscreen'
  //     }
  //   ]
  // },
  // {
  //   name: 'Error',
  //   icon: <AlertCircle strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/base/thisroutedoesntwork',
  //       name: '404'
  //     },
  //     {
  //       path: '/base/500',
  //       name: 'Error'
  //     }
  //   ]
  // },
  // {
  //   name: 'General elements',
  //   icon: <Bold strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/base/general/button',
  //       name: 'Button'
  //     },
  //     {
  //       path: '/base/general/icon',
  //       name: 'Icon'
  //     }
  //   ]
  // },
  // {
  //   name: 'Navigation',
  //   icon: <Navigation strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/base/navigation/breadcrumb',
  //       name: 'Breadcrumb'
  //     },
  //     {
  //       path: '/base/navigation/dropdown',
  //       name: 'Dropdown'
  //     },
  //     {
  //       path: '/base/navigation/menu',
  //       name: 'Menu'
  //     },
  //     {
  //       path: '/base/navigation/pagination',
  //       name: 'Pagination'
  //     },
  //     {
  //       path: '/base/navigation/steps',
  //       name: 'Steps'
  //     }
  //   ]
  // },
  // {
  //   name: 'Data entry',
  //   icon: <Type strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/base/data-entry/autocomplete',
  //       name: 'AutoComplete'
  //     },
  //     {
  //       path: '/base/data-entry/checkbox',
  //       name: 'Checkbox'
  //     },
  //     {
  //       path: '/base/data-entry/cascader',
  //       name: 'Cascader'
  //     },
  //     {
  //       path: '/base/data-entry/datepicker',
  //       name: 'Date picker'
  //     },
  //     {
  //       path: '/base/data-entry/form',
  //       name: 'form'
  //     },
  //     {
  //       path: '/base/data-entry/inputnumber',
  //       name: 'Input number'
  //     },
  //     {
  //       path: '/base/data-entry/input',
  //       name: 'Input'
  //     },
  //     {
  //       path: '/base/data-entry/mention',
  //       name: 'Mention'
  //     },
  //     {
  //       path: '/base/data-entry/rate',
  //       name: 'Rate'
  //     },
  //     {
  //       path: '/base/data-entry/radio',
  //       name: 'Radio'
  //     },
  //     {
  //       path: '/base/data-entry/switch',
  //       name: 'Switch'
  //     },
  //     {
  //       path: '/base/data-entry/slider',
  //       name: 'Slider'
  //     },
  //     {
  //       path: '/base/data-entry/select',
  //       name: 'Select'
  //     },
  //     {
  //       path: '/base/data-entry/treeselect',
  //       name: 'Tree select'
  //     },
  //     {
  //       path: '/base/data-entry/transfer',
  //       name: 'Transfer'
  //     },
  //     {
  //       path: '/base/data-entry/timepicker',
  //       name: 'Time picker'
  //     },
  //     {
  //       path: '/base/data-entry/upload',
  //       name: 'Upload'
  //     }
  //   ]
  // },
  // {
  //   name: 'Data display',
  //   icon: <Underline strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/base/data-display/avatar',
  //       name: 'Avatar'
  //     },
  //     {
  //       path: '/base/data-display/badge',
  //       name: 'Badge'
  //     },
  //     {
  //       path: '/base/data-display/collapse',
  //       name: 'Collapse'
  //     },
  //     {
  //       path: '/base/data-display/carousel',
  //       name: 'Carousel'
  //     },
  //     {
  //       path: '/base/data-display/card',
  //       name: 'Card'
  //     },
  //     {
  //       path: '/base/data-display/calendar',
  //       name: 'Calendar'
  //     },
  //     {
  //       path: '/base/data-display/list',
  //       name: 'List'
  //     },
  //     {
  //       path: '/base/data-display/popover',
  //       name: 'Popover'
  //     },
  //     {
  //       path: '/base/data-display/tree',
  //       name: 'Tree'
  //     },
  //     {
  //       path: '/base/data-display/tooltip',
  //       name: 'Tooltip'
  //     },
  //     {
  //       path: '/base/data-display/timeline',
  //       name: 'Timeline'
  //     },
  //     {
  //       path: '/base/data-display/tag',
  //       name: 'Tag'
  //     },
  //     {
  //       path: '/base/data-display/tabs',
  //       name: 'Tabs'
  //     },
  //     {
  //       path: '/base/data-display/table',
  //       name: 'Table'
  //     }
  //   ]
  // },
  // {
  //   name: 'Feedback',
  //   icon: <Terminal strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/base/feedback/alert',
  //       name: 'Alert'
  //     },
  //     {
  //       path: '/base/feedback/drawer',
  //       name: 'Drawer'
  //     },
  //     {
  //       path: '/base/feedback/modal',
  //       name: 'Modal'
  //     },
  //     {
  //       path: '/base/feedback/message',
  //       name: 'Message'
  //     },
  //     {
  //       path: '/base/feedback/notification',
  //       name: 'Notification'
  //     },
  //     {
  //       path: '/base/feedback/progress',
  //       name: 'Progress'
  //     },
  //     {
  //       path: '/base/feedback/popconfirm',
  //       name: 'Pop confirm'
  //     },
  //     {
  //       path: '/base/feedback/spin',
  //       name: 'Spin'
  //     },
  //     {
  //       path: '/base/feedback/skeleton',
  //       name: 'Skeleton'
  //     }
  //   ]
  // },
  // {
  //   path: 'https://one-readme.fusepx.com',
  //   name: 'Documentation',
  //   icon: <HelpCircle strokeWidth={1} size={16} />
  // },
  // {
  //   path: 'https://nyasha.me',
  //   name: 'Browse more templates',
  //   icon: <Link strokeWidth={1} size={16} />
  // }
];
