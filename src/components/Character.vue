<template>
	<v-container class="wrapper" fluid :style="backgroundStyle">
		<!-- V-row es donde tengo que mirar lo de los pjs -->
		<v-row>
			<v-col>
				<v-card v-if="showpj" class="back2" height="500" width="200vh" flat>
					<v-img :src="solopj.imagen" class="imagen">
						<v-card-title class="custom-title">
							{{ solopj.name }}
						</v-card-title>
						<v-card-text class="custom-subtitle">
							{{ solopj.weapon }} <br>
						</v-card-text>
						<v-card-text class="description" v-if="showDescription">
							{{ solopj.description }}
						</v-card-text>
            <v-img :src="solopj.vision" class="imagenvision"></v-img>
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
		amulet: "",
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
					this.amulet = personaje.vision
					this.showDescription = true
				}
			})
			return response
		},
	},
	computed: {
		backgroundStyle() {
			const nation = this.solopj.nation;
			const selectedNation = this.nations.find((el) => el.nation === nation);
			const backgroundImage = selectedNation ? selectedNation.img : this.nations[0].img;
			return {
				background: `url(${backgroundImage})`,
			};
		},
	},
}

</script>

<style lang="scss" scoped>
.wrapper {
	background: url(https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200211/2020021114281584004.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
}

.back {
	background-color: rgba(0, 0, 0, 0.2);
	margin-top: -10px;
	padding-bottom: 10px;
	margin-bottom: 10px;
}

.back2 {
	background-color: rgba(0, 0, 0, 0);
	padding-top: 47px;

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
	background: rgba(1, 1, 1, 0.5);
	color: white;
	height: 130px;
	overflow: auto;
}

.imagen {
	position: relative;
	width: 1600px;
	height: 1400px;
	overflow: hidden;
	padding-top: 100px;
	background: url(https://genshin.hoyoverse.com/_nuxt/img/6c9d197.png);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	width: 100%;
}

.imagenvision {
	position: relative;
	height: 200px;
	opacity: 0.1;
	left: calc(20% - 20vh);
	top: calc(70% - 70vh);
	margin-top: -10px;
	padding-bottom: 150px;
	width: 70vh;
}

.custom-title {
	width: 70vh;
	font-size: 30px;
	margin-top: 20px;
	color: white;
	text-transform: uppercase;
}
.custom-subtitle {
	width: 70vh;
	font-size: 20px;
	margin-top: 10px;
	color: white;
}
</style>