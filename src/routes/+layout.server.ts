import type { ShopItemType } from '$myTypes';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {

    // ...super heavy logic here
    const seo = getSeo();

    return {
        products,
        seo
    };
}) satisfies LayoutServerLoad;

const getSeo = () => ({
    title: 'Inmeta webshop',
    description: 'The best webshop in the world',
})

const products: ShopItemType[] = [
    {
        id: 0,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 970
    },
    {
        id: 1,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 343
    },
    {
        id: 2,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 192
    },
    {
        id: 3,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 575
    },
    {
        id: 4,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 448
    },
    {
        id: 5,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 737
    },
    {
        id: 6,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 680
    },
    {
        id: 7,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 878
    },
    {
        id: 8,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 921
    },
    {
        id: 9,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 188
    },
    {
        id: 10,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 647
    },
    {
        id: 11,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 477
    },
    {
        id: 12,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 960
    },
    {
        id: 13,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 321
    },
    {
        id: 14,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 489
    },
    {
        id: 15,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 542
    },
    {
        id: 16,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 775
    },
    {
        id: 17,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 896
    },
    {
        id: 18,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 735
    },
    {
        id: 19,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 209
    },
    {
        id: 20,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 498
    },
    {
        id: 21,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 896
    },
    {
        id: 22,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 428
    },
    {
        id: 23,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 330
    },
    {
        id: 24,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 215
    },
    {
        id: 25,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 953
    },
    {
        id: 26,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 135
    },
    {
        id: 27,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 998
    },
    {
        id: 28,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 148
    },
    {
        id: 29,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 728
    },
    {
        id: 30,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 872
    },
    {
        id: 31,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 976
    },
    {
        id: 32,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 788
    },
    {
        id: 33,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 803
    },
    {
        id: 34,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 839
    },
    {
        id: 35,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 745
    },
    {
        id: 36,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 416
    },
    {
        id: 37,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 834
    },
    {
        id: 38,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 379
    },
    {
        id: 39,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 839
    },
    {
        id: 40,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 807
    },
    {
        id: 41,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 364
    },
    {
        id: 42,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 537
    },
    {
        id: 43,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 294
    },
    {
        id: 44,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 767
    },
    {
        id: 45,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 447
    },
    {
        id: 46,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 240
    },
    {
        id: 47,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 889
    },
    {
        id: 48,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 960
    },
    {
        id: 49,
        description: 'Most beutiful tshirt ever. You will never regret buying it. It is the best tshirt in the world.',
        name: 'Orange tshirt',
        image: 'https://northstore.no/wp-content/uploads/2021/05/106-48_F.png',
        price: 833
    }
]