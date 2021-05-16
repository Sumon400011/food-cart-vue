<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top py-0">
		<a class="navbar-brand" href="#">Navbar</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarColor03">
			<ul class="navbar-nav mx-auto">
			<li class="nav-item active">
					<a class="nav-link" href="#">Menu
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Offers</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">My Orders</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Plans</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Contact</a>
				</li>
			</ul>

			<button 
			class="btn btn-danger shadow-none mx-2" 
			id="cart-btn"
			@click="cartActive()">
				<span>
					<font-awesome-icon :icon="['fas', 'shopping-cart']" />
					<sub class="ml-1" id="cart_num">{{ getCart.length }}</sub>
				</span>
			</button>
				<!-- <button class="btn btn-danger mr-2"  data-toggle="modal" data-target="#signin-modal">Login</button>
				<button class="btn btn-danger" data-toggle="modal" data-target="#signup-modal">Signup</button> -->
		</div>
	</nav>
</template>

<script>
export default {
	data(){
		return{
			
		}
	},
    methods:{
		cartActive(){
			this.$store.commit('cartActive', this.$store.state.isActive)
		}
	},
	computed:{
		getCartActive(){
			return this.$store.state.isActive
		},
		getCart(){
			return this.$store.getters.getCart
		}
	}
}
</script>