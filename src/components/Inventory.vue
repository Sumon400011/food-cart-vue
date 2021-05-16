<template>
    <div class="row">
        <div v-for="(item, index) in inventory" class="col-md-6 col-sm-12" :key="index">
            <div class="single_delicious d-flex">
                <div class="thum">
                    <img :src="item.img" class="img-fluid">
                    <div class="tag available">Available</div>
                </div>
                <div class="info w-100 ml-lg-2 d-flex flex-column justify-content-between">
                    <div>
                        <h5>
                            <b class="name">{{item.itemName}}</b>
                            <b class="color-primary float-right">$ {{item.itemPrice}}</b>
                        </h5>
                        <p class="pr-5 mr-2 mb-0"><b>Ingredients:</b> {{item.itemDescription}}</p>
                    </div>
                    <div class="text-right">
                        <button 
                        @click="addToCart(item)"
                        class="btn btn-sm shodow-none btn-danger add_to_cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods:{
            addToCart(item){
                this.$store.commit('addCartItems', item)

                // if(item.itemId  === this.$store.getters.getCart)
            }
        },
        computed:{
            inventory(){
                return this.$store.getters.getItems
            }

        }
    }
</script>
