let arr_apple = [
    {
        name: `iPhone X`,
        capacity: `64GB`,
        color: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-finish-gold-2021?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=80&amp;.v=1629940690000`,
        price: `250$`,
        amount: `0`,
        img: `https://images-na.ssl-images-amazon.com/images/I/41xKY5Jy32L.jpg`
    },
    {
        name: `iPhone X`,
        capacity: `256GB`,
        color: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-black-201909?wid=96&amp;hei=96&amp;fmt=jpeg&amp;qlt=80&amp;.v=1566845576613`,
        price: `300$`,
        amount: `2`,
        img: `https://mobilecity-live.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2021/01/01013825/G14-3-scaled-e1616624699987-600x600.jpg`
    },
    {
        name: `iPhone 11`,
        capacity: `64GB`,
        color: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-black-201909?wid=96&amp;hei=96&amp;fmt=jpeg&amp;qlt=80&amp;.v=1566845576613`,
        price: `400$`,
        amount: `7`,
        img: `https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-11/iphone-11-black.jpg`
    },
    {
        name: `iPhone 11pro`,
        capacity: `128GB`,
        color: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-finish-silver-2021?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=80&amp;.v=1629940690000`,
        price: `450$`,
        amount: `10`,
        img: `https://apollo-olx.cdnvideo.ru/v1/files/hun3wj7wiuj12-UZ/image;s=644x461`
    },
    {
        name: `iPhone 11 Pro Max`,
        capacity: `512GB`,
        color: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-finish-gold-2021?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=80&amp;.v=1629940690000`,
        price: `500$`,
        amount: `5`,
        img: `https://fonefly.co.nz/wp-content/uploads/2020/12/20200502_090143-rotated.jpg`
    },
    {
        name: `iPhone 12`,
        capacity: `128GB`,
        color: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-blue-202010?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=80&amp;.v=1601072988000`,
        price: `470$`,
        amount: `7`,
        img: `https://assets.swappie.com/swappie-product-iphone-12-blue.png`
    },
    {
        name: `iPhone 12 mini`,
        capacity: `64GB`,
        color: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-purple-202104?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=80&amp;.v=1617243599000`,
        price: `450$`,
        amount: `4`,
        img: `https://www.independent.ie/business/technology/555ff/40373337.ece/AUTOCROP/w620/7704792D-8B8B-40B7-A04B-86B31057658A.jpeg`
    },
    {
        name: `iPhone 12 Pro Max`,
        capacity: `256GB`,
        color: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-black-202010?wid=102&amp;hei=102&amp;fmt=jpeg&amp;qlt=95&amp;.v=1601072988000`,
        price: `700$`,
        amount: `9`,
        img: `https://www.techadvisor.com/cmsdata/features/3797752/iphone_12_pro_max_pre-order_black_friday_discount_thumb900_1-1.jpg`
    },
    {
        name: `iPhone 13 Pro Max`,
        capacity: `1TB`,
        color: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-finish-green-202203?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=80&amp;.v=1645149891269`,
        price: `1550$`,
        amount: `13`,
        img: `https://fdn.gsmarena.com/imgroot/news/22/03/iphone-13-alpine-green-colors/gallery/-600/gsmarena_003.jpg`
    },
    {
        name: `iPhone 13 mini`,
        capacity: `128GB`,
        color: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-red-202010?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=80&amp;.v=1601072989000`,
        price: `840$`,
        amount: `5`,
        img: `https://www.iphones.ru/wp-content/uploads/2021/09/Cover-1.jpg`
    },
    {
        name: `iPhone 13 Pro`,
        capacity: `512GB`,
        color: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-finish-blue-2021?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=80&amp;.v=1629940690000`,
        price: `990$`,
        amount: `6`,
        img: `https://cdn.mos.cms.futurecdn.net/RBjrbG4erUjLN3zXVSfv7W.jpg`
    },
    {
        name: `iPhone SE`,
        capacity: `64GB`,
        color: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-red-201902?wid=96&amp;hei=96&amp;fmt=jpeg&amp;qlt=80&amp;.v=1550604659296`,
        price: `520$`,
        amount: `0`,
        img: `https://www.iphones.ru/wp-content/uploads/2022/03/iphone-se-copy_17s1.jpg`
    },
]


