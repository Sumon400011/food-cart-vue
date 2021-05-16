<template>
    <div class="cart-sidebar card" 
		:class="{ cart_sidebar_toggle: getCartActive}"
		id="cart-sidebar">
		<div class="d-flex mb-2">
			<div><button class="btn btn-sm btn-close btn-outline-dark" @click="closeCartSidebar">x</button></div>
		</div>
		<div class="card-header p-0"></div>

		<div class="card-body px-0">
			<div class="cart-container d-flex mb-2"
				v-for="(item, index) in getCart" :key="item.itemId">
				<div class="media cart-item flex-fill align-items-center">
					<img :src="item.img">
					<div class="media-body ml-2">
						<p class="mb-1"><strong>{{item.itemName}}</strong></p>
						<p class="mb-1"><span class="font-weight-bold">{{item.itemPrice}}</span></p>
						<span class="remove_item text-danger remove_btn" @click="removeItem(index)">Remove</span>
					</div>
				</div>
				<div class="d-flex flex-column justify-content-center align-items-center">
					<span class="increase-item">
						<!-- <i class="fas fa-chevron-up"></i> -->
						<font-awesome-icon :icon="['fas', 'chevron-up']" @click="counter++"/>
					</span>
					<p class="item-amount mb-0">{{ counter }}</p>
					<span class="decrease-item">
						<!-- <i class="fas fa-chevron-down"></i> -->
						<font-awesome-icon :icon="['fas', 'chevron-down']" @click="counter--"/>
					</span>
				</div>
			</div>
		</div>

		<div class="card-footer text-center p-2 bg-transparent">
			<button class="load-more-btn cart_total btn btn-lg text-uppercase rounded-0 px-5">Total: {{ totalAmount.toFixed(1) }}<span class="total">0</span></button>
		</div>
	</div>
</template>

<script>
    export default {
		data(){
			return{
				counter: 1
			}
		},
		methods:{
			closeCartSidebar(){
				this.$store.commit('cartActive', this.$store.state.isActive)
			},
			removeItem(index){
				this.$store.commit('removeCartItem', index)
			}
		},
		computed:{
			getCartActive(){
				return this.$store.state.isActive
			},
			getCart(){
				return this.$store.getters.getCart
				// var tempCart = this.$store.getters.getCart.map((element)=>{
				// 	element 
				// })
				
			},
			totalAmount(){
				var total = 0
				this.getCart.forEach(element => {
					total += parseFloat(element.itemPrice)
				});
				return total
			}
		}
	}
</script>
