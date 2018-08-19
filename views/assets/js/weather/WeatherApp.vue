<template>
	<div>
		<h2>Weather App</h2> <hr/>

		<label>
			Enter a location:
		</label>
		<GmapAutocomplete 
			@place_changed="setPlace"
			class="form-control m-input"
			:componentRestrictions = "{country: 'bd'}"
			:selectFirstOnEnter="true"
		>
			
		</GmapAutocomplete>

		<h2>Temperature: 
			<span v-if="preload">Loading...</span>
			<span v-else>{{ temperature }} &#8451</span>
		</h2>

		<h2>Feel Like: 
			<span v-if="preload">Loading...</span>
			<span v-else>{{ apparentTemperature }} &#8451</span>
		</h2>
	</div>
</template>


<script>
	import commonRepo from '../Repository/CommonRepository';
	import weatherRepo from '../Repository/WeatherRepository';
	export default {
		data() {
			return {
				temperature: 0,
				apparentTemperature: 0,
				preload: false,
			}
		},
		computed: {
			commonRepo() {
				return new commonRepo()
			}
		},
		methods: {
			setPlace(place) {
                let lat = place.geometry.location.lat();
                let lng = place.geometry.location.lng();

                const URL = `http://localhost:3000/weather-data/${lat}/${lng}`;

                this.preload = true;
                axios.get(URL)
                	.then((response) => {
                		this.temperature = this.commonRepo.getCelciusValue(response.data.temperature);
                		this.apparentTemperature = this.commonRepo.getCelciusValue(response.data.apparentTemperature);
                		this.preload = false;
                	})
                	.catch((err) => {
                		console.log(err.response.data);
                		this.preload = false;
                	})
			},
		},
		mounted() {

		}
	}
</script>