const dhaka = document.getElementById("dhaka");
const rajshahi = document.getElementById("rajshahi");
const khulna = document.getElementById("khulna");
const barishal = document.getElementById("barishal");
const dhakaDtls = document.getElementById("dhakaDtls");
const rajshahiDtls = document.getElementById("rajshahiDtls");
const khulnaDtls = document.getElementById("khulnaDtls");
const barishalDtls = document.getElementById("barishalDtls");

dhaka.addEventListener("click", () => {
  dhaka.classList.add("active");
  rajshahi.classList.remove("active");
  khulna.classList.remove("active");
  barishal.classList.remove("active");
  dhakaDtls.classList.remove("d-none");
  rajshahiDtls.classList.add("d-none");
  khulnaDtls.classList.add("d-none");
  barishalDtls.classList.add("d-none");
});
rajshahi.addEventListener("click", () => {
  dhaka.classList.remove("active");
  rajshahi.classList.add("active");
  khulna.classList.remove("active");
  barishal.classList.remove("active");
  dhakaDtls.classList.add("d-none");
  rajshahiDtls.classList.remove("d-none");
  khulnaDtls.classList.add("d-none");
  barishalDtls.classList.add("d-none");
});
khulna.addEventListener("click", () => {
  dhaka.classList.remove("active");
  rajshahi.classList.remove("active");
  khulna.classList.add("active");
  barishal.classList.remove("active");
  dhakaDtls.classList.add("d-none");
  rajshahiDtls.classList.add("d-none");
  khulnaDtls.classList.remove("d-none");
  barishalDtls.classList.add("d-none");
});
barishal.addEventListener("click", () => {
  dhaka.classList.remove("active");
  rajshahi.classList.remove("active");
  khulna.classList.remove("active");
  barishal.classList.add("active");
  dhakaDtls.classList.add("d-none");
  rajshahiDtls.classList.add("d-none");
  khulnaDtls.classList.add("d-none");
  barishalDtls.classList.remove("d-none");
});
