export default {
	formatValue: (value: string) => {
		return value?.toUpperCase();
	},

	formatProductName: (value: string) => {
		if(value === "CACAO"){
			return "KAKAO";
		}
	}
};
