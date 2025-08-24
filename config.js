// Replace '#' with your real links
const LINKS = {
  private_offer: "mailto:kayandallc@gmail.com?subject=Request%20AWS%20Private%20Offer",
  stripe_activation: "#",
  paypal_activation: "#"
};
document.getElementById("btn-private").href = LINKS.private_offer;
document.getElementById("btn-stripe").href = LINKS.stripe_activation;
document.getElementById("btn-paypal").href = LINKS.paypal_activation;
