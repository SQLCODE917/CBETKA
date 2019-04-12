const colors = {
	"data-red": "#d3002d",
	"carmine": "#9f0027",
	"charged": "#018484",
	"forest": "#016464",
	"teal": "#00a3a3",
	"fusion": "#3e5e9c",
	"chambray": "#5581d5",
	"sunflower": "#ffc800",
	"mustard": "#dda71b",
	"banana": "#ffdc69",
	"steel": "#f7fafc",
	"medal": "#eef2f6",
	"storm": "#c4cfdc",
	"rain": "#abbacc",
	"bridge": "#787489",
	"iron": "#3d3b49",
	"iron-darker": "#302e3a",
	"fencepost": "#eeeeee",
	"borders": "#929292",
	"smoke": "#fafafa"
};

const colorsByIntent = {
	"oreilly-red": colors["data-red"],
	"text": colors["iron"],
	"text-medium": colors["bridge"],
	"text-light": "#ffffff",
	"background-dark": colors["iron"],
	"borders-light": colors["fencepost"],
	"borders-dark": colors["iron"],
	"borders-focus": colors["teal"],
	"btn-primary-active": "#850021",
	"btn-secondary-active": colors["carmine"],
	"btn-secondary-rev-active": colors["iron-darker"],
	"btn-tertiary-active": "#014c4c",
	"btn-destructive-active": colors["iron-darker"],
	"default-link-active": "#850021",
	"success": colors["charged"],
	"success-dark": colors["forest"],
	"success-light": colors["teal"],
	"error": colors["data-red"],
	"error-dark": colors["carmine"],
	"alert": colors["sunflower"],
	"alert-dark": colors["mustard"],
	"alert-light": colors["banana"],
};

module.exports = {
  ...colors,
  ...colorsByIntent
};
