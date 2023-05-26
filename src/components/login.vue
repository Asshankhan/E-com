<template>
<div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login" @submit.prevent="login()">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input v-model="userDataBag.username" type="text" class="login__input" placeholder="User name">
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input v-model="userDataBag.password" type="password" class="login__input" placeholder="Password">
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</template>

<script>
export default {
  data() {
    return {
        userDataBag: {
            username: this.username,
            password: this.password
        }
    };
  },
  methods: {
    login() {
     let user = {
         'username': this.userDataBag.username,
        'password': this.userDataBag.password
      }
      this.$store.dispatch("login", user).then((response) => {
        this.userDataBag = response.data;
        this.status = response.status;
        if (this.status == '200') {
       this.$router.push('/cart');
      }
        localStorage.setItem("token", response.data.token);
      });
    }
  }
};
</script>