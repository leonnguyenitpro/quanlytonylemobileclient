import { MobileMenuItem } from '../../model/mobile-menu-item';
import { USER_ROLE } from './common';

export const KAI_MENU_ITEMS: MobileMenuItem[] = [
    {
        title: 'Kai',
        group: true,
    },
    {
        title: 'Customers',
        link: '/pages/kai/customers',
    },
];

export const MENU_ITEMS: MobileMenuItem[] = [
    {
        title: 'Quán',
        group: true,
    },
    {
        title: 'Quản Lý Mua Hàng',
        icon: 'shopping-cart-outline',
        link: '/pages/tables/danhsachsanpham',
        home: true,
        children: [
            {
                title: 'Sản Phẩm',
                link: '/pages/tables/danhsachsanpham',
            },
            {
                title: 'Sản Phẩm Đã Bán',
                link: '/pages/tables/quanlydanhsachsanphamdaban',
            },
            {
                title: 'Danh Sách Đơn Hàng',
                link: '/pages/tables/quanlydanhsachdonhang',
            },

        ],
    },
    {
        title: 'Quản Lý Thu Chi',
        icon: 'grid-outline',
        roles: [USER_ROLE.ADMIN],
        // hidden: localStorage.getItem('role') != 'admin',
        children: [
            {
                title: 'Quản Lý Thu',
                link: '/pages/tables/quanlythu',
            },
            {
                title: 'Quản Lý Chi',
                link: '/pages/tables/quanlychi',
            },
            {
                title: 'Quản Lý Tổng Thu Chi',
                link: '/pages/tables/quanlythuchi',
            },
        ],
    },
    {
        title: 'Thống Kê & Báo Cáo',
        icon: 'pie-chart-outline',
        children: [
            {
                title: 'Echarts (Tham khảo lựa mẫu)',
                link: '/pages/charts/echarts',
            },
            {
                title: 'Charts.js (Tham khảo lựa mẫu)',
                link: '/pages/charts/chartjs',
            },
            {
                title: 'Thống Kê',
                link: '/pages/charts/d3',
            },
            {
                title: 'Báo Cáo Thuế',
                link: '/pages/tables/baocaothue',
            },
        ],
    },
    {
        title: 'Quản Lý Cấu Hình Máy',
        icon: 'grid-outline',
        roles: [USER_ROLE.ADMIN],
        // hidden: localStorage.getItem('role') != 'admin',
        children: [
            {
                title: 'Quản Lý Nhóm Sản Phẩm',
                link: '/pages/tables/nhomsanpham',
            },
            {
                title: 'Quản Lý Tên Sản Phẩm',
                link: '/pages/tables/tensanpham',
            },
            {
                title: 'Quản Lý Dung Lượng',
                link: '/pages/tables/dungluong',
            },
            {
                title: 'Quản Lý Loại Sản Phẩm',
                link: '/pages/tables/loaisanpham',
            },
            {
                title: 'Quản Lý Màu Sắc',
                link: '/pages/tables/mau',
            },
            {
                title: 'Quản Lý Phiên Bản',
                link: '/pages/tables/phienban',
            },
            {
                title: 'Quản Lý Danh Sách Sản Phẩm',
                link: '/pages/tables/quanlydanhsachsanpham',
            },
        ],
    },
];

export const ADMIN_MENU_ITEMS: MobileMenuItem[] = [
    {
        title: 'Admin',
        group: true,
        roles: [USER_ROLE.ADMIN],
    },
];

export const GENERAL_MENU_ITEMS: MobileMenuItem[] = [
    {
        'title': 'General',
        group: true,
    },
    {
        title: 'Đăng Nhập',
        icon: 'lock-outline',
        link: '/pages/tables/login',
        roles: null,
        // hidden: localStorage.getItem('role') != null,
    },
    {
        title: 'Đổi Mật Khẩu',
        icon: 'lock-outline',
        link: '/pages/tables/changepass',
        roles: null,
        // hidden: localStorage.getItem('role') != null,
    },
    {
        title: 'Đăng Xuất',
        icon: 'lock-outline',
        link: '/pages/tables/logout',
        roles: null,
        // hidden: localStorage.getItem('role') != null,
    },
];