// item

function items(param) {
    for (let element of param) {
        let wrapper = document.querySelector(`.wrapper`)
        let item = document.createElement(`div`)
        let info = document.createElement(`div`)
        let text_1 = document.createElement(`div`)
        let text_2 = document.createElement(`div`)
        let text_3 = document.createElement(`div`)
        let text_4 = document.createElement(`div`)
        let text_5 = document.createElement(`div`)
        let img = document.createElement(`img`)
        let img_color = document.createElement(`img`)
        let p_name = document.createElement(`span`)
        let p_capacity = document.createElement(`span`)
        let p_price = document.createElement(`span`)
        let p_color = document.createElement(`span`)
        let p_amount = document.createElement(`span`)
        let b_name = document.createElement(`b`)
        let b_capacity = document.createElement(`b`)
        let b_price = document.createElement(`b`)
        let b_amount = document.createElement(`b`)
        let btn_buy = document.createElement(`button`)

        wrapper.prepend(item)
        item.prepend(img, info)
        item.classList.add(`item`)
        info.classList.add(`description`)
        img_color.classList.add(`color`)
        info.prepend(text_1, text_2, text_3, text_4, text_5, btn_buy)
        text_1.prepend(p_name, b_name)
        text_2.prepend(p_capacity, b_capacity)
        text_3.prepend(p_color, img_color)
        text_4.prepend(p_amount, b_amount)
        text_5.prepend(p_price, b_price)


        p_name.innerHTML = `Name:`
        p_capacity.innerHTML = `Capacity:`
        p_price.innerHTML = `Price:`
        p_amount.innerHTML = `Amount:`
        p_color.innerHTML = `Color:`
        img.setAttribute(`src`, element.img)
        img_color.setAttribute(`src`, element.color)

        b_name.innerHTML = element.name
        b_capacity.innerHTML = element.capacity
        b_price.innerHTML = element.price
        b_amount.innerHTML = element.amount

        btn_buy.innerHTML = `Buy`

        if (element.amount == 0) {
            btn_buy.classList.add(`active`)
            btn_buy.onclick = () => {
                b_amount.classList.add(`amount_0`)
                setInterval(() => {
                    b_amount.classList.add(`amount_0_2`)
                }, 1000);
            }
        } else if (element.amount <= 5) {
            btn_buy.classList.add(`active_2`)

            let red_line = document.createElement(`div`)
            let p_new_price = document.createElement(`p`)
            let b_new_price = document.createElement(`b`)
            text_5.append(p_new_price, b_new_price, red_line)
            red_line.classList.add(`red-line`)
            let new_price = Math.round(Math.random() * 15)
            p_new_price.innerHTML = `New price:`
            b_new_price.innerHTML = `${Math.round(+element.price.slice(0, -1) + (element.price.slice(0, -1) * new_price / 100))}$`

        } else if (element.amount > 5) {
            btn_buy.classList.add(`active_3`)
            let p_sale_price = document.createElement(`p`)
            let b_sale_price = document.createElement(`b`)
            let red_line = document.createElement(`div`)
            let sale = document.createElement(`div`)
            let b_sale = document.createElement(`b`)
            let sale_price = Math.round(Math.random() * 25)
            p_sale_price.innerHTML = `Sale:`
            b_sale_price.innerHTML = `${Math.round(element.price.slice(0, -1) - (element.price.slice(0, -1) * sale_price / 100))}$`

            red_line.classList.add(`red-line`)
            sale.classList.add(`sale`)
            b_sale.innerHTML = `${sale_price}%`
            text_5.append(p_sale_price, b_sale_price, red_line, sale)
            sale.prepend(b_sale)
        }


    }
}


items(arr_apple)