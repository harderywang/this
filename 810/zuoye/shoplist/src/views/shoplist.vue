<template>
    <div class="shoplist">
         <div v-for="(item,index) in shoplist" :key='index' class="shoplist_item" :data-Id="item.Id" :data-type_one="item.type_one">
            <img :src="item.img_list_url" alt="">
            <h2>{{item.title}}</h2>
            <div class="shoplist_price">
                <div class="price">￥{{item.price}}</div>
                <div class="price-pre" v-html="item.mack">{{item.mack}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['shoplist']
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
html{
    font-size: 100px;
}
body{
    font-size: 16px;
}
ul,li{
    list-style: none;
}
a{
    text-decoration: none;
    color: #333333;
}
input,button{
    outline: none;
}

/* main */
.main{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}


/* lunbo */
.lunbo{
    width: 12rem;
    height: 5rem;
    margin: 0 auto;
    border-radius: 0.2rem;
    overflow: hidden;
    position: relative;
    
}
.lunbo_father{
    width: 72rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-12rem,0);
}
.lunbo img{
    width: 12rem;
    height: 5rem;
}
.contr{
    width: 100%;
    height: 0.5rem;
    font-size: 0.2rem;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#pre{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: rgba(128, 0, 128, 0.596);
    text-align: center;
    line-height: 0.5rem;
    position: absolute;
    top: 50%;
    left: -0.5rem;
    transition: all 0.5s;
}
#next{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: rgba(128, 0, 128, 0.596);
    text-align: center;
    line-height: 0.5rem;
    position: absolute;
    top: 50%;
    right: -0.5rem;
    transition: all 0.5s;
}

.shoplist{
    width: 13rem;
    margin: 0.1rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
}
.shoplist>p{
    width: 2.2rem;
    height: 2.7rem;
}
.shoplist_item{
    width: 2.2rem;
    height: 2.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
.shoplist_item h2{
    width: 100%;
    font-size: 16px;
    font-weight: 600;
}
.shoplist_item img{
    width: 2.2rem;
    height: 2.2rem;
}
.shoplist_price{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.price{
    color: #ff4500;
    font-weight: 600;
}

</style>