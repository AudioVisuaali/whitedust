export function buildsFetch() {
    return function(dispatch) {
        setTimeout(() => {
            dispatch({ type: "FETCH_BUILDS_FULLFILLED", payload: [
                {
                    id: 2323,
                    name: "Miikan kone",
                    picture: "https://images.jimms.fi/product/4/1/209148-b628486_300x300.jpg",
                    currency: "€",
                    totalAmount: 1523.22,
                    partList: [
                        {
                            name: "CPU",
                            title: "i7-8700K",
                            icon: "",
                            link: "",
                            price: 66.22
                        },
                        {
                            name: "GPU",
                            title: "nVidia GTX 1070Ti",
                            icon: "",
                            link: "",
                            price: 566.22
                        },
                        {
                            name: "RAM",
                            title: "HyperX 16gb ddr4",
                            icon: "",
                            link: "",
                            price: 566.22 
                        }
                    ]
                },
                {
                    id: 23345,
                    name: "Janin beast kone",
                    picture: "https://images.jimms.fi/product/4/1/209148-b628486_300x300.jpg",
                    currency: "€",
                    totalAmount: 849.35,
                    partList: [
                        {
                            name: "CPU",
                            title: "i7-8700K",
                            icon: "",
                            link: "",
                            price: 66.22
                        },
                        {
                            name: "GPU",
                            title: "nVidia GTX 1070Ti",
                            icon: "",
                            link: "",
                            price: 566.22
                        },
                        {
                            name: "RAM",
                            title: "HyperX 16gb ddr4",
                            icon: "",
                            link: "",
                            price: 566.22 
                        }
                    ]
                },
                {
                    id: 45328,
                    name: "Sykba blat",
                    picture: "https://images.jimms.fi/product/4/1/209148-b628486_300x300.jpg",
                    currency: "€",
                    totalAmount: 1128.22,
                    partList: [
                        {
                            name: "CPU",
                            title: "i7-8700K",
                            icon: "",
                            link: "",
                            price: 66.22
                        },
                        {
                            name: "GPU",
                            title: "nVidia GTX 1070Ti",
                            icon: "",
                            link: "",
                            price: 566.22
                        },
                        {
                            name: "RAM",
                            title: "HyperX 16gb ddr4",
                            icon: "",
                            link: "",
                            price: 566.22 
                        }
                    ]
                }
            ] })
        }, 500);
    }
}

export function buildsFetchStart(username, password) {
    return function(dispatch) {
        dispatch({ type: "FETCH_BUILDS" })
    }
}

export function buildFetchStart(username, password) {
    return function(dispatch) {
        dispatch({ type: "FETCH_BUILD" })
    }
}

export function buildFetch(buildId) {
    return function(dispatch) {
        setTimeout(() => {
            dispatch({ type: "FETCH_BUILD_FULLFILLED", payload: { 

                id: 2323,   
                name: "Miikan kone",
                picture: "https://images.jimms.fi/product/4/1/209148-b628486_300x300.jpg",
                currency: "€",
                totalAmount: 1523.22,
                partList: [
                    {
                        id: 234,
                        title: "i7-8700K",
                        info: "Intel Coffee Lake i7-8700K, LGA1151, 3.7 GHz, 12MB, Boxed",
                        icon: "https://images.jimms.fi/product/1/1/178318-b268519_300x300.jpg",
                        link: "https://www.jimms.fi/fi/Product/Show/134060/bx80684i78700k/intel-coffee-lake-i7-8700k-lga1151-3_7-ghz-12mb-boxed",
                        price: 359.90
                    },
                    {
                        id: 434,
                        title: "GTX 1070 Ti",
                        info: "Asus GeForce GTX 1070 Ti STRIX A -näytönohjain, 8GB GDDR5",
                        icon: "https://images.jimms.fi/product/0/8/180401-b181443_300x300.jpg",
                        link: "https://www.jimms.fi/fi/Product/Show/135386/strix-gtx1070ti-a8g-gaming/asus-geforce-gtx-1070-ti-strix-a-naytonohjain-8gb-gddr5",
                        price: 611.90
                    },
                    {
                        id: 2342,
                        title: "16GB (2x8GB) DDR4 2666MHz",
                        info: "Kingston 16GB (2x8GB) Hyper X Fury, DDR4 2666MHz, CL16, 1.20V, Musta",
                        icon: "https://images.jimms.fi/product/5/8/166051-b259343_300x300.jpg",
                        link: "https://www.jimms.fi/fi/Product/Show/130353/hx426c16fb2k2-16/kingston-16gb-2x8gb-hyper-x-fury-ddr4-2666mhz-cl16-1_20v-musta",
                        price: 189.22 
                    }
                ]

             } })
        }, 500);
    }
}