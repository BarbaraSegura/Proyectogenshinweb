<template>
    <v-row>
        <v-col>
            <v-select v-model="selectedNation" :items="nations.map(n => n.nation)" label="Nation"></v-select>
            <v-btn @click="filterByNation">Filter</v-btn>
        </v-col>
    </v-row>
</template>

<script>
import nombre from '../services/api'
import Character from '@/components/Character.vue'

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
		filteredCharacters: [],
	}),
	async created() {
		const personaje = await nombre.getCharacters();
		this.prueba = personaje;
		this.filteredCharacters = personaje;
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
		filterCharactersByNation(nation) {
			if (nation === 'all') {
				this.filteredCharacters = this.prueba;
			} else {
				this.filteredCharacters = this.prueba.filter((personaje) => personaje.nation === nation);
			}
		}
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

<style lang="scss" scoped></style>