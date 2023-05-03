<template>
	<v-container class="wrapper" fluid>
		<!-- V-row es donde tengo que mirar lo de los pjs -->
		<v-row>
			<v-col>
				<v-card v-if="showpj" class="back2" height="500" width="100vw" flat>
					<v-img :src="solopj.imagen" class="imagen">
						<v-card-title>{{ solopj.name }}</v-card-title>
						<v-card-text>
							{{ solopj.nation }} <br>
						</v-card-text>
						<v-card-text class="description" v-if="showDescription">
							{{ solopj.description }}
						</v-card-text>
					</v-img>
				</v-card>
			</v-col>
		</v-row>
		<!-- Aqui es para trabajar con el carrusel -->
		<v-row class="mx-auto back">
			<v-col>
				<v-sheet class="mx-auto back" elevation="10" max-width="900">
					<v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
						<v-slide-group-item v-for="(personaje, n) in prueba" :key="n">
							<v-card width="110px" height="150px" class="pa-1 ml-2 mr-2 back3">
								<v-img :src="personaje.avatar" cover height="106" width="106"
									@click="characterfilter(personaje.name)"></v-img>
								<v-card-subtitle class="text">{{ personaje.name }}</v-card-subtitle>
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
			{ nation: "Mondstadt", img: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200211/2020021114281584004.jpg' },
			{ nation: "Liyue", img: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200526/2020052612332812636.jpg' },
			{ nation: "Inazuma", img: 'https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210715/2021071516524062780.jpg' },
			{ nation: "Sumeru", img: 'https://webstatic.hoyoverse.com/upload/contentweb/2022/08/15/04d542b08cdee91e5dabfa0e85b8995e_4692024198088601985.jpg' },

		],
		showDescription: false,
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
					this.showDescription = true
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
	width: 100%;
	z-index: 900;
	position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}

.back {
	background-color: rgba(0, 0, 0, 0.2);
	bottom: 10px;
	padding-bottom: 80px;
}

.back2 {
	background-color: rgba(0, 0, 0, 0);
	padding-left: 40px;
	padding-top: 40px;

}

.back3 {
	background: url(../assets/descargafondo.png)
}

.text {
	color: white;
	height: 40px;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	line-height: 22px;
	text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	text-align: center;
	font-family: Tahoma, Helvetica, Arial, sans-serif;
}

.description {
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	text-align: left;
	line-height: 26px;
	width: 455px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
	font-size: 16px; 
	background: rgba(1,1,1,0.5);
	color: white; 
	height: 130px; 
	overflow: auto;
}
</style>