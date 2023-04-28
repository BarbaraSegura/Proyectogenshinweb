<template>
	<v-container class="wrapper" fluid>
		<!-- V-row es donde tengo que mirar lo de los pjs -->
		<v-row>
			<v-col>
				<v-card v-if="showpj" class="back2" height="500" width="100vw" flat>
					<v-img :src="solopj.imagen">
						<v-card-title>{{ solopj.name }}</v-card-title>
						<v-card-text>
							{{ solopj.nation }} <br>
						</v-card-text>
						<v-card-text>
							{{ solopj.description }}
						</v-card-text>
					</v-img>
				</v-card>
			</v-col>
		</v-row>
		<!-- Aqui es para trabajar con el carrusel -->
		<v-row class="mx-auto back">
			<v-col>
				<v-sheet class="mx-auto back" elevation="8" max-width="800">
					<v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
						<v-slide-group-item v-for="(personaje, n) in prueba" :key="n">
							<v-card width="120px" class="pa-1 ml-2 mr-2">
								<v-img :src="personaje.avatar" cover height="106" width="106"
									@click="characterfilter(personaje.name)"></v-img>
								<v-card-subtitle>{{ personaje.name }}</v-card-subtitle>
							</v-card>
						</v-slide-group-item>
					</v-slide-group>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import nombre from '../services/api'
import FichaPersonaje from './FichaPersonaje.vue';


export default {
	data: () => ({
		model: null,
		prueba: [],
		showpj: true,
		solopj: {},
		name: "",
		country: "",
		nations: [
			{nation:"Mondstadt", img:'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200211/2020021114281584004.jpg'},
			{nation:"Liyue", img:'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200526/2020052612332536813.jpg'}
		]
	}),
	async created() {
		const personaje = await nombre.getCharacters();
		this.prueba = personaje;
	},
	methods: {
		characterfilter(name) {
			console.log(name)
			this.showpj = true
			const response = this.prueba.filter((personaje) => {
				if (personaje.name === name) {
					this.solopj = personaje
					this.country = personaje.nation
				}
			})
			//this.nationBack()
			return response
		},
		/* nationBack() {
			console.log(this.country)
			return this.nations.filter((el)=> {
				console.log(el) 
				if(el.nation.toUpperCase()===this.country.toUpperCase()) {
					return {
						"background": `url(${el.img})`
					}
				}
				else {
					return {
						"background": `url(https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200211/2020021114281584004.jpg)`
					}
				}
			})
		} */
	},
	computed: {
		backGround() {
			console.log(this.solopj.imagen)
			return {
				"background": `url(${this.solopj.imagen})`
			}
		},
		
	},
	components: { FichaPersonaje }
}


</script>

<style lang="scss" scoped>
.wrapper {
	background: url(https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200211/2020021114281584004.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
}

.back {
	background-color: rgba(0, 0, 0, 0.2);
	bottom: 20px;
}
.back2 {
	background-color: rgba(0, 0, 0, 0);
}
</style>