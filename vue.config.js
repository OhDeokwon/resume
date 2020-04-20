module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/scss/_common.scss";
               @import "@/assets/scss/_variables.scss";`
			}
		}
	},
	publicPath: process.env.NODE_ENV === 'production' ? '/resume/' : '/'
}
